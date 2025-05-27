"use client";

import { DataTable } from "@repo/ui/components";
import { useMemo } from "react";

const DataTablePage = () => {
  // With standard toolbar
  const columns = useMemo(
    () => [
      {
        id: "code",
        accessorKey: "code",
        header: "Code",
      },
      {
        id: "name",
        accessorKey: "name",
        header: "Name",
      },
    ],
    [],
  );

  // With standard toolbar
  return (
    <DataTable
      columns={columns}
      data={[]}
      options={{
        filterList: true,
        sortList: true,
        advancedToolbar: true,
      }}
    />
  );
};
export default DataTablePage;
