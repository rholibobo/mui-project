import React, { useState } from "react";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

function App() {
  const [mode, setMode] = useState("light");
  const bgcolor = "background.default";
  const color = "text.primary";
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={bgcolor} color={color}>
        <Navbar setMode={setMode} mode={mode} />
        <Stack direction="row" sx={{gap :{xs: 0, md: 2}}} justifyContent="space-between" >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
