"use client";
import Templates from "@/app/(data)/Templates";
import TemplateCard from "./TemplateCard";
import { useEffect, useState } from "react";

const TemplateListSection = ({ userSearchInput }) => {
  const [templateList, setTemplateList] = useState(Templates);
  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((item, index) => (
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  );
};

export default TemplateListSection;
