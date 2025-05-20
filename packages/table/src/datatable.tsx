import { useMemo, useReducer, useState } from "react";

import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type { PaginationState } from "@tanstack/react-table";
import TableHead from "./table-head";
import TableBody from "./table-body";
import GlobalSearch from "./global-search";
import Pagination from "./pagination";

export default function Datatable<D extends { id: string | null }>({
  data,
  columns,
}: {
  data: D[];
  columns: {
    key: keyof D;
    header: string;
  }[];
}) {
  const rerender = useReducer(() => ({}), {})[1];

  const localColumns = useMemo(() => {
    const columnHelper = createColumnHelper<D>();
    return columns.map((column) => {
      const { key, header } = column;
      return columnHelper.accessor(key as any, {
        header: () => <span>{header}</span>,
        cell: (info) => info.getValue(),
      });
    });
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

      <div className="p-2">
        <div className="h-2" />
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableHead headerGroup={headerGroup} />
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <TableBody row={row} />
            ))}
          </tbody>
        </table>
        <div className="h-2" />
        <Pagination table={table} />
      </div>

      <div className="hide">
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
    </>
  );
}
