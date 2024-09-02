"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState();
  return (
    <div>
      <SearchSection onSearchInput={(value) => setUserSearchInput(value)} />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default Dashboard;
