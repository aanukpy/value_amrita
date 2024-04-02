import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import { Divider } from "antd";
import React, { useState } from "react";
import routes from "../routes";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SideNav = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => {
    setOpen(!open);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ flex: 0.15 }}>
      <div
        style={{
          width: "100%",
          height: "600px",
          paddingBlock: 10,
        }}
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              top: 91,
              height: 500,
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <List
            style={{
              paddingLeft: 20,
              display: "flex",
              flexDirection: "column",
              alignItem: "center",
            }}
          >
            {routes.map((item, index) => (
              <ListItem dense={false} key={item.name} disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{ color: "#0e8ce0" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default SideNav;
