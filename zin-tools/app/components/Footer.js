import "../styles/Footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";

const footer_content = {
  internal_Links: [
    {
      title: "Documentaries",
      link: "/",
    },
    {
      title: "Themes",
      link: "/",
    },
    {
      title: "Chrome casts",
      link: "/",
    },
  ],
  enterprise: [
    {
      title: "Download Chrome Browser",
      link: "/",
    },
    {
      title: "Chrome Browser for Enterprise",
      link: "/",
    },
    {
      title: "Chrome Browser Devices",
      link: "/",
    },
    {
      title: "ChromeOS",
      link: "/",
    },
    {
      title: "Google Cloud",
      link: "/",
    },
    {
      title: "Google Workspace",
      link: "/",
    },
  ],
  bootom_links: [
    {
      title: "Privacy Policy",
      link: "/",
    },
    {
      title: "Terms and conditions",
      link: "/",
    },
    {
      title: "Cookies Policy",
      link: "/",
    },
    {
      title: "About us",
      link: "/",
    },
    {
      title: "EULA",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ],
};

const { internal_Links, enterprise, bootom_links } = footer_content;

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main-div">
        {/* Footer Top */}
        <div className="footer-social-media">
          <span className="follow-us">Follow us</span>
          <ul className="social-media-list">
            <li>
              <a href="https://www.youtube.com/">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Mid */}

        <div className="footer-mid">
          <div className="footer-mid-links">
            <h3>Internal Links</h3>
            {internal_Links.map((item, i) => (
              <ul key={i}>
                <li>
                  <a href={item.link}>{item.title}</a>
                </li>
              </ul>
            ))}
          </div>
          <div className="footer-mid-links">
            <h3>Enterprise</h3>
            {enterprise.map((item, i) => (
              <ul key={i}>
                <li>
                  <a href={item.link}>{item.title}</a>
                </li>
              </ul>
            ))}
          </div>
          <div className="footer-mid-links">
            <h3>Internal Links</h3>
            {internal_Links.map((item, i) => (
              <ul key={i}>
                <li>
                  <a href={item.link}>{item.title}</a>
                </li>
              </ul>
            ))}
          </div>
          <div className="footer-mid-links">
            <h3>Enterprise</h3>
            {enterprise.map((item, i) => (
              <ul key={i}>
                <li>
                  <a href={item.link}>{item.title}</a>
                </li>
              </ul>
            ))}
          </div>
          <div className="footer-mid-links">
            <h3>Internal Links</h3>
            {internal_Links.map((item, i) => (
              <ul key={i}>
                <li>
                  <a href={item.link}>{item.title}</a>
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}

        <div className="footer-bottom">
          <div className="footer-logo">
            <a href="/">
              <div className="footer-logo-text">
                <span className="logo-similar-text">Similar</span>
                <span className="logo-watch-text">Watch</span>
              </div>
            </a>
          </div>

          {bootom_links.map((item, i) => (
            <ul key={i}>
              <li>
                <a href={item.link}>{item.title}</a>
              </li>
            </ul>
          ))}

          <div className="footer-theme">
            <button className="footer-theme-btn">
              <FiMoon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
