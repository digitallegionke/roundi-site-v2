import React from 'react'

interface TableRow {
  _key: string
  _type: 'tableRow'
  cells: string[]
}

interface TableValue {
  rows: TableRow[]
}

interface TableRendererProps {
  value: TableValue
}

export function TableRenderer({ value }: TableRendererProps) {
  if (!value?.rows || value.rows.length === 0) {
    return null
  }

  const [headerRow, ...bodyRows] = value.rows

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse">
        {headerRow && headerRow.cells && headerRow.cells.length > 0 && (
          <thead>
            <tr>
              {headerRow.cells.map((cell, index) => (
                <th
                  key={`header-${index}`}
                  className="border border-gray-300 bg-[#162318] px-4 py-3 text-left text-sm font-semibold text-white"
                >
                  {cell || ''}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {bodyRows.map((row, rowIndex) => (
            <tr key={row._key || `row-${rowIndex}`}>
              {row.cells?.map((cell, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className={`border border-gray-300 px-4 py-3 text-sm ${
                    rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  {cell || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
