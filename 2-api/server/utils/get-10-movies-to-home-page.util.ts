import { getMovieByTitleNyTimes } from '../services/get-movie-by-title-ny-times.service';
import { getMovieByTitleOMDB } from '../services/get-movie-by-title-omdb.service';

export const get10MoviesToHomePage = () => {
  // const shutterIslandOmdb = await getMovieByTitleOMDB('shutter island');
  // const shutterIslandNy = await getMovieByTitleNyTimes('shutter island');

  // const shutterIsland = {
  //   ...shutterIslandOmdb,
  //   // TODO EI OSAA LUKEA ALKION ekaa
  //   nyTimesINFO: shutterIslandNy.results[0]
  //     ? shutterIslandNy.results[0]
  //     : undefined,
  // };

  // const lordOfTheRingsOmdb = await getMovieByTitleOMDB('lord of the rings');
  // const lordOfTheRingsNy = await getMovieByTitleNyTimes('lord of the rings');

  // const lordOfTheRings = {
  //   ...lordOfTheRingsOmdb,
  //   nyTimesINFO: lordOfTheRingsNy.results[0]
  //     ? lordOfTheRingsNy.results[0]
  //     : undefined,
  // };

  // const inceptionOmdb = await getMovieByTitleOMDB('inception');
  // const inceptionNy = await getMovieByTitleNyTimes('inception');

  // const inception = {
  //   ...inceptionOmdb,
  //   nyTimesINFO: inceptionNy.results[0] ? inceptionNy.results[0] : undefined,
  // };

  // const skylineOmdb = await getMovieByTitleOMDB('skyline');
  // const skylineNy = await getMovieByTitleNyTimes('skyline');

  // const skyline = {
  //   ...skylineOmdb,
  //   nyTimesINFO: skylineNy.results[0] ? skylineNy.results[0] : undefined,
  // };

  // const grownUpsOmdb = await getMovieByTitleOMDB('grown ups');
  // const grownUpsNy = await getMovieByTitleNyTimes('grown ups');

  // const grownUps = {
  //   ...grownUpsOmdb,
  //   nyTimesINFO: grownUpsNy.results[0] ? grownUpsNy.results[0] : undefined,
  // };

  // const harryPotterOmdb = await getMovieByTitleOMDB('harry potter');
  // const harryPotterNy = await getMovieByTitleNyTimes('harry potter');

  // const harryPotter = {
  //   ...harryPotterOmdb,
  //   nyTimesINFO: harryPotterNy.results[0]
  //     ? harryPotterNy.results[0]
  //     : undefined,
  // };

  // const ironManOmdb = await getMovieByTitleOMDB('iron man');
  // const ironManNy = await getMovieByTitleNyTimes('iron man');

  // const ironMan = {
  //   ...ironManOmdb,
  //   nyTimesINFO: ironManNy.results[0] ? ironManNy.results[0] : undefined,
  // };

  // const townOmdb = await getMovieByTitleOMDB('town');
  // const townNy = await getMovieByTitleNyTimes('town');

  // const town = {
  //   ...townOmdb,
  //   nyTimesINFO: townNy.results[0] ? townNy.results[0] : undefined,
  // };

  // const toyStoryOmdb = await getMovieByTitleOMDB('toy story');
  // const toyStoryNy = await getMovieByTitleNyTimes('toy story');

  // const toyStory = {
  //   ...toyStoryOmdb,
  //   nyTimesINFO: toyStoryNy.results[0] ? toyStoryNy.results[0] : undefined,
  // };

  // const theOtherGuysOmdb = await getMovieByTitleOMDB('the other guys');
  // const theOtherGuysNy = await getMovieByTitleNyTimes('the other guys');

  // const theOtherGuys = {
  //   ...theOtherGuysOmdb,
  //   nyTimesINFO: theOtherGuysNy.results[0]
  //     ? theOtherGuysNy.results[0]
  //     : undefined,
  // };

  // return [
  //   shutterIsland,
  //   lordOfTheRings,
  //   inception,
  //   skyline,
  //   grownUps,
  //   harryPotter,
  //   ironMan,
  //   town,
  //   toyStory,
  //   theOtherGuys,
  // ];

  return [
    {
      Title: 'Shutter Island',
      Year: '2010',
      Rated: 'R',
      Released: '19 Feb 2010',
      Runtime: '138 min',
      Genre: 'Mystery, Thriller',
      Director: 'Martin Scorsese',
      Writer: 'Laeta Kalogridis, Dennis Lehane',
      Actors: 'Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo',
      Plot: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
      Language: 'English, German',
      Country: 'United States',
      Awards: '11 wins & 66 nominations',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.2/10' },
        { Source: 'Rotten Tomatoes', Value: '68%' },
        { Source: 'Metacritic', Value: '63/100' },
      ],
      Metascore: '63',
      imdbRating: '8.2',
      imdbVotes: '1,264,694',
      imdbID: 'tt1130884',
      Type: 'movie',
      DVD: '08 Jun 2010',
      BoxOffice: '$128,012,934',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
      nyTimesINFO: {
        display_title: 'Shutter Island',
        mpaa_rating: 'R',
        critics_pick: 0,
        byline: 'A. O. SCOTT',
        headline: 'All at Sea, Surrounded by Red Herrings',
        summary_short:
          'Martin Scorsese’s camera sense fills every scene with creepiness, but sustained suspense seems beyond him.',
        publication_date: '2010-02-18',
        opening_date: '2010-02-19',
        date_updated: '2017-11-02 04:18:11',
        link: {
          type: 'article',
          url: 'https://www.nytimes.com/2010/02/19/movies/19shutter.html',
          suggested_link_text:
            'Read the New York Times Review of Shutter Island',
        },
        multimedia: null,
      },
    },
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      Rated: 'PG-13',
      Released: '19 Dec 2001',
      Runtime: '178 min',
      Genre: 'Action, Adventure, Drama',
      Director: 'Peter Jackson',
      Writer: 'J.R.R. Tolkien, Fran Walsh, Philippa Boyens',
      Actors: 'Elijah Wood, Ian McKellen, Orlando Bloom',
      Plot: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      Language: 'English, Sindarin',
      Country: 'New Zealand, United States',
      Awards: 'Won 4 Oscars. 121 wins & 126 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.8/10' },
        { Source: 'Rotten Tomatoes', Value: '91%' },
        { Source: 'Metacritic', Value: '92/100' },
      ],
      Metascore: '92',
      imdbRating: '8.8',
      imdbVotes: '1,801,375',
      imdbID: 'tt0120737',
      Type: 'movie',
      DVD: '06 Aug 2002',
      BoxOffice: '$316,115,420',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
      nyTimesINFO: {
        display_title: 'The Lord of the Rings: The Return of the King',
        mpaa_rating: 'PG-13',
        critics_pick: 1,
        byline: 'Elvis Mitchell',
        headline: 'Triumph Tinged With Regret in Middle Earth',
        summary_short:
          "After the galloping intelligence displayed in the first two parts of &quot;The Lord of the Rings&quot; series, your fear may be that Peter Jackson would become cautious and unimaginative with the last episode of his trilogy. But Mr. Jackson crushes any such fear. His &quot;King&quot; is a meticulous and prodigious vision made by a director who was not hamstrung by heavy use of computer special-effects imagery. The final installment  follows the hobbit Frodo (Elijah Wood), increasingly fevered as the ring exercises its power over him, on the last leg of his perilous journey to Mordor to destroy the sinister object.  The wizard Gandalf (Ian McKellen), in a voice sodden with mellow sadness, believes that Frodo is on a suicide mission: &quot;There never was much hope. Just a false hope.&quot; Mr. Jackson takes his time with the story, but he's not sloughing off here. Rather he is building toward a more than solid conclusion. The grandiloquence that sustained the second installment, &quot;The Two Towers,&quot; with its pounding and operatic martial fury — a movie that actually created a state of siege and left audiences hanging —  can be found here. By its end, &quot;King&quot; glides to the gentle bonhomie that opened the &quot;Ring&quot; movies, but its epilogue is tinged with regret: &quot;You can't go back. Some wounds don't heal.&quot; It's an epic about the price of triumph, a subversive victory itself in a large-scale pop-action film. — Elvis Mitchell",
        publication_date: '2003-12-16',
        opening_date: '2003-12-17',
        date_updated: '2017-11-02 04:18:03',
        link: {
          type: 'article',
          url: 'https://www.nytimes.com/2003/12/16/movies/film-review-triumph-tinged-with-regret-in-middle-earth.html',
          suggested_link_text:
            'Read the New York Times Review of The Lord of the Rings: The Return of the King',
        },
        multimedia: null,
      },
    },
    {
      Title: 'Inception',
      Year: '2010',
      Rated: 'PG-13',
      Released: '16 Jul 2010',
      Runtime: '148 min',
      Genre: 'Action, Adventure, Sci-Fi',
      Director: 'Christopher Nolan',
      Writer: 'Christopher Nolan',
      Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
      Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
      Language: 'English, Japanese, French',
      Country: 'United States, United Kingdom',
      Awards: 'Won 4 Oscars. 157 wins & 220 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.8/10' },
        { Source: 'Rotten Tomatoes', Value: '87%' },
        { Source: 'Metacritic', Value: '74/100' },
      ],
      Metascore: '74',
      imdbRating: '8.8',
      imdbVotes: '2,273,495',
      imdbID: 'tt1375666',
      Type: 'movie',
      DVD: '07 Dec 2010',
      BoxOffice: '$292,587,330',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
      nyTimesINFO: {
        display_title: 'Inception',
        mpaa_rating: 'PG-13',
        critics_pick: 0,
        byline: 'A. O. SCOTT',
        headline: 'This Time the Dream’s on Me',
        summary_short:
          'In Christopher Nolan’s “Inception” a specialist in corporate mental espionage and his co-workers penetrate the minds of their slumbering targets.',
        publication_date: '2010-07-15',
        opening_date: '2010-07-16',
        date_updated: '2017-11-02 04:18:11',
        link: {
          type: 'article',
          url: 'https://www.nytimes.com/2010/07/16/movies/16inception.html',
          suggested_link_text: 'Read the New York Times Review of Inception',
        },
        multimedia: null,
      },
    },
    {
      Title: 'Skyline',
      Year: '2010',
      Rated: 'PG-13',
      Released: '12 Nov 2010',
      Runtime: '92 min',
      Genre: 'Action, Sci-Fi, Thriller',
      Director: 'Colin Strause, Greg Strause',
      Writer: "Joshua Cordes, Liam O'Donnell",
      Actors: 'Eric Balfour, Donald Faison, Scottie Thompson',
      Plot: 'Strange lights descend on the city of Los Angeles, drawing people outside like moths to a flame where an extraterrestrial force threatens to swallow the entire human population off the face of the Earth.',
      Language: 'English',
      Country: 'United States',
      Awards: '1 nomination',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjAwNDkwOTc5M15BMl5BanBnXkFtZTcwMTE2MTMwNA@@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '4.5/10' },
        { Source: 'Rotten Tomatoes', Value: '15%' },
        { Source: 'Metacritic', Value: '26/100' },
      ],
      Metascore: '26',
      imdbRating: '4.5',
      imdbVotes: '89,656',
      imdbID: 'tt1564585',
      Type: 'movie',
      DVD: '15 Mar 2011',
      BoxOffice: '$21,393,620',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
      nyTimesINFO: {
        display_title: 'Beyond Skyline',
        mpaa_rating: 'R',
        critics_pick: 0,
        byline: 'GLENN KENNY',
        headline:
          'Review: A Sci-Fi Thriller, ‘Beyond Skyline’ Is Beyond Ridiculous',
        summary_short:
          'Liam O’Donnell’s genre-hopping film takes its characters from Los Angeles to Laos, but risks losing its audience along the way.',
        publication_date: '2017-12-14',
        opening_date: '2017-12-15',
        date_updated: '2017-12-22 17:44:01',
        link: {
          type: 'article',
          url: 'https://www.nytimes.com/2017/12/14/movies/beyond-skyline-review.html',
          suggested_link_text:
            'Read the New York Times Review of Beyond Skyline',
        },
        multimedia: {
          type: 'mediumThreeByTwo210',
          src: 'https://static01.nyt.com/images/2017/12/15/arts/15Beyond1/Beyond1-mediumThreeByTwo210.jpg',
          height: 140,
          width: 210,
        },
      },
    },
    {
      Title: 'Harry Potter and the Deathly Hallows: Part 2',
      Year: '2011',
      Rated: 'PG-13',
      Released: '15 Jul 2011',
      Runtime: '130 min',
      Genre: 'Adventure, Fantasy, Mystery',
      Director: 'David Yates',
      Writer: 'Steve Kloves, J.K. Rowling',
      Actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
      Plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
      Language: 'English, Latin',
      Country: 'United Kingdom, United States',
      Awards: 'Nominated for 3 Oscars. 46 wins & 94 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.1/10' },
        { Source: 'Rotten Tomatoes', Value: '96%' },
        { Source: 'Metacritic', Value: '85/100' },
      ],
      Metascore: '85',
      imdbRating: '8.1',
      imdbVotes: '847,525',
      imdbID: 'tt1201607',
      Type: 'movie',
      DVD: '11 Nov 2011',
      BoxOffice: '$381,447,587',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
      nyTimesINFO: {
        display_title: 'Harry Potter and the Deathly Hallows: Part 2',
        mpaa_rating: 'PG-13',
        critics_pick: 1,
        byline: 'MANOHLA DARGIS',
        headline: 'Class Dismissed',
        summary_short:
          'Childhood ends with tears and howls and swirls of smoke, the shock of mortality and bittersweet smiles in the grave, deeply satisfying final movie in the “Harry Potter” series.',
        publication_date: '2011-07-13',
        opening_date: '2011-07-15',
        date_updated: '2017-11-02 04:18:13',
        link: {
          type: 'article',
          url: 'https://www.nytimes.com/2011/07/15/movies/harry-potter-and-the-deathly-hallows-part-2-review.html',
          suggested_link_text:
            'Read the New York Times Review of Harry Potter and the Deathly Hallows: Part 2',
        },
        multimedia: null,
      },
    },
    {
      Title: 'Grown Ups',
      Year: '2010',
      Rated: 'PG-13',
      Released: '25 Jun 2010',
      Runtime: '102 min',
      Genre: 'Comedy',
      Director: 'Dennis Dugan',
      Writer: 'Adam Sandler, Fred Wolf',
      Actors: 'Adam Sandler, Salma Hayek, Kevin James',
      Plot: 'After their high school basketball coach passes away, five good friends and former teammates reunite for a Fourth of July holiday weekend.',
      Language: 'English, Spanish',
      Country: 'United States',
      Awards: '3 wins & 4 nominations',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA0ODYwNzU5Nl5BMl5BanBnXkFtZTcwNTI1MTgxMw@@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '5.9/10' },
        { Source: 'Rotten Tomatoes', Value: '11%' },
        { Source: 'Metacritic', Value: '30/100' },
      ],
      Metascore: '30',
      imdbRating: '5.9',
      imdbVotes: '247,813',
      imdbID: 'tt1375670',
      Type: 'movie',
      DVD: '09 Nov 2010',
      BoxOffice: '$162,001,186',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
      nyTimesINFO: {
        display_title: 'Grown Ups 2',
        mpaa_rating: 'PG-13',
        critics_pick: 0,
        byline: 'ANDY WEBSTER',
        headline: 'Still Kids at Heart (Just Ask Their Wives)',
        summary_short:
          '“Grown Ups 2” features many of the same former “Saturday Night Live” stars as “Grown Ups,” but they’ve moved to New England from Los Angeles.',
        publication_date: '2013-07-11',
        opening_date: '2013-07-12',
        date_updated: '2017-11-02 04:18:17',
        link: {
          type: 'article',
          url: 'https://www.nytimes.com/2013/07/12/movies/adam-sandler-and-snl-alumni-return-in-grown-ups-2.html',
          suggested_link_text: 'Read the New York Times Review of Grown Ups 2',
        },
        multimedia: {
          type: 'mediumThreeByTwo210',
          src: 'https://static01.nyt.com/images/2013/07/12/arts/12GROWN_SPAN/GROWN-mediumThreeByTwo210.jpg',
          height: 140,
          width: 210,
        },
      },
    },
    {
      Title: 'Iron Man',
      Year: '2008',
      Rated: 'PG-13',
      Released: '02 May 2008',
      Runtime: '126 min',
      Genre: 'Action, Adventure, Sci-Fi',
      Director: 'Jon Favreau',
      Writer: 'Mark Fergus, Hawk Ostby, Art Marcum',
      Actors: 'Robert Downey Jr., Gwyneth Paltrow, Terrence Howard',
      Plot: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
      Language: 'English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian',
      Country: 'United States, Canada',
      Awards: 'Nominated for 2 Oscars. 21 wins & 73 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '7.9/10' },
        { Source: 'Rotten Tomatoes', Value: '94%' },
        { Source: 'Metacritic', Value: '79/100' },
      ],
      Metascore: '79',
      imdbRating: '7.9',
      imdbVotes: '1,028,811',
      imdbID: 'tt0371746',
      Type: 'movie',
      DVD: '30 Sep 2008',
      BoxOffice: '$319,034,126',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
      nyTimesINFO: {
        display_title: 'Iron Man 3',
        mpaa_rating: 'PG-13',
        critics_pick: 0,
        byline: 'MANOHLA DARGIS',
        headline: 'Bang, Boom: Terrorism as a Game',
        summary_short:
          '“Iron Man 3,” with all its explosions so soon after the Boston Marathon bombings, underscores just how thoroughly terrorism and its aftermath have been colonized by the movies.',
        publication_date: '2013-05-02',
        opening_date: '2013-05-03',
        date_updated: '2017-11-02 04:18:16',
        link: {
          type: 'article',
          url: 'https://www.nytimes.com/2013/05/03/movies/iron-man-3-with-robert-downey-jr.html',
          suggested_link_text: 'Read the New York Times Review of Iron Man 3',
        },
        multimedia: null,
      },
    },
    {
      Title: 'The Town',
      Year: '2010',
      Rated: 'R',
      Released: '17 Sep 2010',
      Runtime: '125 min',
      Genre: 'Crime, Drama, Thriller',
      Director: 'Ben Affleck',
      Writer: 'Peter Craig, Ben Affleck, Aaron Stockard',
      Actors: 'Ben Affleck, Rebecca Hall, Jon Hamm',
      Plot: 'A proficient group of thieves rob a bank and hold Claire, the assistant manager, hostage. Things begin to get complicated when one of the crew members falls in love with Claire.',
      Language: 'English',
      Country: 'United States',
      Awards: 'Nominated for 1 Oscar. 9 wins & 46 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTcyNzcxODg3Nl5BMl5BanBnXkFtZTcwMTUyNjQ3Mw@@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '7.5/10' },
        { Source: 'Rotten Tomatoes', Value: '92%' },
        { Source: 'Metacritic', Value: '74/100' },
      ],
      Metascore: '74',
      imdbRating: '7.5',
      imdbVotes: '382,985',
      imdbID: 'tt0840361',
      Type: 'movie',
      DVD: '17 Dec 2010',
      BoxOffice: '$92,186,262',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
      nyTimesINFO: {
        display_title: 'Small Town Wisconsin',
        mpaa_rating: '',
        critics_pick: 0,
        byline: 'Glenn Kenny',
        headline: '‘Small Town Wisconsin’ Review: A Father-Son Trip Goes Awry',
        summary_short:
          'A major-league farewell journey turns into an adventure for this dad who is losing shared custody.',
        publication_date: '2022-06-09',
        opening_date: '2022-06-10',
        date_updated: '2022-06-09 11:03:03',
        link: {
          type: 'article',
          url: 'https://www.nytimes.com/2022/06/09/movies/small-town-wisconsin-review.html',
          suggested_link_text:
            'Read the New York Times Review of Small Town Wisconsin',
        },
        multimedia: {
          type: 'mediumThreeByTwo210',
          src: 'https://static01.nyt.com/images/2022/06/10/arts/09small-town-wisconsin/09small-town-wisconsin-mediumThreeByTwo440.jpg',
          height: 140,
          width: 210,
        },
      },
    },
    {
      Title: 'Toy Story',
      Year: '1995',
      Rated: 'G',
      Released: '22 Nov 1995',
      Runtime: '81 min',
      Genre: 'Animation, Adventure, Comedy',
      Director: 'John Lasseter',
      Writer: 'John Lasseter, Pete Docter, Andrew Stanton',
      Actors: 'Tom Hanks, Tim Allen, Don Rickles',
      Plot: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
      Language: 'English',
      Country: 'United States',
      Awards: 'Nominated for 3 Oscars. 27 wins & 23 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.3/10' },
        { Source: 'Rotten Tomatoes', Value: '100%' },
        { Source: 'Metacritic', Value: '95/100' },
      ],
      Metascore: '95',
      imdbRating: '8.3',
      imdbVotes: '965,013',
      imdbID: 'tt0114709',
      Type: 'movie',
      DVD: '23 Mar 2010',
      BoxOffice: '$223,225,679',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
      nyTimesINFO: {
        display_title: 'Toy Story 4',
        mpaa_rating: 'G',
        critics_pick: 0,
        byline: 'MANOHLA DARGIS',
        headline: '‘Toy Story 4’ Review: Playtime’s Over',
        summary_short:
          'In this latest entry in the long-running series, Woody and Buzz hit the road and cross paths with a scary, scarily unloved doll.',
        publication_date: '2019-06-20',
        opening_date: '2019-06-21',
        date_updated: '2019-07-20 16:44:01',
        link: {
          type: 'article',
          url: 'https://www.nytimes.com/2019/06/20/movies/toy-story-4-review.html',
          suggested_link_text: 'Read the New York Times Review of Toy Story 4',
        },
        multimedia: {
          type: 'mediumThreeByTwo210',
          src: 'https://static01.nyt.com/images/2019/06/19/arts/00toystory4/00toystory4-mediumThreeByTwo210.jpg',
          height: 140,
          width: 210,
        },
      },
    },
    {
      Title: 'The Other Guys',
      Year: '2010',
      Rated: 'PG-13',
      Released: '06 Aug 2010',
      Runtime: '107 min',
      Genre: 'Action, Comedy, Crime',
      Director: 'Adam McKay',
      Writer: 'Adam McKay, Chris Henchy',
      Actors: 'Will Ferrell, Mark Wahlberg, Derek Jeter',
      Plot: "Two mismatched New York City detectives seize an opportunity to step up like the city's top cops, whom they idolize, only things don't quite go as planned.",
      Language: 'English, Ukrainian',
      Country: 'United States',
      Awards: '3 wins & 15 nominations',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDlhZDQ5NDUtNDcwMi00MTQ5LTk1Y2UtYjNmMjgzNzNhNzU3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '6.6/10' },
        { Source: 'Rotten Tomatoes', Value: '78%' },
        { Source: 'Metacritic', Value: '64/100' },
      ],
      Metascore: '64',
      imdbRating: '6.6',
      imdbVotes: '264,277',
      imdbID: 'tt1386588',
      Type: 'movie',
      DVD: '14 Dec 2010',
      BoxOffice: '$119,219,978',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
      nyTimesINFO: {
        display_title: 'The Other Guys',
        mpaa_rating: 'TV-MA',
        critics_pick: 0,
        byline: 'A. O. SCOTT',
        headline: 'A Not-So-Macho Cop’s Moment of Truth',
        summary_short:
          'Will Ferrell teams with the director Adam McKay again, this time at a police station with Mark Wahlberg.',
        publication_date: '2010-08-05',
        opening_date: '2010-08-06',
        date_updated: '2017-11-02 04:18:11',
        link: {
          type: 'article',
          url: 'https://www.nytimes.com/2010/08/06/movies/06other.html',
          suggested_link_text:
            'Read the New York Times Review of The Other Guys',
        },
        multimedia: null,
      },
    },
  ];
};
