import { NextRequest, NextResponse } from 'next/server'
import JSZip from 'jszip'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    if (file.type !== 'application/zip' && !file.name.endsWith('.zip')) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload a ZIP file.' },
        { status: 400 }
      )
    }

    console.log('[v0] Processing ZIP file:', file.name, 'Size:', file.size)

    // Read the uploaded ZIP file
    const arrayBuffer = await file.arrayBuffer()
    const uploadedZip = new JSZip()
    await uploadedZip.loadAsync(arrayBuffer)

    // Create a new ZIP structure
    const newZip = new JSZip()
    let pdfCount = 0
    const processedNames = new Set<string>()

    // Process each file in the uploaded ZIP
    uploadedZip.forEach((relativePath, zipEntry) => {
      if (zipEntry.name.toLowerCase().endsWith('.pdf')) {
        // Extract the PDF name without extension
        const fileName = zipEntry.name.split('/').pop() || 'document'
        const pdfNameWithoutExt = fileName.replace(/\.pdf$/i, '')

        // Create a unique folder name
        let folderName = pdfNameWithoutExt
        let counter = 1
        while (processedNames.has(folderName)) {
          folderName = `${pdfNameWithoutExt}_${counter}`
          counter++
        }
        processedNames.add(folderName)

        // Add the PDF to its own folder in the new ZIP
        const folderPath = `${folderName}/${fileName}`
        newZip.file(folderPath, zipEntry.async('arraybuffer'))
        pdfCount++

        console.log('[v0] Added PDF:', folderPath)
      }
    })

    console.log('[v0] Total PDFs processed:', pdfCount)

    // Generate the new ZIP file
    const newZipBlob = await newZip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 6,
      },
    })

    // Generate a timestamp-based filename
    const timestamp = new Date().toISOString().slice(0, 10)
    const outputFileName = `pdfs-organizados-${timestamp}.zip`

    console.log('[v0] Generated new ZIP:', outputFileName, 'Size:', newZipBlob.size)

    // Return the ZIP file
    return new NextResponse(newZipBlob, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${outputFileName}"`,
        'X-PDF-Count': pdfCount.toString(),
        'X-File-Size': newZipBlob.size.toString(),
      },
    })
  } catch (error) {
    console.error('[v0] Error processing ZIP:', error)
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Error processing file',
      },
      { status: 500 }
    )
  }
}
