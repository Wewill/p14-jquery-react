import type { Row } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

export default function TableBody<D extends { id: string | number }>({
  row,
}: {
  row: Row<D>;
}) {
  return (
    <tr key={row.id}>
      {row.getVisibleCells().map((cell) => {
        return (
          <td key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
}
