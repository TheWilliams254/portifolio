import React from 'react';
import './Skills.css';

const skills = ["React", "JavaScript", "CSS", "HTML", "Node.js"];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1>My Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
