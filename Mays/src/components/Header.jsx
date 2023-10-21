import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(e => !e);
  }
  return (
    <header className="headerBank">
      <a href="#" className="brand">Bankology</a>
      <div className={`menu-btn ${active && 'active'}`} onClick={handleToggle}></div>
      <div className={`navigation ${active && 'active'}`}>
        <div className="navigation-items">
          <a href="#" className="activeCOlor">Home</a>
          <NavLink className="activeCOlor" to={'/job'}>Banks</NavLink>
          <NavLink className="activeCOlor" to={'/job_bank'}>Jobs</NavLink>
          <NavLink className="activeCOlor" to={'/faq'}>FAQ</NavLink>
          <NavLink className="activeCOlor" to={'/contact'}>Contact</NavLink>
        </div>
      </div>
    </header>
  )
}