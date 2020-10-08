import { GetBacon } from './utils';
import {fadeBox, toggleHeader} from './header'

document.addEventListener("scroll", () => {
  toggleHeader()
  fadeBox()
})



// const baconEl = document.querySelector('.bacon');
// GetBacon()
//   .then(res => {
//     const markup = res.reduce((acc, val) => (acc += `<p>${val}</p>`), '');
//     baconEl.innerHTML = markup;
//   }).catch(err => (baconEl.innerHTML = err));