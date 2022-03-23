import React from 'react';
import { useState } from 'react';

const AddMovieCard = ({ movies, setMovies }) => {
  const [movieCard, setMovieCard] = useState({
    title: '',
    subtitle: '',
    description: '',
    year: '',
    imageUrl: '',
  });

  const [formValidation, setFormValidation] = useState({
    form_title: '',
    form_subtitle: '',
    form_description: '',
    form_year: '',
    form_imageUrl: '',
  });

  const handleFormSubmit = e => {
    e.preventDefault();

    if (movieCard.title === '') {
      setFormValidation({ ...formValidation, form_title: 'title ne sme biti prazno' });
      return;
    }
    if (movieCard.subtitle === '') {
      setFormValidation({ ...formValidation, form_subtitle: 'subtitle ne sme biti prazno' });
      return;
    }
    if (movieCard.description === '') {
      setFormValidation({ ...formValidation, form_description: 'description ne sme biti prazno' });
      return;
    }

    setMovies([...movies, { ...movieCard, id: (movies.length + 1) * 100 }]);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <p>{formValidation.form_id}</p>
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={e => setMovieCard({ ...movieCard, title: e.target.value })}
        />
        <p>{formValidation.form_title}</p>
        <input
          name="subtitle"
          type="text"
          placeholder="subtitle"
          onChange={e => setMovieCard({ ...movieCard, subtitle: e.target.value })}
        />
        <p>{formValidation.form_subtitle}</p>
        <input
          name="description"
          type="text"
          placeholder="description"
          onChange={e => setMovieCard({ ...movieCard, description: e.target.value })}
        />
        <p>{formValidation.form_description}</p>
        <input
          name="imageUrl"
          type="text"
          placeholder="imageUrl"
          onChange={e => setMovieCard({ ...movieCard, imageUrl: e.target.value })}
        />
        <p>{formValidation.form_imageUrl}</p>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMovieCard;
