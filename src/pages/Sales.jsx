import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import SalesModal from "../components/SalesModal";
import SalesTable from "../components/SalesTable";
import { useSelector } from "react-redux";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import { Container } from "@mui/material";

const Sales = () => {
  const { sales, loading, error } = useSelector((state) => state.stock);

  // const { getStocks } = useStockCalls();
  const { getSalesTable } = useStockCalls();

  const [data, setData] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };

  useEffect(() => {
    // getStocks("sales");
    // getStocks("brands");
    // getStocks("products");

    getSalesTable()
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" color="error" mb={3}>
        Sales
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>
        New sale
      </Button>

      <SalesModal
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
      />

      {error && <ErrorMsg />}

      {loading && sales.map((item) => <TableSkeleton key={item} />)}

      {!loading && !sales.length && <NoDataMsg />}

      {!loading && sales.length > 0 && <SalesTable handleOpen={handleOpen} setData={setData} data={data} />}
    </Container>
  );
};

export default Sales;
