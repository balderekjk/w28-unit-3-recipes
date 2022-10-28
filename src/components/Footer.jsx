import React from 'react';
import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from 'react-icons/im';

const Footer = () => {
  return (
    <footer>
      <div className="left-side-foot">
        <h5>Hit us up on our socials!</h5>
        <div className="social-icon-shell">
          <a
            className="blue-circle-border"
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImFacebook size="1.5em" color="#3f3f3f" />
          </a>
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImInstagram size="1.5em" color="#3f3f3f" />
          </a>
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImTwitter size="1.5em" color="#3f3f3f" />
          </a>
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImGithub size="1.5em" color="#3f3f3f" />
          </a>
        </div>
      </div>
      <svg
        className="dev-mtn-logo"
        width="110"
        height="110"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="256" cy="256" r="248" stroke="#25AAE1" strokeWidth="16" />
        <path
          d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
          stroke="#25AAE1"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </footer>
  );
};

export default Footer;
