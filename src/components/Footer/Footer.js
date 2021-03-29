import React from "react";
import NavLinks from "./../Nav/NavLinks/NavLinks";

const Footer = (props) => {
  return (
    <footer className="Footer">
      <div>
        <NavLinks to="/" title="Home" />
        <NavLinks to="/blog" title="Blog" />
        <NavLinks to="/projects" title="Projects" />
        <a
          href="https://github.com/Wyatth7"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
