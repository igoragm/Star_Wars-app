import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"; // višak
import GlobalStyles from "../components/globals/GlobalStyles"; // višak
import Section from "./globals/Section";
import Title from "./globals/Title";
import PrimaryBtn from "./globals/PrimaryBtn";
import FilmCard from "./globals/FilmCard";
import Film from "./globals/Film"

import { // višak
  setColor, // višak
  setFont, // višak
  setFlex, // višak
  setRem, // višak
  setLetterSpacing, // višak
  setShadow, // višak
  setBorder, // višak
  setTransition, // višak
} from "../styles"; // višak

const FilmsList = () => {
  const [moviesList, setMoviesList] = useState([]);

const [readMore, setReadMore] = useState (false);

  useEffect(() => {
    async function getMoviesList(movieUrl) {  // movieUrl neupotrebljen - višak
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
