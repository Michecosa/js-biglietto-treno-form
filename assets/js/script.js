// Form input
const nameIn = document.getElementById('name');
const surnameIn = document.getElementById('surname');
const ageIn = document.getElementById('age');
const kmIn = document.getElementById('num-km');


// Ticket elements
const priceOut = document.getElementById('price');
const ticketArea = document.getElementById('ticket-area');
const ticketPassengerName = document.getElementById('ticket-passenger-name');
const ticketPassengerAge = document.getElementById('ticket-passenger-age');
const ticketOffer = document.getElementById('ticket-offer');
const ticketKm = document.getElementById('ticket-km');
const ticketPrice = document.getElementById('ticket-price');




const priceTimesKm = 0.21;
const discountMinors = 0.2;
const discountSeniors = 0.4;

function trainPrice(age, km) {
  const priceNoDiscount = km * priceTimesKm;
  let discount = 0;
  if(age < 18) {
    discount = discountMinors;
  } else if(age > 65) {
    discount = discountSeniors;
  }
  const priceFinal = (priceNoDiscount - priceNoDiscount * discount);
  return priceFinal;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const ageInput = ageIn.value;
  const kmInput = kmIn.value;
  const fullName = nameIn.value +' '+surnameIn.value;

  priceOut.innerText = trainPrice(ageInput, kmInput).toFixed(2);
})