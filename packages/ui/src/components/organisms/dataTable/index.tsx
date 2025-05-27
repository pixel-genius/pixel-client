import { Skeleton } from "../../atoms/skeleton";
import DataTableFnComponent, { DataTableProps } from "./dataTableComponent";
import { Suspense } from "react";

const DataTable = <ColumnDefType,>(props: DataTableProps<ColumnDefType>) => {
  return (
    <Suspense fallback={<Skeleton className="min-h-[100px] w-full" />}>
      <DataTableFnComponent {...props} />
    </Suspense>
  );
};

export { DataTable };
