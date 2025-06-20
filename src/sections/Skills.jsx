import { useState } from "react";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("tech");

    const techSkills = [
        { name: "HTML5", icon: "/assets/icons/html.png" },
        { name: "CSS3", icon: "/assets/icons/css.png" },
        { name: "JavaScript", icon: "/assets/icons/js.png" },
        { name: "TypeScript", icon: "/assets/icons/typescript.png" },
        { name: "React", icon: "/assets/icons/react.png" },
        { name: "Angular", icon: "/assets/icons/angular.svg" },
        { name: "PHP", icon: "/assets/icons/php.png" },
    ];

    const artPrograms = [
        { name: "Blender", icon: "/assets/icons/blender.svg" },
        { name: "Substance", icon: "/assets/icons/substance.png" },
        { name: "After Effects", icon: "/assets/icons/after-effects.png" },
        { name: "Premiere", icon: "/assets/icons/premiere.png" },
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
