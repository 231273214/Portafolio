const Projects = () => {
    const projects = [
        {
        title: "El petaco bar",
        description:
            "E-commerce sobre un bar ubicado en Villavicencio que su principal producto son cocteles y shots.",
        tech: ["html5", "css", "js"],
        image: "/assets/projects/Pagina-El_petaco_bar.png", 
        },
        {
        title: "Cafe - E-commerce",
        description:
            "E-commerce sobre una tienda de cafe en línea que vende cafe con hongos los cuales aportan beneficios en cuanto a la concentración, energía, etc.",
        tech: ["angular", "ts", "css", "html5"],
        image: "/assets/projects/E-commerce_cafe.png",
        },
        {
        title: "Galería 3D",
        description:
            "Página tematizada con el universo de Steven Universe, donde verás diferentes personajes de esta serie, información relevante de cada uno y un minijuego como decoración para la página.",
        tech: ["react", "ts", "css", "js", "html5"],
        image: "/assets/projects/Pagina_3D.png",
        },
        {
        title: "Microservicio docentes",
        description:
            "Página donde un docente puede interactuar con notas de estudiantes y sus diferentes materias. Este puede modificar y cancelar lo que desee, y se puede calcular si el estudiante aprueba o no.",
        tech: ["php", "js", "html5", "css"],
        image: "/assets/projects/Microservicio_Docentes.png",
        },
    ];

    const getIcon = (name) => {
        const map = {
        html5: "/assets/icons/html.png",
        css: "/assets/icons/css.png",
        js: "/assets/icons/js.png",
        ts: "/assets/icons/typescript.png",
        react: "/assets/icons/react.png",
        angular: "/assets/icons/angular.svg",
        php: "/assets/icons/php.png",
        };
        return map[name];
    };

    return (
        <section id="projects" className="projects-section">
        <div className="container">
            <h2 className="projects-title">Projects </h2>

            <div className="projects-grid">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                <div className="project-image">
                    <img src={project.image} alt={project.title} />
                </div>

                <h3 className="project-title">{project.title}</h3>

                {project.description && (
                    <p className="project-description">{project.description}</p>
                )}

                <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                    <img
                        key={idx}
                        src={getIcon(tech)}
                        alt={tech}
                        className="tech-icon"
                    />
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;
