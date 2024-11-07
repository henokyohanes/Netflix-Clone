import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer">

          {/* social media icons */}
          <div className="footer-icons">
            <a href="#"> <FacebookIcon /> </a>
            <a href="#"> <InstagramIcon /> </a>
            <a href="#"> <TwitterIcon /> </a>
            <a href="#"> <YouTubeIcon /> </a>
          </div>

          {/* footer links organized in columns */}
          <div className="footer-ul">
            <ul>
              <li> <a href="#">Audio Description</a> </li>
              <li> <a href="#">Investor Relations</a> </li>
              <li> <a href="#">privacy</a> </li>
              <li> <a href="#">contcat us</a> </li>
            </ul>
            <ul>
              <li> <a href="#">Help Center</a> </li>
              <li> <a href="#">Jobs</a> </li>
              <li> <a href="#">Legal Notices</a> </li>
              <li>
                <a href="#">
                  DO Not Sell or Share My Personal <br /> Information
                </a>
              </li>
            </ul>
            <ul className="gift">
              <li> <a href="#">Gift Cards</a> </li>
              <li> <a href="#">Netflix shop</a> </li>
              <li> <a href="#">Cookie Preferences</a> </li>
              <li> <a href="#">Ad Choices</a> </li>
            </ul>
            <ul>
              <li> <a href="#">Media Center</a> </li>
              <li> <a href="#">Terms of Use</a> </li>
              <li> <a href="#">Corporate Information</a> </li>
            </ul>
          </div>
          <button className="serviceCode"> <a className="anchor" href="#">Service Code</a> </button>
          <p className="copyright">© 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
      <h6>This site is a clone made for educational purposes and is not affiliated with Apple Inc.</h6>
    </div>
  );
}

export default Footer