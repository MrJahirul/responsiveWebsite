// Get the reference to the .nav i and all .nav .right h4 elements
const navIcon = document.querySelector('.nav i');
const rightH4Elements = document.querySelectorAll('.nav .right h4');

// Add a click event listener to the navIcon
navIcon.addEventListener('click', function() {
  // Loop through all .nav .right h4 elements and toggle their visibility
  rightH4Elements.forEach(function(rightH4) {
    if (rightH4.style.display === 'none' || rightH4.style.display === '') {
      rightH4.style.display = 'block';
    } else {
      rightH4.style.display = 'none';
    }
  });
});
