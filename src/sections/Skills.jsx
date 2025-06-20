import { useState } from "react";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("tech");

const techSkills = [
    { name: "HTML5", icon: process.env.PUBLIC_URL + "/assets/icons/html.png" },
    { name: "CSS3", icon: process.env.PUBLIC_URL + "/assets/icons/css.png" },
    { name: "JavaScript", icon: process.env.PUBLIC_URL + "/assets/icons/js.png" },
    { name: "TypeScript", icon: process.env.PUBLIC_URL + "/assets/icons/typescript.png" },
    { name: "React", icon: process.env.PUBLIC_URL + "/assets/icons/react.png" },
    { name: "Angular", icon: process.env.PUBLIC_URL + "/assets/icons/angular.svg" },
    { name: "PHP", icon: process.env.PUBLIC_URL + "/assets/icons/php.png" },
];

const artPrograms = [
    { name: "Blender", icon: process.env.PUBLIC_URL + "/assets/icons/blender.svg" },
    { name: "Substance", icon: process.env.PUBLIC_URL + "/assets/icons/substance.png" },
    { name: "After Effects", icon: process.env.PUBLIC_URL + "/assets/icons/after-effects.png" },
    { name: "Premiere", icon: process.env.PUBLIC_URL + "/assets/icons/premiere.png" },
];


    const skillsToShow = activeTab === "tech" ? techSkills : artPrograms;

    return (
        <section className="skills-section" id="skills">
        <div className="container">
            <h2 className="skills-title">Skills</h2>

            <div className="tab-buttons">
            <button
                onClick={() => setActiveTab("tech")}
                className={activeTab === "tech" ? "active" : ""}
            >
                Technologies
            </button>
            <button
                onClick={() => setActiveTab("art")}
                className={activeTab === "art" ? "active" : ""}
            >
                art programs
            </button>
            </div>

            <div className="skills-grid">
            {skillsToShow.map((skill, index) => (
                <div key={index} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span>{skill.name}</span>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Skills;
