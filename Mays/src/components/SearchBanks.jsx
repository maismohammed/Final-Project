import React from "react";
import close from "../images/icon-remove.svg";

const SearchBanks = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div style={{ marginTop: '80px' }} className="header-container1">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords(key)}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}

        {/* <a className="clearbutton" href="/#" onClick={() =>clearAll()}>
          Clear
        </a> */}
      </ul>
    </div>
  );
};

export default SearchBanks;
