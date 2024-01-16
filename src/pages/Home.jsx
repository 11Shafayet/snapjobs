import About from '../components/home/About';
import Hero from '../components/home/Hero';
import Partners from '../components/home/Partners';
import TopCategories from '../components/home/TopCategories';
import TrendingJobs from '../components/home/TrendingJobs';

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingJobs />
      <TopCategories />
      <About />
      <Partners />
    </>
  );
};

export default Home;
