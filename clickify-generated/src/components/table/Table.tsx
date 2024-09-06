import React, { Key, useState } from "react";
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  IconButton,
  Icon,
} from "@mui/material";
import { colorPalette } from "@/theme/colorPalette";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function compareValues<T>(a: T, b: T, orderBy: keyof T, order: "asc" | "desc"): number {
  const valueA = typeof a[orderBy] === "string" ? String(a[orderBy]).toLowerCase() : a[orderBy];
  const valueB = typeof b[orderBy] === "string" ? String(b[orderBy]).toLowerCase() : b[orderBy];

  if (typeof valueA === "number" && typeof valueB === "number") {
    return order === "asc" ? valueA - valueB : valueB - valueA;
  }
  if (typeof valueA === "string" && typeof valueB === "string") {
    return order === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
  }
  if (typeof valueA === "boolean" && typeof valueB === "boolean") {
    return order === "asc" ? (valueA ? 1 : -1) : valueB ? -1 : 1;
  }
  return 0;
}

interface BaseRow {
  id: number;
}

interface HeadCell<T> {
  id: keyof T;
  label: string;
  searchAvailable?: boolean;
}

interface TableEvent {
  totalCount: number;
  page: number;
  rowsPerPage: number;
  orderBy: string;
  order: "asc" | "desc";
}

interface TableProps<T> {
  rows: T[];
  headCells: HeadCell<T>[];
  style?: React.CSSProperties;
  onUpdate?: (event: TableEvent) => void;
  onDelete?: (event: TableEvent) => void;
  onEdit?: (event: TableEvent) => void;
  onView?: (event: TableEvent) => void;
  totalCount: number;
}

export const Table = <T extends BaseRow>({
  rows,
  style,
  headCells,
  onUpdate,
  totalCount,
  onDelete,
  onEdit,
  onView,
}: TableProps<T>) => {
  const [orderBy, setOrderBy] = useState<keyof T>("id" as keyof T);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const update = () => {
    onUpdate?.({
      totalCount,
      page,
      rowsPerPage,
      orderBy: orderBy as string,
      order,
    });
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    update();
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    update();
  };

  const handleRequestSort = (property: keyof T) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    update();
  };

  const haveActions = !!onDelete;

  return (
    <TableContainer
      component={Paper}
      style={{ ...style, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
    >
      <MUITable>
        <TableHead
          sx={{
            backgroundColor: colorPalette.lightGrey,
          }}
        >
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                style={{ width: "min-content" }}
                key={headCell.id as Key}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={() => handleRequestSort(headCell.id)}
                >
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            ))}
            {haveActions && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .sort((a, b) => compareValues(a, b, orderBy, order))
            .map(
              (row) =>
                row.id && (
                  <TableRow key={row.id as Key}>
                    {headCells.map((headCell) => (
                      <TableCell
                        style={{ paddingTop: 2, paddingBottom: 2, width: "min-content" }}
                        key={headCell.id as Key}
                      >
                        {row[headCell.id] as string}
                      </TableCell>
                    ))}
                    {haveActions && (
                      <TableCell style={{ width: 120, paddingTop: 2, paddingBottom: 2 }}>
                        {onView && (
                          <IconButton
                            onClick={() => {
                              onView({
                                totalCount,
                                page,
                                rowsPerPage,
                                orderBy: orderBy as string,
                                order,
                              });
                            }}
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </IconButton>
                        )}

                        {onEdit && (
                          <IconButton
                            onClick={() => {
                              onEdit({
                                totalCount,
                                page,
                                rowsPerPage,
                                orderBy: orderBy as string,
                                order,
                              });
                            }}
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </IconButton>
                        )}
                        {onDelete && (
                          <IconButton
                            onClick={() => {
                              onDelete({
                                totalCount,
                                page,
                                rowsPerPage,
                                orderBy: orderBy as string,
                                order,
                              });
                            }}
                          >
                            <FontAwesomeIcon icon={faTrashCan} color="red" />
                          </IconButton>
                        )}
                      </TableCell>
                    )}
                  </TableRow>
                ),
            )}
        </TableBody>
      </MUITable>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
