import { Box } from "@mui/material";

const NavBar: React.FC = () => {
  return (
    <Box
      sx={{
        height: "10%",
        width: "100%",
        boxSizing: "border-box",
        border: "2px solid #3d3d3d",

        background: "#1f1e26",
      }}
    ></Box>
  );
};

export default NavBar;
