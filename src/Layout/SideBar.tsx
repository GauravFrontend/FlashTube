import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "20%",
        background: "#1f1e26",
        border: "2px solid #3d3d3d",
        boxSizing: "border-box",
      }}
    >
      <NavLink to={"/about"}>home</NavLink>
      <button>about</button>
    </Box>
  );
};

export default SideBar;
