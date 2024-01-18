import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import PurchasesModal from "../components/PurchasesModal";
import PurchasesTable from "../components/PurchasesTable";
import { useSelector } from "react-redux";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import { Container } from "@mui/material";

const Purchases = () => {
  const { purchases, loading, error } = useSelector((state) => state.stock);

  // const { getStocks } = useStockCalls();
  const { getPurchasesTable } = useStockCalls();

  const [data, setData] = useState({
    firmId: "",
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
      firmId: "",
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };

  useEffect(() => {
    // getStocks("purchases");
    // getStocks("firms");
    // getStocks("brands");
    // getStocks("products");

    getPurchasesTable()
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" color="error" mb={3}>
        Purchases
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>
        New purchase
      </Button>

      <PurchasesModal
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
      />

      {error && <ErrorMsg />}

      {loading && purchases.map((item) => <TableSkeleton key={item} />)}

      {!error && !loading && !purchases.length && <NoDataMsg />}

      {!error && !loading && purchases.length > 0 && <PurchasesTable handleOpen={handleOpen} setData={setData} data={data} />}
    </Container>
  );
};

export default Purchases;
