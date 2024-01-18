import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStockCalls from "../service/useStockCalls";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import BrandModal from "../components/BrandModal";
import BrandCard from "../components/BrandCard";
import { ErrorMsg, NoDataMsg, Spinner } from "../components/DataFetchMsg";

export default function Brands() {
  const { brands, loading, error } = useSelector((state) => state.stock);
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("brands");
  }, []);

  const [data, setData] = React.useState({
    name: "",
    image: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({
      name: "",
      image: "",
    });
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Typography variant="h4" color={"error"} mb={3}>
          Brands
        </Typography>
        <Button variant="contained" onClick={handleOpen}>
          New Brand
        </Button>

        <BrandModal
          open={open}
          handleClose={handleClose}
          data={data}
          setData={setData}
        />
        {error && <ErrorMsg />}

        {loading && <Spinner />}

        {!loading && !brands.length && <NoDataMsg />}

        {!loading && brands.length > 0 && (
          <Grid container gap={2} mt={3} justifyContent={"center"}>
            {brands?.map((brand) => (
              <Grid item key={brand._id}>
                <BrandCard
                  brand={brand}
                  handleOpen={handleOpen}
                  setData={setData}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    );
  }
}
