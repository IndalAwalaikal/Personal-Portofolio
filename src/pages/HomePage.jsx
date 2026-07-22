import Hero from '../components/Hero';
import About from '../components/About';
import RecentWorks from '../components/RecentWorks';
import Services from '../components/Services';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Indal Awalaikal — Full-Stack & Backend Developer"
        description="Portofolio resmi Indal Awalaikal — Full-Stack & Backend Developer berbasis di Makassar, Indonesia. Mahasiswa Teknik Informatika & Komputer UNM spesialis Golang, Python, React, dan AI Systems."
        keywords="Indal Awalaikal, Indal, Awalaikal, Full Stack Developer, Backend Developer, Teknik Informatika & Komputer, UNM, Makassar, Portofolio"
      />
      <Hero />
      <About />
      <RecentWorks />
      <Services />
    </>
  );
};

export default HomePage;
