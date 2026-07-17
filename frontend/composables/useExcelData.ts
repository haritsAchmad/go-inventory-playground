import ExcelJS from 'exceljs'

export function useExcelData() {
  const downloadExcel = async (filename: string, columns: string[], rows: unknown[][]) => {
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Data')
    worksheet.addRow(columns)
    rows.forEach(row => worksheet.addRow(row.map(value => value ?? '')))
    worksheet.getRow(1).font = { bold: true }
    worksheet.views = [{ state: 'frozen', ySplit: 1 }]
    worksheet.columns.forEach(column => {
      const longest = Math.max(10, ...column.values.slice(1).map(value => String(value ?? '').length))
      column.width = Math.min(longest + 2, 45)
    })

    const buffer = await workbook.xlsx.writeBuffer()
    const url = URL.createObjectURL(new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    }))
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
    URL.revokeObjectURL(url)
  }

  const parseExcel = async (file: File) => {
    const workbook = new ExcelJS.Workbook()
    await workbook.xlsx.load(new Uint8Array(await file.arrayBuffer()))
    const worksheet = workbook.worksheets[0]
    if (!worksheet || worksheet.rowCount < 2) return []

    const headers = worksheet.getRow(1).values
      .slice(1)
      .map(value => String(value ?? '').trim().toLowerCase())
    const rows: Record<string, string>[] = []
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return
      const values = row.values.slice(1).map((_, index) => row.getCell(index + 1).text.trim())
      if (values.some(Boolean)) {
        rows.push(Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ''])))
      }
    })
    return rows
  }

  return { downloadExcel, parseExcel }
}
