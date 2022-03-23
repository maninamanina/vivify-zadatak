import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, editMovie, id }) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    setRatings([...ratings, rating]);
    console.log(rating);
  }, []);

  function myFunction(value, total) {
    return total + value;
  }

  const ratingChanged = value => {
    setRatings([...ratings, value]);
    let sum = ratings.reduce(myFunction, 0);
    let rat = sum / ratings.length;
    editMovie(id, rat, ratings.length);
  };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => ratingChanged(1)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => ratingChanged(2)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => ratingChanged(3)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => ratingChanged(4)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => ratingChanged(5)}></i>
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg" style={styles.star} onClick={() => ratingChanged(1)}></i>
            <i className="fa fa-star fa-lg" style={styles.star} onClick={() => ratingChanged(2)}></i>
            <i className="fa fa-star fa-lg" style={styles.star} onClick={() => ratingChanged(3)}></i>
            <i className="fa fa-star fa-lg" style={styles.star} onClick={() => ratingChanged(4)}></i>
            <i className="fa fa-star fa-lg" style={styles.star} onClick={() => ratingChanged(5)}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
