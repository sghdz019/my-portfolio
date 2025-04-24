import { Link } from 'react-router-dom';
import './NavBar.css';
import worm from '../worm.jpg';
import { useEffect, useReducer, useState, useRef } from "react";


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return() => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

  return (
    <div className="top-nav w-nav">
        <div className="nav-container" ref={menuRef}>
            <nav role="navigation" class="nav-menu w-nav-menu">
                <Link to="/" class="brand w-nav-brand" className="hover:underline">
                    <img src={worm} loading="lazy" width="38" alt="Sofia Hernandez Logo" class="worm-image" className="h-10" />
                </Link>
                <button className="menu-button w-nav-button" onClick={() => setIsOpen(!isOpen)} aria-label="menu" aria-haspopup="menu" aria-expanded={isOpen}>
                    <span className="hamburger-icon">&#9776;</span>
                </button>
                <div className={`nav-links ${isOpen ? "active" : ""}`}>
                    <Link to="/" class="nav-label-link w-nav-link">Home</Link>
                    <Link to="./projects" class="nav-label-link w-nav-link">Projects</Link>
                    <Link to="./Publications" class="nav-label-link w-nav-link">Publications</Link>
                    <Link to="./About" class="nav-label-link w-nav-link" >About Me</Link>
                </div>
            </nav>
      </div>
    </div>
    
  );
}

export default NavBar;