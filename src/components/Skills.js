// Skills.jsx
import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaDocker } from "react-icons/fa";

const Skills = () => {
  const skillsArr = [
    { name: "JavaScript", icon: FaJs },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "Git", icon: FaGithub },
    { name: "ReactJs", icon: FaReact },
    { name: "Docker", icon: FaDocker },
  ];

  return (
    <div id="skills" className="skills">
      <h2 className="title">Skills</h2>
      <div className="skills-holder">
        {skillsArr.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="skill-cards">
              <Icon className="skill-icon" />
              <p className="skill">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
