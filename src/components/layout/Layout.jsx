import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <div className="App">
      <div className="page">
        <span className="tags top-tag_html">&lt;html&gt;</span>
        <span className="tags top-tag">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <span className="tags bottom-tag_html">&lt;/html&gt;</span>
      </div>
    </div>
  );
};

export default Layout;
