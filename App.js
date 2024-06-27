
import React, { useState } from 'react';
import FilmList from './components/FilmList';
import Filter from './components/Filter';
import AddFilmForm from './components/AddFilmForm';
import './App.css';

const App = () => {
  const [films, setFilms] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
  };

  const filteredFilms = films.filter(film => 
    film.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (filterRating === '' || film.rating >= filterRating)
  );

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <AddFilmForm addFilm={addFilm} />
      <FilmList films={filteredFilms} />
    </div>
  );
};

export default App;


