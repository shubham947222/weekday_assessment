import { useEffect, useState } from "react";
import "./App.css";
import Filters from "./components/Filter";
import JobList from "./components/JobList";
import axios from "axios";

function App() {
  const [jobList, setJobList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);

  const [filterName, setfilterName] = useState({});

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
        setJobList([...jobList, ...response.data?.jdList]);
        setTotalCount(response.data?.totalCount);
        setPage(page + 1);
      });
  };

  useEffect(() => {
    if (!Object.keys(filterName).length > 0) {
      return;
    }

    filterJobs(filterName);
  }, [filterName]);
  const filterJobs = (filterName) => {
    const filtedJobs = jobList?.filter(
      (each) =>
        filterName["Roles"]?.includes(each.jobRole) ||
        filterName["location"]?.includes(each.Remote)
    );
    setJobList(filtedJobs);
  };
  console.log("filter", filterName);
  return (
    <div className="App">
      <Filters
        jobList={jobList}
        setJobList={setJobList}
        fetchMoreData={fetchMoreData}
        page={page}
        filterName={filterName}
        setfilterName={setfilterName}
      />
      <JobList
        jobList={jobList}
        hasMore={hasMore}
        page={page}
        fetchMoreData={fetchMoreData}
        filterName={filterName}
      />
    </div>
  );
}

export default App;
