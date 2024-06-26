import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { iconStyle } from "../styles/globalStyles";
import useStockCalls from "../service/useStockCalls";

export default function FirmCard({ firm, handleOpen, setData }) {
  const { deleteStock } = useStockCalls();

  const handleEdit = () => {
    handleOpen();
    setData(firm);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        height: "400px",
        p: 2,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{height: 62, display: "flex", alignItems: "center"}}>
          {firm?.address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={firm?.name}
        image={firm?.image}
        sx={{ objectFit: "contain", height: 140 }}
      />
      <Typography variant="body2" color="text.secondary">
        {firm?.phone}
      </Typography>
      <CardActions>
        <EditIcon sx={iconStyle} onClick={handleEdit} />
        <DeleteOutlineIcon
          sx={iconStyle}
          onClick={() => deleteStock("firms", firm?._id)}
        />
      </CardActions>
    </Card>
  );
}
