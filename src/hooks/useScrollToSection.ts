
const useScrollToSection = (sectionId: string) => {
    return () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  };
  
  export default useScrollToSection;
  