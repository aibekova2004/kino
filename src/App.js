import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Popular from "./page/Popular";
import TopRated from "./page/TopRated";
import MoveDetails from "./components/MoveDetails";
import ActorDetails from "./page/ActorDetails";
import Search from "./page/Search";

function App() {
  return (
    <div id="App">
      <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/> }/>
            <Route path={"/popular"} element={ <Popular/> }/>
            <Route path={"/top_rated"} element={ <TopRated/> }/>
            <Route path={"/movie/movie_details/:movieId"} element={ <MoveDetails/> }/>
            <Route path={"/person/person_details/:personId"} element={ <ActorDetails/> }/>
            <Route path={"/search/search_movie/:movieName"} element={ <Search/> }/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
