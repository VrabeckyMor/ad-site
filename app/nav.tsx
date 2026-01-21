export function Nav() {
    return (
        <nav className="flex justify-center fixed top-0 w-full p-4 z-50 backdrop-blur-xl shadow-sm shadow-var(--foreground">
            <div>
                <a href="#home" className="text-var(--foreground) border-r border-var(--foreground) p-2 transition-all duration-300 hover:shadow-black [text-shadow:0_0_0.5px_rgba(0,0,0,0)] hover:[text-shadow:0.5px_0_0_currentColor] pr-4 pl-0">Úvod</a>
            </div>
            <div>
                <a href="#services" className="text-var(--foreground) border-r border-var(--foreground) p-2 transition-all duration-300 hover:shadow-black [text-shadow:0_0_0.5px_rgba(0,0,0,0)] hover:[text-shadow:0.5px_0_0_currentColor] pl-4 pr-4">Služby</a>
            </div>
            <div>
                <a href="#about" className="text-var(--foreground) border-r border-var(--foreground) p-2 transition-all duration-300 hover:shadow-black [text-shadow:0_0_0.5px_rgba(0,0,0,0)] hover:[text-shadow:0.5px_0_0_currentColor] pl-4 pr-4">O mně</a>
            </div>

            <div>
                <a href="#contact" className="text-var(--foreground) p-2 transition-all duration-300 hover:shadow-black [text-shadow:0_0_0.5px_rgba(0,0,0,0)] hover:[text-shadow:0.5px_0_0_currentColor] pl-4 pr-0">Kontakt</a>
            </div>
        </nav>
    );
}