import type { HeaderGroup } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

export default function TableHead<D extends { id: string | number }>({
  headerGroup,
}: {
  headerGroup: HeaderGroup<D>;
}) {
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
            </div>
          </th>
        );
      })}
    </tr>
  );
}
