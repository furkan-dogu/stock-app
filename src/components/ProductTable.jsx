import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { useSelector } from "react-redux"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import useStockCalls from "../service/useStockCalls";


export default function ProductTable() {
    const {deleteStock} = useStockCalls()
  const { products } = useSelector((state) => state.stock)

  function getRowId(row) {
    return row._id
  }

    const columns = [
      {
        field: "_id",
        headerName: "#",
        flex: 1.4,
        headerAlign: "center",
        align:"center",
        sortable: false,
        valueGetter: (params) => params.value.slice(-1),
      },
      {
        field: "categoryId",
        headerName: "Kategori",
        flex: 1,
        headerAlign: "center",
        align:"center",
        valueGetter: (params) => {
          console.log(params)
          return params.row.categoryId.name
        },
      },
      {
        field: "brandId",
        headerName: "Ürün",
        flex: 1.2,
        headerAlign: "center",
        align:"center",
        valueGetter: (params) => params.row.brandId.name
      },
      {
        field: "name",
        headerName: "İsim",
        flex: 1.5,
        headerAlign: "center",
        align:"center",
      },
      {
        field: "quantity",
        headerName: "Stok",
        type: "number",
        flex: 1.5,
        headerAlign: "center",
        align:"center",
      },
      {
        field: "actions",
        headerName: "Eylemler",
        description: "Bu sütunun bir değer alıcısı vardır ve sıralanamaz.",
        sortable: false,
        flex: 1.5,
        headerAlign: "center",
        align:"center",
        valueGetter: (params) =>
          `${params.row.firstName || ""} ${params.row.lastName || ""}`,
          renderCell: (params) => (
            <IconButton
              aria-label="delete"
              onClick={() => deleteStock("products", params.row._id)}
            >
              <DeleteForeverIcon />
            </IconButton>)
      },
    ]
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{
            toolbar: GridToolbar,
        }}
      />
    </Box>
  )
}
