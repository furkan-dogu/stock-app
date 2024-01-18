import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import StoreIcon from "@mui/icons-material/Store";
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import { teal, red, indigo } from "@mui/material/colors";
import { useSelector } from "react-redux";

const KPI = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const totalSales = sales?.reduce((acc, item) => acc + item.amount, 0);

  const totalPurchases = purchases?.reduce((acc, item) => acc + item.amount, 0);

  const kpiData = [
    {
      id: 1,
      title: "sales",
      amount: `${totalSales}`,
      icon: <PointOfSaleIcon sx={{ fontSize: "3rem" }} />,
      bgColor: teal[100],
      color: teal[700],
    },
    {
      id: 2,
      title: "profit",
      amount: `${totalSales - totalPurchases}`,
      icon: <ProductionQuantityLimitsIcon sx={{ fontSize: "3rem" }} />,
      bgColor: red[100],
      color: red[700],
    },
    {
      id: 3,
      title: "purchases",
      amount: `${totalPurchases}`,
      icon: <StoreIcon sx={{ fontSize: "3rem" }} />,
      bgColor: indigo[100],
      color: indigo[700],
    },
  ];
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
      flexWrap={"wrap"}
      gap={2}
    >
      {kpiData.map((item) => (
        <Paper
          key={item.id}
          elevation={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "275px",
            p: 2,
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              width: "75px",
              height: "75px",
              bgcolor: item.bgColor,
              color: item.color,
            }}
          >
            {item.icon}
          </Avatar>
          <Box>
            <Typography variant="button">{item.title}</Typography>
            <Typography variant="h5">${item.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPI;
