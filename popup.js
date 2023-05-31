

let wrapper = document.getElementById('wrapper');
let formButton = document.getElementById('submit');
let Form = document.getElementById('contact-form');
let popup = document.getElementById('popUpContainer');
let closePopUp = document.getElementById('closeThePopUp');

formButton.addEventListener('click', function (event) {
  if (Form.checkValidity()) {
    wrapper.style.pointerEvents = 'none'
    setTimeout(function () {
      wrapper.style.filter = 'blur(8px)';
      popup.style.display = 'block';

    }, 2500); // Delay of 2.5 seconds (2500 milliseconds)
  } else {
    event.preventDefault(); // Prevent form submission if it's not valid
  }
});

closePopUp.addEventListener('click', function () {
  wrapper.style.filter = 'blur(0px)';
  popup.style.display = 'none';
});




