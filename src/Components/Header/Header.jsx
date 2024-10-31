import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../../assets/Images/logo.png";
import avatar from "../../assets/Images/avatar.png";
import kids from "../../assets/Images/kids.png";
import EditIcon from "@mui/icons-material/Edit";
import TransferIcon from "@mui/icons-material/TransferWithinAStation";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded} className="netflix-navbar">
      <Navbar.Brand href="#">
        <img src={logo} alt="Netflix logo" className="logo" />
      </Navbar.Brand>
      <button
        className="custom-toggle d-lg-none"
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="basic-navbar-nav"
        aria-expanded={expanded}
      >
        Browse
        <ArrowDropDownIcon fontSize="large" />
      </button>

      <Navbar.Collapse id="basic-navbar-nav me-auto">
        <Nav className="left-navbar">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>TV Shows</Nav.Link>
          <Nav.Link>Movies</Nav.Link>
          <Nav.Link>New & Popular</Nav.Link>
          <Nav.Link>My List</Nav.Link>
          <Nav.Link>Browse by Languages</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="right-navbar ms-auto d-flex align-items-center ">
        <Nav.Link>
          <SearchRoundedIcon fontSize="large" className="d-none d-md-block" />
        </Nav.Link>
        <Nav.Link className="d-none d-md-block">Kids</Nav.Link>
        <Nav.Link>
          <NotificationsNoneIcon fontSize="medium" />
        </Nav.Link>
        <Nav.Link>
          <img src={avatar} alt="Avatar" className="avatar" />
        </Nav.Link>
        <NavDropdown id="nav-dropdown" align="end" className="d-none d-md-block">
          <nav className="background">
            <NavDropdown.Item className="right-dropdown">
              <img src={kids} alt="kids png" className="left-dropdown" />
              kids
            </NavDropdown.Item>
            <NavDropdown.Item className="right-dropdown">
              <EditIcon className="left-dropdown" />
              manage profile
            </NavDropdown.Item>
            <NavDropdown.Item className="right-dropdown">
              <TransferIcon className="left-dropdown" /> transfer profile
            </NavDropdown.Item>
            <NavDropdown.Item className="right-dropdown">
              <PersonIcon className="left-dropdown" /> account
            </NavDropdown.Item>
            <NavDropdown.Item className="right-dropdown">
              <HelpOutlineIcon className="left-dropdown" /> help center
            </NavDropdown.Item>
            <NavDropdown.Divider className="right-dropdown" />
            <NavDropdown.Item className="sign-out">Sign Out of Netflix</NavDropdown.Item>
          </nav>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default Header;