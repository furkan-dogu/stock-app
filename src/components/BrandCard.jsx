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

export default function BrandCard({ brand, handleOpen, setData }) {
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
          {brand?.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={brand?.name}
        height="200"
        image={brand?.image}
        sx={{ objectFit: "contain" }}
      />
      <CardActions>
        <EditIcon sx={iconStyle} onClick={handleEdit} />
        <DeleteOutlineIcon
          sx={iconStyle}
          onClick={() => deleteStock("brands", brand?._id)}
        />
      </CardActions>
    </Card>
  );
}
