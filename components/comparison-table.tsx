"use client"

interface ComparisonRow {
  feature: string
  roundi: string
  competitor: string
}

interface ComparisonTableProps {
  competitor: string
  rows: ComparisonRow[]
}

export function ComparisonTable({ competitor, rows }: ComparisonTableProps) {
  if (!rows || rows.length === 0) return null

  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
        <thead className="bg-[#162318]">
          <tr>
            <th className="text-left py-4 px-4 md:px-6 font-semibold text-white text-sm md:text-base">
              Feature
            </th>
            <th className="text-left py-4 px-4 md:px-6 font-semibold text-[#c8e298] text-sm md:text-base">
              Roundi
            </th>
            <th className="text-left py-4 px-4 md:px-6 font-semibold text-white text-sm md:text-base">
              {competitor}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`border-b border-border ${index % 2 === 0 ? 'bg-background' : 'bg-card'}`}
            >
              <td className="py-4 px-4 md:px-6 font-medium text-foreground text-sm md:text-base">
                {row.feature}
              </td>
              <td className="py-4 px-4 md:px-6 text-[#162318] font-medium text-sm md:text-base">
                {row.roundi}
              </td>
              <td className="py-4 px-4 md:px-6 text-muted-foreground text-sm md:text-base">
                {row.competitor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
