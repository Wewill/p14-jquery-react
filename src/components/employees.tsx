import { useReducer, useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type { Column, PaginationState, Table } from "@tanstack/react-table";

type Employee = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
};

const defaultData: Employee[] = [
  {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    startDate: "2020-01-01",
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    department: "Sales",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    dateOfBirth: "1985-05-15",
    startDate: "2018-03-15",
    street: "456 Elm St",
    city: "Othertown",
    state: "NY",
    zipCode: "67890",
    department: "Marketing",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    dateOfBirth: "1992-07-20",
    startDate: "2021-06-01",
    street: "789 Oak St",
    city: "Sometown",
    state: "TX",
    zipCode: "54321",
    department: "Engineering",
  },
  {
    firstName: "Bob",
    lastName: "Brown",
    dateOfBirth: "1988-11-30",
    startDate: "2019-09-10",
    street: "321 Pine St",
    city: "Anycity",
    state: "FL",
    zipCode: "98765",
    department: "HR",
  },
  {
    firstName: "Charlie",
    lastName: "Davis",
    dateOfBirth: "1995-03-25",
    startDate: "2022-02-14",
    street: "654 Maple St",
    city: "Othercity",
    state: "WA",
    zipCode: "13579",
    department: "Finance",
  },
  {
    firstName: "David",
    lastName: "Wilson",
    dateOfBirth: "1993-09-12",
    startDate: "2020-08-20",
    street: "987 Birch St",
    city: "Newcity",
    state: "IL",
    zipCode: "24680",
    department: "IT",
  },
  {
    firstName: "Emily",
    lastName: "Clark",
    dateOfBirth: "1991-04-18",
    startDate: "2017-11-05",
    street: "222 Cedar St",
    city: "Springfield",
    state: "OH",
    zipCode: "11223",
    department: "Support",
  },
  {
    firstName: "Frank",
    lastName: "Evans",
    dateOfBirth: "1987-12-09",
    startDate: "2016-07-22",
    street: "333 Walnut St",
    city: "Lakeview",
    state: "MI",
    zipCode: "33445",
    department: "Logistics",
  },
  {
    firstName: "Grace",
    lastName: "Miller",
    dateOfBirth: "1994-06-30",
    startDate: "2021-01-10",
    street: "444 Spruce St",
    city: "Hilltown",
    state: "CO",
    zipCode: "55667",
    department: "Legal",
  },
  {
    firstName: "Henry",
    lastName: "Moore",
    dateOfBirth: "1989-10-22",
    startDate: "2015-04-18",
    street: "555 Aspen St",
    city: "Rivercity",
    state: "GA",
    zipCode: "77889",
    department: "Procurement",
  },
  {
    firstName: "Ivy",
    lastName: "Taylor",
    dateOfBirth: "1996-02-14",
    startDate: "2022-09-01",
    street: "666 Chestnut St",
    city: "Sunville",
    state: "AZ",
    zipCode: "99001",
    department: "Research",
  },
  {
    firstName: "Jack",
    lastName: "Anderson",
    dateOfBirth: "1990-08-05",
    startDate: "2019-12-12",
    street: "777 Willow St",
    city: "Westport",
    state: "OR",
    zipCode: "10112",
    department: "Development",
  },
  {
    firstName: "Karen",
    lastName: "Thomas",
    dateOfBirth: "1986-03-11",
    startDate: "2014-06-23",
    street: "888 Poplar St",
    city: "Easton",
    state: "PA",
    zipCode: "20223",
    department: "Operations",
  },
  {
    firstName: "Liam",
    lastName: "White",
    dateOfBirth: "1993-11-17",
    startDate: "2020-03-30",
    street: "999 Redwood St",
    city: "Northfield",
    state: "MN",
    zipCode: "30334",
    department: "Quality",
  },
  {
    firstName: "Mia",
    lastName: "Martin",
    dateOfBirth: "1997-05-28",
    startDate: "2023-01-15",
    street: "1010 Cypress St",
    city: "Southgate",
    state: "NC",
    zipCode: "40445",
    department: "Customer Service",
  },
  {
    firstName: "Noah",
    lastName: "King",
    dateOfBirth: "1992-09-03",
    startDate: "2018-10-08",
    street: "1111 Magnolia St",
    city: "Brookside",
    state: "MO",
    zipCode: "50556",
    department: "Administration",
  },
];

const columnHelper = createColumnHelper<Employee>();
const columns = [
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

export default function Employees() {
  const [data, setData] = useState(() => [...defaultData]);
  const rerender = useReducer(() => ({}), {})[1];

  // Pagination state
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // Table instance
  const table = useReactTable({
    columns,
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
    },
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
  });

  return (
    <>
      <h2>Current Employees</h2>

      <div className="p-2">
        <div className="h-2" />
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
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
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? " •"}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
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

function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: Table<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2" onClick={(e) => e.stopPropagation()}>
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      className="w-36 border shadow rounded"
      onChange={(e) => column.setFilterValue(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? "") as string}
    />
  );
}
