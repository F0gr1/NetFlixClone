import React from 'react';
import './App.css';
import { Row } from './Row';
import { requests } from './utils/request';
import { Banner } from './Banner';
import { Nav } from './Nav';
function App() {
  return (
    
    <div className="App">
      <Nav />
      <Banner />
          <Row
      title="NETFLIX ORIGUINALS"
      fetchUrl= {`https://api.themoviedb.org/3${requests.feachNetflixOriginals}`}
      isLargeRow
    />
    <Row title="Top Rated" fetchUrl={`https://api.themoviedb.org/3${requests.feactTopRated}`} />
    <Row title="Action Movies" fetchUrl={`https://api.themoviedb.org/3${requests.feactActionMovies}`} />
    <Row title="Comedy Movies" fetchUrl={`https://api.themoviedb.org/3${requests.feactComedyMovies}`} />
    <Row title="Horror Movies" fetchUrl={`https://api.themoviedb.org/3${requests.feactHorrorMovies}`} />
    <Row title="Romance Movies" fetchUrl={`https://api.themoviedb.org/3${requests.feactRomanceMovies}`}/>
    <Row title="DOcumentaries" fetchUrl={`https://api.themoviedb.org/3${requests.feactDocumentMovies}`} />

    </div>
  );
}

export default App;
