import type { Table } from "@tanstack/react-table";
import type { Employee } from "../../types";
import { useEffect, useState } from "react";

interface GlobalSearchProps {
  table: Table<Employee>;
}

export default function GlobalSearch({ table }: GlobalSearchProps) {
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
