
function Hero({name}) {
    const scrollToSection = () => {
        const section = document.getElementById("about");
        section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="h-screen flex items-center justify-center bg-custom">
            <div className="flex flex-col items-center">
                <p className="font-roboto-condensed text-6xl font-medium uppercase ">HELLO, I AM {name}</p>
                <p className="font-roboto-condensed font-medium mt-2">I am a frontend developer</p>
                <button
                    onClick={scrollToSection}
                    className="font-roboto-condensed text-sm text-white p-2 mt-4 bg-black transition-colors duration-300 hover:bg-gray-700"
                >
                    SEE MY PORTFOLIO
                </button>
            </div>
        </div>
    );
}

export default Hero;
