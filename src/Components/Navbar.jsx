const Navbar = () => {
    return (
        <nav className="navbar">
        <div>
            <img src= {process.env.PUBLIC_URL + "/assets/Logo.png"}  alt="Logo" width={50} border-radius={8} />
        </div>
        <ul className="flex gap-8 text-[#00FFD1] font-medium text-lg">
            <li>
                <a href="#about" className="hover:text-white transition-all">About</a>
            </li>
            <li>
                <a href="#skills" className="hover:text-white transition-all">Technologies</a>
            </li>
            <li>
                <a href="#projects" className="hover:text-white transition-all">Projects</a>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar
