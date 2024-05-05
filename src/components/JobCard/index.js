import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import theme from "../../utils/theme";
import Button from "../Button";
import User1 from "../../assets/user1.png";
import User2 from "../../assets/user2.png";
const JobCard = ({ each }) => {
  return (
    <Card
      className=""
      sx={{
        borderRadius: 5,
        p: 2.2,
      }}
    >
      <CardContent>
        <Box
          sx={{
            boxShadow: theme.shadows[2],
            display: "inline-block",
            padding: "1px 4px",
            marginBottom: 2,
            borderRadius: 4,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            ⌛Posted 10 days ago
          </Typography>
        </Box>
        <Box className="d-flex gap-2">
          <img
            src={each?.logoUrl}
            width="40px"
            style={{
              borderRadius: "5px",
            }}
          />
          <Box sx={{ mx: 1 }}>
            <Box sx={{ color: theme.palette.gray.light1 }}>
              <b>{each?.companyName}</b>
              <br />
            </Box>
            <Box>
              {each?.jobRole.charAt(0).toUpperCase() + each?.jobRole.slice(1)}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            px: 6,
          }}
        >
          <Typography variant="" color="text.secondary">
            {each?.location}
          </Typography>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color="text.secondary">
            <b>Estimated Salary: 10 - 20 LPA ✅</b>
          </Typography>
        </Box>
        <Box sx={{ fontWeight: 600 }}>About Company:</Box>
        <Box sx={{ fontWeight: 700 }}>About us</Box>
        <Box
          sx={{
            height: 200,
            overflowY: "hidden",
            position: "relative", // Make the box position relative for absolute positioning
          }}
        >
          {each?.jobDetailsFromCompany}
          {/* Overlay with white blurry effect */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%", // Set height to 100% to cover the entire box
              backgroundImage:
                "linear-gradient(rgb(255 255 255 / 0%), rgb(255 255 255 / 100%) 80%)", // Adjust the gradient to fade out
              zIndex: 1, // Ensure the gradient is above the content
              pointerEvents: "none", // Prevent interactions with the gradient
            }}
          />
          {/* Text "Join" */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "20%", // Adjust the height of the text area
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "blue", zIndex: 2, cursor: "pointer" }}
            >
              Show more
            </Typography>
          </div>
        </Box>

        <Box>Minimum Experience</Box>
        <Box>{each?.minExp} years</Box>
      </CardContent>
      <Button type="primary" name="Easy Apply">
        <b>⚡Easy Apply</b>
      </Button>

      <Button type="secondary">
        <img src={User1} width="24px" style={{ filter: "blur(1px)" }} />
        <img src={User2} width="24px" style={{ filter: "blur(1px)" }} /> Ask for
        referral
      </Button>
    </Card>
  );
};

export default JobCard;
