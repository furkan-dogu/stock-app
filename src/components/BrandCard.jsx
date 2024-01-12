import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { iconStyle } from "../styles/globalStyle";
import useStockCalls from "../service/useStockCalls";

export default function BrandCard({ brand, handleOpen, setData }) {
  const { name, image, _id } = brand;
  const { deleteStock } = useStockCalls();

  const handleEdit = () => {
    handleOpen();
    setData(brand);
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
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={name}
        height="200"
        image={image}
        sx={{ objectFit: "contain" }}
      />
      <CardActions>
        <EditIcon sx={iconStyle} onClick={handleEdit} />
        <DeleteOutlineIcon
          sx={iconStyle}
          onClick={() => deleteStock("brands", _id)}
        />
      </CardActions>
    </Card>
  );
}
