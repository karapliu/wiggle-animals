import './styles/index.scss';
import Penguin from './scripts/penguin';

document.addEventListener('DOMContentLoaded', () => {
  let penguin = document.getElementById('penguin');
  let penguinCtx = penguin.getContext('2d');

  new Penguin(penguin, penguinCtx);
})