import {fadeBox, toggleHeader} from './header'


document.addEventListener("scroll", () => {
  toggleHeader()
  fadeBox()
})




