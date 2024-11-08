import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
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

  const [show, setshow] = useState(false); // state to control when the background changes on scroll

  useEffect(() => {
    const handleScroll = () => { // function to handle scroll event
      if (window.scrollY > 50) {
        setshow(true);
      } else {
        setshow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
    <Navbar className={`netflix-navbar ${show ? "bg-black" : ""}`}>

      {/* logo section */}
      <Navbar.Brand href="#">
        <img src={logo} alt="Netflix logo" className="logo" loading="lazy"/>
      </Navbar.Brand>

      {/* left navbar section */}
        <Nav className="left-navbar d-none d-lg-flex">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>TV Shows</Nav.Link>
          <Nav.Link>Movies</Nav.Link>
          <Nav.Link>New & Popular</Nav.Link>
          <Nav.Link>My List</Nav.Link>
          <Nav.Link>Browse by Languages</Nav.Link>
        </Nav>

      {/* left dropdown section */}
      <NavDropdown
        title="Browse"
        id="navbar-dropdown"
        className="custom-toggle d-lg-none"
      >
        <NavDropdown.Item>Home</NavDropdown.Item>
        <NavDropdown.Item>TV Shows</NavDropdown.Item>
        <NavDropdown.Item>Movies</NavDropdown.Item>
        <NavDropdown.Item>New & Popular</NavDropdown.Item>
        <NavDropdown.Item>My List</NavDropdown.Item>
        <NavDropdown.Item>Browse by Languages</NavDropdown.Item>
      </NavDropdown>

      {/* right navbar section */}
      <Nav className="right-navbar ms-auto d-flex align-items-center ">
        <Nav.Link>
          <SearchRoundedIcon fontSize="large" className="d-none d-md-block" />
        </Nav.Link>
        <Nav.Link className="d-none d-md-block">Kids</Nav.Link>
        <Nav.Link>
          <NotificationsNoneIcon fontSize="medium" />
        </Nav.Link>
        <Nav.Link>
          <img src={avatar} alt="Avatar" className="avatar" loading="lazy"/>
        </Nav.Link>

        {/* right dropdown section */}
        <NavDropdown
          id="nav-dropdown"
          align="end"
          className="d-none d-md-block"
        >
          <div className="background">
            <NavDropdown.Item className="right-dropdown">
              <img src={kids} alt="kids png" className="left-dropdown" loading="lazy"/>
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
            <NavDropdown.Item className="sign-out">
              Sign Out of Netflix
            </NavDropdown.Item>
          </div>
        </NavDropdown>
      </Nav>
    </Navbar>
    </div>
  );
}

export default Header;