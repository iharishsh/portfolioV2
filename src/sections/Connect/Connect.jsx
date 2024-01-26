import "./Connect.css";
import bento from "../../assets/bento.png";
import x from "../../assets/x.svg";

import { Copyright, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

const Connect = () => {
  return (
    <>
      <section className="connect-container">
        <div className="connect-center-container">
          <h2>CONNECT</h2>
          <div className="connect-glass-card">
            <a target='_blank' rel="noreferrer" alt="InstagramLogo" title="Instagram" href='https://www.instagram.com/iharishsh/'>
            <InstagramLogo size={50}/>
            </a>
            <a target='_blank' rel="noreferrer" alt="LinkedinLogo" title="Linkedin" href='https://www.linkedin.com/in/iharishsh/'>
            <LinkedinLogo size={50}/>
            </a>
            <a target='_blank' rel="noreferrer" alt="GithubLogo" title="Github" href='https://github.com/iharishsh'>
            <GithubLogo size={50}/>
            </a>
            <a target='_blank' rel="noreferrer" alt="XLogo" title="X" href='https://twitter.com/iharishsh'>
            <img className="company-logo" src={x} />
            </a>
            <a target='_blank' rel="noreferrer" alt="bentoLogo" title="Bento" href='https://bento.me/iharishsh'>
            <img className="company-logo" src={bento} />
            </a>
          </div>
        </div>
        <div className="footer">
            <Copyright size={30}/>
            <span>Iharishsh, 2024</span>
          </div>
      </section>
    </>
  );
};

export default Connect;
