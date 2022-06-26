import React from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/">
        <h1 className="text-5xl font-semibold text-gold_yellow">
          {"<Balikis />"}
        </h1>
      </Link>
    </aside>
  )
}

export default Sidebar
