const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = docuemnt.getElementById('movie');


const ticketPrice = +movieSelect.value;

container.addEventListener('click', (e)=> {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('.occupied')) {
    e.target.classList.toggle('selected');

   function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount
   }
  }
})