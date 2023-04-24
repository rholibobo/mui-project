import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Switch,
  ListItemIcon,
} from "@mui/material";
import {
  Code,
  LightMode,
  Mail,
  ModeNight,
  Notifications,
} from "@mui/icons-material";
import { useState } from "react";

const Navbar = ({ setMode, mode }) => {
  const [switchIcons, setSwitchIcons] = useState(false);
  const [open, setOpen] = useState(false);

  function switchIconsMode() {
    setSwitchIcons((prevState) => !prevState);
  }

  function switchTheme() {
    setMode(mode === "light" ? "dark" : "light");
  }

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    cursor: "pointer",
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          Dev Umoh
        </Typography>
        <Code
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
        />
        <Search>
          <InputBase placeholder="search.." />
        </Search>
        <Box alignItems="center" sx={{ display: { xs: "flex", sm: "none" } }}>
          {switchIcons ? (
            <LightMode
              onClick={() => {
                switchIconsMode();
                switchTheme();
              }}
            />
          ) : (
            <ModeNight
              onClick={() => {
                switchIconsMode();
                switchTheme();
              }}
            />
          )}
        </Box>

        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar src="" onClick={(e) => setOpen(true)} />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Avatar onClick={(e) => setOpen(true)} />
          <Typography>Rholi Pop</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

// (e) => setMode(mode === "light" ? "dark" : "light")
