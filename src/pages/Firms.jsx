import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import useStockCalls from "../service/useStockCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function MediaCard() {
  const { firms } = useSelector((state) => state.stock);
  const { getFirms } = useStockCalls();
  useEffect(() => {
    getFirms();
  }, []);

  return (
    <Stack
      spacing={{ xs: 1, sm: 2, md: 4 }}
      useFlexGap
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {firms.map((item) => (
        <Card sx={{ width: 300, height: 400 }} key={item.id}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.address}
            </Typography>
          </CardContent>
          <CardMedia
            component={"img"}
            image={item.image}
            title={item.name}
            sx={{ objectFit: "contain", height: 140, padding:"8px" }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{textAlign:"center"}}>
              {item.phone}
            </Typography>
          </CardContent>

          <CardActions sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <EditIcon/>
            <DeleteOutlineIcon/>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
}
