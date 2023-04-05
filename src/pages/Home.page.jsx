import ImagesList from "../components/ImagesList/ImagesList.component";
import data from "../store/db.json";

const Home = () => {
  return <ImagesList data={data} />;
};

export default Home;
