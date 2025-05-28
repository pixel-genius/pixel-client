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
        enableColumnFilter: true,
        meta: {
          label: "Title",
          placeholder: "Search titles...",
          variant: "text" as const,
        },
      },
      {
        id: "name",
        accessorKey: "name",
        header: "Name",
        enableColumnFilter: true,
        meta: {
          label: "Name",
          placeholder: "Search names...",
          variant: "text" as const,
        },
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
        enableAdvancedFilter: true,
      }}
      pagination={{
        pageIndex: 1,
        pageCount: 10,
      }}
    />
  );
};
export default DataTablePage;
