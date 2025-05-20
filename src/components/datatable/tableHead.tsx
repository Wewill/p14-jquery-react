import type { HeaderGroup, Table } from "@tanstack/react-table";
import type { Employee } from "../../types";

import { flexRender } from "@tanstack/react-table";

import ColumnFilter from "./columnFilter";

interface TableHeadProps {
  headerGroup: HeaderGroup<Employee>;
  table: Table<Employee>;
}

export default function TableHead({ headerGroup, table }: TableHeadProps) {
  return (
    <tr key={headerGroup.id}>
      {headerGroup.headers.map((header) => {
        return (
          <th key={header.id} colSpan={header.colSpan}>
            <div
              {...{
                className: header.column.getCanSort()
                  ? "cursor-pointer select-none"
                  : "",
                onClick: header.column.getToggleSortingHandler(),
              }}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
              {{
                asc: " 🔼",
                desc: " 🔽",
              }[header.column.getIsSorted() as string] ?? " •"}
              {header.column.getCanFilter() ? (
                <div>
                  <ColumnFilter column={header.column} table={table} />
                </div>
              ) : null}
            </div>
          </th>
        );
      })}
    </tr>
  );
}
