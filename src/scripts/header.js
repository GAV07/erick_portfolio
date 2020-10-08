let headerTag = document.querySelector("header")

export let toggleHeader = () => {
  const pixels = window.pageYOffset
  
  if(pixels > 60) {
     headerTag.classList.add("scrolled")
     } else {
     headerTag.classList.remove("scrolled")
     }
}

export let fadeBox = () => {
  const pixels = window.pageYOffset
  const alpha = Math.min(pixels / 2000, 0.25)
  
  if(pixels > 60) {
     headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`
     } else {
     headerTag.classList.remove("scrolled")
     }
  
}



