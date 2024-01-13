import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import useStockCalls from "../service/useStockCalls"
import ProductModal from "../components/ProductModal"
import ProductTable from "../components/ProductTable"

const Products = () => {

  const { getStocks } = useStockCalls()

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setInfo({ name: "", phone: "", address: "", image: "" })
  }

  useEffect(() => {
    getStocks("products")
    getStocks("categories")
    getStocks("brands")
  }, [])

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Ürünler
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3, textTransform: "capitalize" }}>
        Yeni Ürün
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <ProductTable />
    </div>
  )
}

export default Products
