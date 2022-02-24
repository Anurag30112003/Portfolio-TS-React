import "./Body.css";
import sitting from '../img/vector_siting.svg';
import { FiGithub } from "react-icons/fi";
export const Body = () => {
  return (
    <>
<section>
  <div className="logo">anurag.dev</div></section>
    <section className="landing">
      <div>
        <h1> Hello There !</h1>
        <img  src={sitting} className="profileimg" alt="human" />
        <p>
          I am a full stack developer with a passion for building web
          applications. I have a strong background in front-end development and
          have worked on a wide range of projects.
        </p>
        <p>
          I am a self-taught developer. I have a passion for learning new things
          and I am always looking to improve my skills.
        </p>
        <p>
          I am currently looking for a position in the software industry. If you
          are interested in working with me, please get in <span className="touch">touch.</span>
        </p>

        <div className="btn-explore">Explore-More</div>     
        <div className="social">
          <FiGithub />
        </div>
      </div>
    </section>
    </>
  );
};
