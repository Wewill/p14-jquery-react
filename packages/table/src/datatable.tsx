import { useMemo, useReducer, useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type { PaginationState } from "@tanstack/react-table";
import TableHead from "./table-head";
import GlobalSearch from "./global-search";

export default function Datatable<D extends { id: string | number }>({
  data,
  columns,
}: {
  data: D[];
  columns: {
    accessorKey: keyof D;
    header: string;
  }[];
}) {
  const rerender = useReducer(() => ({}), {})[1];

  const localColumns = useMemo(() => {
    const columnHelper = createColumnHelper<D>();

    return columns.map((column) => {
      const { accessorKey, header } = column;
      return columnHelper.accessor(accessorKey, {
        header: () => <span>{header}</span>,
        cell: (info) => info.getValue(),
      });
    });

    return [
      columnHelper.accessor("firstName", {
        header: () => <span>First Name</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("lastName", {
        header: () => <span>Last Name</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("dateOfBirth", {
        header: () => <span>Date of Birth</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("startDate", {
        header: () => <span>Start Date</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("street", {
        header: () => <span>Street</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("city", {
        header: () => <span>City</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("state", {
        header: () => <span>State</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("zipCode", {
        header: () => <span>Zip Code</span>,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("department", {
        header: () => <span>Department</span>,
        cell: (info) => info.getValue(),
      }),
    ];
    // TODO > Columns map
  }, [columns]);

  // Pagination state
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // Global search state
  const [globalFilter, setGlobalFilter] = useState<any>([]);

  // Table instance
  const table = useReactTable({
    columns: localColumns,
    data: data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      pagination,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
  });

  return (
    <>
      <GlobalSearch table={table} />

      <div className="p-2 bg-red-500">
        <div className="h-2" />
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableHead headerGroup={headerGroup} table={table} />
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="h-2" />
        <div className="flex items-center gap-2">
          <button
            className="border rounded p-1"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              min="1"
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>
          Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
          {table.getRowCount().toLocaleString()} Rows
        </div>
        <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
      </div>

      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
    </>
  );
}
