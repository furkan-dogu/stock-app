import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import useStockCalls from "../service/useStockCalls";

export default function PurchasesTable({ handleOpen, data, setData }) {
  const { deleteStock } = useStockCalls();
  const { purchases } = useSelector((state) => state.stock);

  const getRowId = (row) => row._id;

  const handleEdit = (params) => {
    handleOpen();
    setData({
      ...data,
      _id: params?.id,
      firmId: params?.row?.firmId?._id,
      brandId: params?.row?.brandId?._id,
      productId: params?.row?.productId?._id,
      price: params?.row?.price,
      quantity: params?.row?.quantity,
    });
  };

  const columns = [
    {
      field: "updatedAt",
      headerName: "Date",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      sortable: false,
      align: "center",
      valueGetter: (params) =>
        new Date(params.row.createdAt).toLocaleDateString("tr-TR"),
    },
    {
      field: "firmId",
      headerName: "Firm",
      flex: 1.5,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row?.firmId?.name,
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
      field: "productId",
      headerName: "Product",
      flex: 1.5,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row?.productId?.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row?.quantity,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row?.price,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row?.amount,
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
          icon={<EditIcon />}
          onClick={() => handleEdit(params)}
          label="Edit"
        />,
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => deleteStock("purchases", params.id)}
          label="Delete"
        />,
      ],
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={purchases}
        columns={columns}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
