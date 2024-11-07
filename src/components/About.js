// src/components/About.js
function About() {
  return (
      <div id="about" className="h-screen overflow-y-scroll snap-y snap-mandatory">
          <section className="h-screen flex items-center justify-center bg-blue-500">
              <h1 className="text-4xl text-white">Sekcja 1</h1>
          </section>
          <section className="h-screen flex items-center justify-center bg-green-500">
              <h1 className="text-4xl text-white">Sekcja 2</h1>
          </section>
          <section className="h-screen flex items-center justify-center bg-purple-500">
              <h1 className="text-4xl text-white">Sekcja 3</h1>
          </section>
          <section className="h-screen flex items-center justify-center bg-red-500">
              <h1 className="text-4xl text-white">Sekcja 4</h1>
          </section>
      </div>
  );
}

export default About;





