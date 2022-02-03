/* eslint-disable react/jsx-key */
import React from 'react'
import { useTable } from 'react-table'

export type Data = Record<string, string | string[]>[]

export type Columns = {
  Header: string
  accessor: string
  columns?: Columns[]
}

type TableProps = {
  columns: Columns[]
  data: Data
}

function Table({ columns, data }: TableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <table {...getTableProps()} className="border-collapse w-full">
      <thead className="hidden lg:table-header-group">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="px-6 py-3 bg-gray-200 font-normal text-left text-[12px]"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-3 border-b border-gray-200"
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
