// layouts/MainLayout.tsx
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import SideBarDemo from "./SideBarDemo";

const MainLayout: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        background: "hotpink",
        boxSizing: "border-box",
      }}
    >
      {/* Left Sidebar */}
      <SideBar />

      <Box
        sx={{
          height: "100%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navigation Bar */}
        <NavBar />

        {/* Outlet Area (Scrollable Content) */}
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            height: "90%",
            overflow: "auto",
            boxSizing: "border-box",
            background: "#171622",
          }}
        >
          <Outlet />
        </Box>
      </Box>

      {/* Right Sidebar */}
      <SideBarDemo />
    </Box>
  );
};

export default MainLayout;
