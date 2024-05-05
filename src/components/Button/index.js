import { Box, Button } from "@mui/material";
import React from "react";

function ButtonComponent({ type, children }) {
  return (
    <Button
      sx={{
        backgroundColor: type == "primary" ? "#58EFC2" : "#4D42DD",
        color: type == "primary" ? "#000000" : "#ffffff",
        width: "100%",
        borderRadius: 2,
        marginY: 0.5,
        "&:hover": {
          backgroundColor: type === "primary" ? "#58EFC2" : "#4D42DD",
          color: type === "primary" ? "#000000" : "#ffffff",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
