import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStockCalls from "../service/useStockCalls";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

export default function Firms() {
  const { firms } = useSelector((state) => state.stock);
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
        Firmalar
      </Typography>
      <Button
        variant="contained"
        sx={{ textTransform: "capitalize" }}
        onClick={handleOpen}
      >
        yeni firma
      </Button>
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} handleOpen={handleOpen} setData={setData} />
          </Grid>
        ))}
      </Grid>
      <FirmModal
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
      />
    </div>
  );
}
