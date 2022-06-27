import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./layout.css";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top_tags">&lt;body&gt;</span>
        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </div>
    </div>
  );
};

export default Layout;
