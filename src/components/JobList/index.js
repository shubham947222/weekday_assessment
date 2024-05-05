import { Box } from "@mui/material";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";

import CardSkeleton from "../Skeletons/CardSkeleton";
import JobCard from "../JobCard";
const JobList = () => {
  const [jobList, setJobList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);
  useEffect(() => {
    fetchMoreData(1);
  }, []);

  const fetchMoreData = (pageNo = page) => {
    if (pageNo != 1 && jobList.length >= totalCount) {
      setHasMore(false);
      return;
    }

    axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON", {
        limit: 10,
        offset: pageNo,
      })
      .then((response) => {
        console.log(response?.data, "red");
        setJobList([...jobList, ...response.data?.jdList]);
        setTotalCount(response.data?.totalCount);
        setPage(page + 1);
      });
  };
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
