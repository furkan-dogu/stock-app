import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStockCalls from "../service/useStockCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FirmCard from '../components/FrimCard';

export default function MediaCard() {
  const { firms } = useSelector((state) => state.stock);
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firmalar
      </Typography>
      <Button variant="contained" sx={{textTransform:"capitalize"}}>yeni firma</Button>
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
