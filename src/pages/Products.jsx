import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";
import { useSelector } from "react-redux";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";

const Products = () => {
  const { products, loading, error } = useSelector((state) => state.stock);

  // const { getStocks } = useStockCalls();
  const { getProductTable } = useStockCalls();

  const [data, setData] = useState({
    name: "",
    categoryId: "",
    brandId: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({
      name: "",
      categoryId: "",
      brandId: "",
    });
  };

  useEffect(() => {
    // getStocks("products");
    // getStocks("categories");
    // getStocks("brands");

    getProductTable()
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>
        New Product
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
      />

      {error && <ErrorMsg />}

      {loading && products.map((item) => <TableSkeleton key={item} />)}

      {!error && !loading && !products.length && <NoDataMsg />}

      {!loading && !error && products.length > 0 && <ProductTable />}
    </div>
  );
};

export default Products;
