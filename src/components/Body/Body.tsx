import "./Body.css";
import sitting from '../img/vector_siting.svg';
import SkillBar from 'react-skillbars';
const skills = [
    {type: "Python", level: 85},
    {type: "Flask", level: 80},
    {type: "React", level: 70},
    {type: "Express", level: 50},
    {type: "MongoDB", level: 50},
    {type: "Javascript", level: 50},
    {type: "Typescript", level: 50},
    {type: "SQL", level: 40},
    

];
const  colors = {
    "bar": "#2e2a26",
    "title": {
      "color": "white",
      "text": "white",
      "background": "#2e2a26"
    }
  }
export const Body = () => {
  return (
    <>
    <section className="landing">
      <div>
        <h1> Hello There ! </h1>
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
      </div>
    </section>
    <section className="skills-section"> 
        <div className="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="bar">
            <SkillBar  skills={skills} height={30} colors={colors} />
            </div>
        </div>

    </section>
    </>
  );
};
