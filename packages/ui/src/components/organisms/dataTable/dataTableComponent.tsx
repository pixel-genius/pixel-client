"use client";

import { useDataTable } from "@repo/dataTable";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableComponent } from "./components/data-table";
import { DataTableAdvancedToolbar } from "./components/data-table-advanced-toolbar";
import { DataTableFilterList } from "./components/data-table-filter-list";
import { DataTableFilterMenu } from "./components/data-table-filter-menu";
import { DataTableSortList } from "./components/data-table-sort-list";
import { DataTableToolbar } from "./components/data-table-toolbar";

type DataTableOptionsProp = {
  filterList: boolean;
  sortList: boolean;
  enableAdvancedFilter?: boolean;
  filterFlag?: "advancedFilters" | "simpleFilters";
  shallow?: boolean;
  debounceMs?: number;
  throttleMs?: number;
};

type DataTableColumns<ColumnDefType> = ColumnDef<ColumnDefType>[];

type DataTableData<ColumnDefType> = ColumnDefType[];
type DataTablePaginationState = {
  pageIndex?: number;
  pageCount?: number;
};
interface DataTablePagination extends DataTablePaginationState {}

export type DataTableProps<ColumnDefType> = {
  columns: DataTableColumns<ColumnDefType>;
  data: DataTableData<ColumnDefType>;
  options: DataTableOptionsProp;
  pagination?: DataTablePagination;
};

const DataTableFnComponent = <ColumnDefType,>({
  columns,
  data,
  options,
  pagination,
}: DataTableProps<ColumnDefType>) => {
  const {
    filterList,
    sortList,
    enableAdvancedFilter,
    filterFlag = "simpleFilters",
    shallow = false,
    debounceMs = 1000,
    throttleMs = 1000,
  } = options;
  const { pageIndex = 1, pageCount = 10 } = pagination || {};

  const { table } = useDataTable<ColumnDefType>({
    columns,
    data: data || [],
    pageCount,
  });

  return (
    <DataTableComponent table={table}>
      {enableAdvancedFilter ? (
        <DataTableAdvancedToolbar table={table}>
          <DataTableSortList table={table} align="start" />
          {filterFlag === "advancedFilters" ? (
            <DataTableFilterList
              table={table}
              shallow={shallow}
              debounceMs={debounceMs}
              throttleMs={throttleMs}
              align="start"
            />
          ) : (
            <DataTableFilterMenu
              table={table}
              shallow={shallow}
              debounceMs={debounceMs}
              throttleMs={throttleMs}
            />
          )}
        </DataTableAdvancedToolbar>
      ) : (
        <DataTableToolbar table={table}>
          <DataTableSortList table={table} align="end" />
        </DataTableToolbar>
      )}
      {/* {(filterList || sortList) && !advancedToolbar ? (
        <DataTableToolbar table={table}>
          {sortList && <DataTableSortList table={table} />}
        </DataTableToolbar>
      ) : (
        <DataTableAdvancedToolbar table={table}>
          {filterList && <DataTableFilterList table={table} />}
          {sortList && <DataTableSortList table={table} />}
        </DataTableAdvancedToolbar>
      )} */}
    </DataTableComponent>
  );
};
export default DataTableFnComponent;
