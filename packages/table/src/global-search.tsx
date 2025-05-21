import type { Table } from "@tanstack/react-table";
import { useEffect, useState } from "react";

export default function GlobalSearch<D extends {}>({
  table,
}: {
  table: Table<D>;
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    // + Gerer un minium de 3 caractères ?
    const timeoutId = setTimeout(() => {
      table.setGlobalFilter(value);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [value, table]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
