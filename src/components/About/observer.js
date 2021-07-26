export const createObserver = () => {
  function callbackFunc(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.animationName = 'scaleBounce';
        observer.unobserve(entry.target)
      }
    });
  }
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  let observer = new IntersectionObserver(callbackFunc, options);
  let images = document.getElementsByClassName('about__img')
  for (let i = 0; i < images.length; i++) {
    observer.observe(images[i])
  }
}