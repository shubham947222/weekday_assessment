import React, { useState } from "react";
import Box from "@mui/material/Box";

import SelectComponent from "../Select";
import { Input } from "@mui/material";

const roles = ["frontend", "backend", "ios", "android", "tech lead"];
const location = ["remote", "hybride", "on-site"];
const minExp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const NumberOfEmployees = [
  "1-10",
  "11-20",
  "21-50",
  "51-100",
  "101-200",
  "201-500",
  "500+",
];
const minJdSalary = [0, 10, 20, 30, 40, 50, 60, 70];
function Filters({
  jobList,
  setJobList,
  page,
  fetchMoreData,
  filterName,
  setfilterName,
}) {
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap", my: 2 }}>
        {/* <MultiSelectChip /> */}
        <SelectComponent
          label="Roles"
          jobList={jobList}
          setJobList={setJobList}
          names={roles}
          page={page}
          fetchMoreData={fetchMoreData}
          setfilterName={setfilterName}
          filterName={filterName}
        />
        <SelectComponent
          label="Number Of Employees"
          jobList={jobList}
          setJobList={setJobList}
          names={NumberOfEmployees}
          page={page}
          fetchMoreData={fetchMoreData}
          setfilterName={setfilterName}
          filterName={filterName}
        />
        <SelectComponent
          label="Experience"
          jobList={jobList}
          setJobList={setJobList}
          names={minExp}
          page={page}
          fetchMoreData={fetchMoreData}
          setfilterName={setfilterName}
          filterName={filterName}
        />
        <SelectComponent
          label="Remote"
          jobList={jobList}
          setJobList={setJobList}
          names={location}
          page={page}
          fetchMoreData={fetchMoreData}
          setfilterName={setfilterName}
          filterName={filterName}
        />
        <SelectComponent
          label="Min Base Pay Salary"
          jobList={jobList}
          setJobList={setJobList}
          names={minJdSalary}
          page={page}
          fetchMoreData={fetchMoreData}
          setfilterName={setfilterName}
          filterName={filterName}
        />
        {/* <Input
          size="lg"
          variant="outlined"
          jobList={jobList}
          setJobList={setJobList}
          placeholder="Search Company name"
          page={page}
          fetchMoreData={fetchMoreData}
        /> */}
      </Box>
    </div>
  );
}

export default Filters;
