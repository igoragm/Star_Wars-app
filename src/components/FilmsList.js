import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import GlobalStyles from "../components/globals/GlobalStyles";
import Section from "./globals/Section";
import Title from "./globals/Title";
import PrimaryBtn from "./globals/PrimaryBtn";
import FilmCard from "./globals/FilmCard";
import Film from "./globals/Film"
import {
  setColor,
  setFont,
  setFlex,
  setRem,
  setLetterSpacing,
  setShadow,
  setBorder,
  setTransition,
} from "../styles";

const FilmsList = () => {
  const [moviesList, setMoviesList] = useState([]);

const [readMore, setReadMore] = useState (false);

  useEffect(() => {
    async function getMoviesList(movieUrl) {
      const starWarsMoviesList = await axios.get(
        "https://swapi.dev/api/films/"
      );

      setMoviesList(starWarsMoviesList);
    }

    getMoviesList();
  }, []);

  return (
    <Section>
      <Title title="star wars" />
      <FilmCard>
        {moviesList &&
          moviesList.data &&
          moviesList.data.results.map((result, index) => {
            const { title, episode_id, opening_crawl, release_date} = result;
            console.log("result", result);
            return (
              <article key={index}>
                <Film className="film-info">
                  <h2>
                    {episode_id}. "{title}"
                  </h2>
                   <h4>Release date: {release_date}</h4>
                  <p> { readMore ? opening_crawl : `${opening_crawl.substring (0,300)}...`} </p>
                  <PrimaryBtn onClick={ () => setReadMore (!readMore)}>
                    {readMore ? 'show less' : 'read more'}
                  </PrimaryBtn>
                </Film>
              </article>
            );
          })}
      </FilmCard>
    </Section>
  );
};

export default FilmsList;
