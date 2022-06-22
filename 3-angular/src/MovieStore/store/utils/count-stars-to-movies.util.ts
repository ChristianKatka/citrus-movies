export const countStarsToMovies = (movies: any[]) =>
  movies.map((movie) => {
    const rating = Math.floor(+movie.imdbRating);

    if (rating >= 9) {
      return {
        ...movie,
        starRatingbyImdb: {
          firstStarFilled: true,
          secondStarFilled: true,
          thirdStarFilled: true,
          fourthStarFilled: true,
          fifthStarFilled: true,
        },
      };
    }

    if (rating < 9 && rating >= 7) {
      return {
        ...movie,
        starRatingbyImdb: {
          firstStarFilled: true,
          secondStarFilled: true,
          thirdStarFilled: true,
          fourthStarFilled: true,
          fifthStarFilled: false,
        },
      };
    }

    if (rating < 7 && rating >= 5) {
      return {
        ...movie,
        starRatingbyImdb: {
          firstStarFilled: true,
          secondStarFilled: true,
          thirdStarFilled: true,
          fourthStarFilled: false,
          fifthStarFilled: false,
        },
      };
    }

    if (rating < 5 && rating >= 3) {
      return {
        ...movie,
        starRatingbyImdb: {
          firstStarFilled: true,
          secondStarFilled: true,
          thirdStarFilled: false,
          fourthStarFilled: false,
          fifthStarFilled: false,
        },
      };
    }
    if (rating < 3) {
      return {
        ...movie,
        starRatingbyImdb: {
          firstStarFilled: true,
          secondStarFilled: false,
          thirdStarFilled: false,
          fourthStarFilled: false,
          fifthStarFilled: false,
        },
      };
    }
    return movie;
  });
