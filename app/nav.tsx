export function Nav() {
    return (
        <nav className="flex justify-center fixed top-0 w-full p-4 z-50 backdrop-blur-xl shadow-sm">
            <div>
                <a href="#home" className="text-[#171717] border-r border-black p-2 transition-all duration-300 hover:shadow-black [text-shadow:0_0_0.5px_rgba(0,0,0,0)] hover:[text-shadow:0.5px_0_0_currentColor]">Úvod</a>
            </div>
            <div>
                <a href="#services" className="text-[#171717] border-r border-black p-2 transition-all duration-300 hover:shadow-black [text-shadow:0_0_0.5px_rgba(0,0,0,0)] hover:[text-shadow:0.5px_0_0_currentColor]">Služby</a>
            </div>
            <div>
                <a href="#about" className="text-[#171717] border-r border-black p-2 transition-all duration-300 hover:shadow-black [text-shadow:0_0_0.5px_rgba(0,0,0,0)] hover:[text-shadow:0.5px_0_0_currentColor]">O mně</a>
            </div>

            <div>
                <a href="#contact" className="text-[#171717] p-2 transition-all duration-300 hover:shadow-black [text-shadow:0_0_0.5px_rgba(0,0,0,0)] hover:[text-shadow:0.5px_0_0_currentColor]">Kontakt</a>
            </div>
        </nav>
    );
}