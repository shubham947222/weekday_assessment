import { Box } from "@mui/material";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";

import CardSkeleton from "../Skeletons/CardSkeleton";
import JobCard from "../JobCard";

const JobList = ({ jobList, hasMore, page, fetchMoreData, filterName }) => {
  return (
    <Box className="mx-3" sx={{}}>
      {jobList?.length > 0 ? (
        <InfiniteScroll
          dataLength={jobList.length}
          next={() => {
            fetchMoreData(page + 1);
          }}
          hasMore={hasMore}
          loader={
            <Box className="row">
              {[1, 2, 3].map((each) => (
                <Box className="col-lg-4 col-md-6 mb-4">
                  <CardSkeleton />
                </Box>
              ))}
            </Box>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>THanks</b>
            </p>
          }
        >
          <Box className="row">
            {jobList?.map((each, index) => (
              <Box className="col-lg-4 col-md-6 mb-4" key={each?.jdUid + index}>
                <JobCard each={each} />
              </Box>
            ))}
          </Box>
        </InfiniteScroll>
      ) : (
        <Box className="row">
          {[1, 2, 3].map((each) => (
            <Box className="col-lg-4 col-md-6 mb-4">
              <CardSkeleton />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default JobList;
