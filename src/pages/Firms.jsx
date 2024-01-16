import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStockCalls from "../service/useStockCalls";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";
import { ErrorMsg, NoDataMsg, Spinner } from "../components/DataFetchMsg";

export default function Firms() {
  const { firms, loading, error } = useSelector((state) => state.stock);
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("firms");
  }, []);

  const [data, setData] = React.useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({
      name: "",
      phone: "",
      address: "",
      image: "",
    });
  };

    return (
      <div>
        <Typography variant="h4" color={"error"} mb={3}>
          Firms
        </Typography>
        <Button variant="contained" onClick={handleOpen}>
          new firms
        </Button>

        <FirmModal
          open={open}
          handleClose={handleClose}
          data={data}
          setData={setData}
        />

        {error && <ErrorMsg />}

        {loading && <Spinner/>}

        {!error && !loading && !firms.length && <NoDataMsg />}

        {!loading && !error && firms.length > 0 && (
          <Grid container gap={2} mt={3} justifyContent={"center"}>
            {firms?.map((firm) => (
              <Grid item key={firm._id}>
                <FirmCard
                  firm={firm}
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
