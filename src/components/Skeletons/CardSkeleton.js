import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material";
import React from "react";

function CardSkeleton() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ p: "16px !important" }}>
        <Box sx={{ mt: 0.5, mb: 0.5 }}>
          <Typography variant="caption" color="text.secondary">
            <Skeleton variant="text" width={150} />
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <Skeleton variant="text" width={100} />
          </Typography>
        </Box>
        <Typography variant="caption" color="text.secondary">
          <Skeleton variant="text" width={200} />
        </Typography>
        <Typography variant="caption" color="text.secondary">
          <Skeleton variant="text" width={100} />
        </Typography>{" "}
        <Box>
          <Skeleton height={200} width={"100%"} />
        </Box>
        <Box display="" justifyContent="">
          <Skeleton height={50} width={"100%"} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardSkeleton;
