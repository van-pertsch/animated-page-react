import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

//ANimations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //  const { title, mainImg, url , awards} = movie;

  useEffect(() => {
    // returns object
    const currentMovie = movies.find((stateMovie) => stateMovie.url === url);

    setMovie(currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          style={{ background: "#fff", color: "#000" }}
        >
          <Headline>
            <h2>{movie.title}</h2>
            <div className="line"></div>
            <img src={movie.mainImg} alt="movie image" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: #000;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    text-transform: uppercase;
    /* font-weight: bold; */
    transform: translate(-50%, -10%);
  }
  .line {
    height: 0.2rem;
    background: #3b3b3b;
    margin-bottom: 3rem;
    margin-left: 35%;
    margin-right: 35%;
  }
  img {
    width: auto;
    height: 70vh;
    object-fit: fill;
    margin-left: 40%;
    margin-right: auto;
  }
`;
const Awards = styled.div`
  min-height: 50vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.8rem;
    color: #000;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
