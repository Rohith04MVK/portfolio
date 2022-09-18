import Card from '../components/Card';

const Projects = () => {
  return (
    <div>
      <img src="https://wallpapercave.com/wp/wp7563482.jpg" className="absolute h-full w-full object-cover z-0" />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 z-10">
        <Card title='Test' src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" tag1="test" tag2="test" tag3="test">This is a test</Card>
      </div>
    </div>
  );
};

export default Projects;
