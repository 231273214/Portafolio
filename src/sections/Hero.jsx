const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container hero-inner">
                <div className="hero-text">
                <h2>¡Hola!</h2>
                <h1>Me llamo Sergio Rangel</h1>
                <p>Desarrollador frontend y artista 3D</p>
                <p>Doy vida a experiencias web y visuales a través del código y la animación.</p>

                <div className="tech-icons">
                    <a
                        href="https://mail.google.com/mail/u/1/#inbox"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src={process.env.PUBLIC_URL + "/assets/icons/gmail.png"}
                        alt="Email"
                        width={24}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sergio-andr%C3%A9s-rangel-monta%C3%B1a-ba55b9345/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src={process.env.PUBLIC_URL + "/assets/icons/linkedin.png"}
                        alt="LinkedIn"
                        width={24}
                        />
                    </a>
                    <a
                        href="https://github.com/231273214"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src={process.env.PUBLIC_URL + "/assets/icons/github.png"}
                        alt="GitHub"
                        width={24}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/frismolab/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src={process.env.PUBLIC_URL + "/assets/icons/instagram.png"}
                        alt="Instagram"
                        width={24}
                        />
                    </a>
                    </div>

                    <div className="hero-img">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/Foto_perfil.JPG"}
                        alt="Sergio Rangel"
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
