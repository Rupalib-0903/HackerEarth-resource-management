import React from "react";
import "./Footer.css";
import {
  FaPhoneSquareAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            <a
              href="https://nmamit.nitte.edu.in/about-nmamit-nitte.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              About NMAMIT
            </a>
            <br />
            <br />
            <a
              href="https://nmamit.nitte.edu.in/vision-mission.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vision, Mission & Core Values
            </a>
            <br />
            <br />
            <a
              href="https://nmamit.nitte.edu.in/vision-mission.php#core"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quality Policy
            </a>
            <br />
            <br />
            <a
              href="https://nmamit.nitte.edu.in/rules.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rules and Regulations
            </a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            NMAM Institute of Technology, Nitte
            <br />
            Karkala Taluk, Udupi - 574110
            <br />
            Karnataka, India
          </p>
          <p>
            <MdEmail /> Email:{" "}
            <a href="mailto:principal_nmamit@nitte.edu.in">
              principal_nmamit@nitte.edu.in
            </a>
          </p>
          <p>
            <FaPhoneSquareAlt /> Phone: +91 8258 281039
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com/NMAMITsince1986"
                className="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/nmamitnitte"
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nmamit_nitte/"
                className="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/NMAMInstituteofTechnology"
                className="youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} NMAM Institute of Technology. All
        rights reserved.
      </div>
    </footer>
  );
}
