import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer--social">
        <a href="https://github.com/JJ-Code" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://github.com/JJ-Code" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://github.com/JJ-Code" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></a>
      </div>
      <div className="footer--bottom">
        <p className="footer--text">©copyright JJCode | All rights reserved | &amp; development by
        <a href="https://github.com/JJ-Code" target="_blank" rel="noopener noreferrer"> JJCode</a></p>
      </div>
    </footer>
  )
}



export default Footer;