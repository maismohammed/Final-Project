import React, { useEffect, useState } from "react";
// import Job from "./Job";
import SingleJob from './SingleJob'
const JobsBank = ({ data, setKeywords, keywords }) => {
  const [filteredData, setfilteredData] = useState([]);

  // const SearchFunc = () => {
  //   if (keywords.length > 0) {
  //     const newData = filteredData.filter((d) => {
  //       return d.position.toLocaleLowerCase().includes(keywords);
  //     });
  //     setfilteredData(newData);
  //   } else {
  //     setfilteredData(data);
  //   }
  // };

  const modifiedData = () => {
    if (keywords) {
      const newData = data.filter((d) => {
        return keywords.every((key) => {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setfilteredData(newData);
    } else {
      setfilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
    // SearchFunc();
  }, [keywords]);

  return (
    <div className="jobs">
      {filteredData.map((d) => {
        return <SingleJob key={d.id} data={d} setkeywords={setKeywords} />;
      })}
    </div>
  );
};

export default JobsBank;
