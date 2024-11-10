import portfolioImg from './../assets/images/piotr2.jpg';

function About({ about }) {
  return (
    <div id="about">
      <section className="flex items-center justify-center bg-gray-100 py-10">
        <div className="w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-between px-6">
         
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img 
              src={portfolioImg} 
              alt="Piotr's picture" 
              className="w-full max-w-xs md:max-w-sm shadow-lg"
            />
          </div>

         
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="font-roboto-condensed text-xl text-gray-600">Hello! I am {about.name}</span>
            <h1 className="font-roboto-condensed text-3xl font-medium text-gray-700 py-3">ABOUT ME</h1>
            <p className="text-gray-600">{about.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
