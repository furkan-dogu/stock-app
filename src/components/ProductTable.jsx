import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCalls from "../service/useStockCalls";

export default function ProductTable() {
  const { deleteStock } = useStockCalls();
  const { products } = useSelector((state) => state.stock);

  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "_id",
      headerName: "#",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      sortable: false,
      valueGetter: (params) => params.value?.slice(-6),
    },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 1.5,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row?.categoryId?.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.5,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row?.brandId?.name,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1.5,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      minWidth: 75,
      headerAlign: "center",
      align: "center",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => deleteStock("products", params?.id)}
          label="Delete"
        />,
      ],
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
