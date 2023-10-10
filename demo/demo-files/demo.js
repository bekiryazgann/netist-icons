if (!('boxShadow' in document.body.style)) {
  document.body.setAttribute('class', 'noBoxShadow');
}

document.body.addEventListener("click", function(e) {
  var target = e.target;
  if (target.tagName === "INPUT" &&
    target.getAttribute('class').indexOf('liga') === -1) {
    target.select();
  }
  if (target.tagName === "TEXTAREA" &&
    target.getAttribute('class').indexOf('liga') === -1) {
    target.select();
  }
});