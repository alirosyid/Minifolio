import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="topHeader">
        <div className="left">2026</div>
        <div className="right">SYSTEMS</div>
      </div>
      <div className="linksSection">
        <div className="left">
          <div className="container">
            <div className="topText">Get in touch</div>
            <a href="mailto:ali@alirosyid-architect.cloud" className="bottomText" style={{ display: 'block', textDecoration: 'none' }}>ali@alirosyid-architect.cloud</a>
          </div>
          <div className="container">
            <div className="topText">Connect</div>
            <a href="https://github.com/alirosyid" target="_blank" rel="noopener noreferrer" className="bottomText" style={{ display: 'block', textDecoration: 'none' }}>Github</a>
            <a href="https://www.linkedin.com/in/alirosyid-ai-automation" target="_blank" rel="noopener noreferrer" className="bottomText" style={{ display: 'block', textDecoration: 'none' }}>Linkedin</a>
          </div>
        </div>
        <div className="right">
          <div className="navBar">
            <a href="#hero" className="item">Home</a>
            <a href="#about" className="item">About</a>
            <a href="#education" className="item">Background</a>
            <a href="#skills" className="item">Skills</a>
            <a href="#services" className="item">Solutions</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="top">
          © &nbsp;
          <span id="copyright-year" /> &nbsp;All Rights Reserved
        </div>
        <div className="bottom">
          Template Developed by{" "}
          <Link href={"https://github.com/divyanshudhruv"}>
            &nbsp;<u>@divyanshudhruv</u>&nbsp;
          </Link>{" "}
          and{" "}
          <Link href={"https://github.com/loeclos"}>
            &nbsp;<u>@loeclos</u>&nbsp;
          </Link>
        </div>
      </div>
    </div>
  );
}
