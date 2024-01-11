import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStockCalls from "../service/useStockCalls";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FirmCard from '../components/FrimCard';
import NewFirmModal from '../components/NewFirmModal';

export default function MediaCard() {
  const { firms } = useSelector((state) => state.stock);
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("firms");
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firmalar
      </Typography>
      <Button variant="contained" sx={{textTransform:"capitalize"}} onClick={handleOpen}>yeni firma</Button>
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
      <NewFirmModal handleOpen={handleOpen} open={open} handleClose={handleClose} />
    </div>
  );
}
