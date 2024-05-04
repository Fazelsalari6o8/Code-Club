// components
import Menu from "./Menu.jsx";
import RegisterBoxItems from "./RegisterBoxItems.jsx";

// mui
import { Drawer, Box } from "@mui/material";

function DrawerMenu({ open, toggleDrawer }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{ display: { md: "none" } }}
    >
      <Box
        component="div"
        sx={{
          width: "215px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "29px 0",
        }}
      >
        <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
          <RegisterBoxItems />
        </Box>
        {/* start menu */}
        <Box component="nav" sx={{ display: "flex", marginTop: "29px" }}>
          <Menu />
        </Box>
        {/* end menu */}
      </Box>
    </Drawer>
  );
}

export default DrawerMenu;
