const lifeMeans = () => {
	let journey = (11 + 3) * 3;
	return journey;
};

let hello = console.log('Hola mundo = ', lifeMeans());

let show = elem => elem.style.display = 'block';

let hide = elem => elem.style.display = 'none';

const toggle = elem => {
	// if visible hide it
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}
	// otherwise, show it
	show(elem);
};

// listen to click
document.addEventListener('click', e => {
	// make sure element clicked
	if (!e.target.classList.contains('toggle')) return;
	// prevent default link behavior
	event.preventDefault();
	// get content
	let content = document.querySelector(event.target.hash);
	if (!content) return;
	// toggle content
	toggle(content);
}, false);


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	}
	event.preventDefault();
}