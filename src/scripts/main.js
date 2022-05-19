// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../api/jokeData';

const initialButton = `
<button id='initialBtn' type='click'>GET A JOKE</button>`;

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const eventListeners = () => {
  document.querySelector('#app').addEventListener('click', getJoke());
};

const startApp = () => {
  renderToDom('#app', initialButton);
  eventListeners();
};

startApp();
