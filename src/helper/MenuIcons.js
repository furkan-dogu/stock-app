import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const icons = [
  {
    icon: <SpaceDashboardIcon />,
    title: "Tablolar",
    url: "/stok/",
  },
  {
    title: "Alımlar",
    icon: <ShoppingCartIcon />,
    url: "/stok/alimlar/",
  },
  {
    title: "Satışlar",
    icon: <AttachMoneyIcon />,
    url: "/stok/satislar/",
  },
  {
    title: "Firmalar",
    icon: <StoreIcon />,
    url: "/stok/firmalar/",
  },
  {
    title: "Markalar",
    icon: <StarsIcon />,
    url: "/stok/markalar/",
  },
  {
    title: "Ürünler",
    icon: <InventoryIcon />,
    url: "/stok/urunler/",
  },
];

