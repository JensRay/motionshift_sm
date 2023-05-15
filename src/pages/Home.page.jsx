import ImagesList from "../components/ImagesList/ImagesList.component";
import data from "../store/new_db.json";

const Home = () => {
  return <ImagesList data={data} />;
};

export default Home;
