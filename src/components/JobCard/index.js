import { Box, Card, CardContent, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import theme from "../../utils/theme";
import Button from "../Button";
import User1 from "../../assets/user1.png";
import User2 from "../../assets/user2.png";
const JobCard = ({ each }) => {
  const [selectedJob, setSelectedJob] = useState("");
  const [openJobModal, setOpenJobModal] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Card
        className="h-100"
        sx={{
          borderRadius: 5,
          p: 2.2,
        }}
      >
        <CardContent className="h-100">
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
              <b>
                Estimated Salary: {each?.minJdSalary} - {each?.maxJdSalary} LPA
                ✅
              </b>
            </Typography>
          </Box>
          <Box sx={{ fontWeight: 600 }}>About Company:</Box>
          <Box sx={{ fontWeight: 700 }}>About us</Box>
          <Box
            sx={{
              height: 200,
              overflowY: "hidden",
              position: "relative",
            }}
          >
            {each?.jobDetailsFromCompany}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage:
                  "linear-gradient(rgb(255 255 255 / 0%), rgb(255 255 255 / 100%) 80%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "blue", zIndex: 2, cursor: "pointer" }}
                onClick={() => {
                  setOpenJobModal(true);
                  setSelectedJob(each?.jobDetailsFromCompany);
                  console.log("first");
                }}
              >
                Show more
              </Typography>
            </div>
          </Box>

          {each?.minExp && (
            <>
              <Box>Minimum Experience</Box>
              <Box>{each?.minExp} years</Box>
            </>
          )}
        </CardContent>
        <Button type="primary" name="Easy Apply">
          <b>⚡Easy Apply</b>
        </Button>

        <Button type="secondary">
          <img src={User1} width="24px" style={{ filter: "blur(1px)" }} />
          <img src={User2} width="24px" style={{ filter: "blur(1px)" }} /> Ask
          for referral
        </Button>
      </Card>
      <Modal
        open={openJobModal}
        onClose={() => {
          setOpenJobModal(false);
          setSelectedJob("");
        }}
        aria-labelledby="Job Description"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <b>Job Description</b>
            </Typography>
          </Box>
          <Typography
            variant="body1"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <b>About the job</b>
          </Typography>
          <Typography
            variant="subtitle1"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {selectedJob}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default JobCard;
