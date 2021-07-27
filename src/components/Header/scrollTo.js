export const scrollTo = (elementClassName) => {
  const y = document.getElementsByClassName(elementClassName.toLowerCase())[0]
    .getBoundingClientRect().top + window.pageYOffset
  window.scrollTo({
    top: y - 50,
    behavior: "smooth"
  });
}
