export const scrollTo = (elementClassName) => {
  const y = document.getElementsByClassName(elementClassName.toLowerCase())[0]
    .getBoundingClientRect().top + window.pageYOffset
  //--navbarHeight variable(defined on index.css) equals 50px
  window.scrollTo({
    top: y - 50,
    behavior: "smooth"
  });
}
