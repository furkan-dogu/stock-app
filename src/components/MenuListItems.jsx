import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { icons } from "../helper/MenuIcons";
import { useNavigate } from "react-router-dom";
import { iconAndTextStyle } from "../styles/menuListStyle";

const MenuListItems = () => {
  const navigate = useNavigate();
  return (
    <List>
      {icons.map((item, index) => (
        <ListItem sx={iconAndTextStyle} key={index} disablePadding onClick={() => navigate(item.url)}>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItems;
