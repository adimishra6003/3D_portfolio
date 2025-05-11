import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>
            <a href="https://mern-blog-bd2n.onrender.com/" target="_blank">
              Visit my Blog
            </a>
          </p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Aditya Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
