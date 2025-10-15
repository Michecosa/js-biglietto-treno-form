// Form input
const nameIn = document.getElementById('name');
const surnameIn = document.getElementById('surname');
const ageIn = document.getElementById('age');
const kmIn = document.getElementById('num-km');


// Ticket elements
const priceOut = document.getElementById('price');
const ticketPassengerName = document.getElementById('ticket-passenger-name');
const ticketPassengerAge = document.getElementById('ticket-passenger-age');
const ticketOffer = document.getElementById('ticket-offer');
const ticketKm = document.getElementById('ticket-km');
const ticketPrice = document.getElementById('ticket-price');

const form = document.querySelector('form');


const priceTimesKm = 0.21;
const discountMinors = 0.2;
const discountSeniors = 0.4;

function trainPrice(age, km) {
  const priceNoDiscount = km * priceTimesKm;
  let discount = 0;
  let offerName = 'Biglietto Standard';
  if(age < 18) {
    discount = discountMinors;
    offerName = 'Sconto Minorenni (20%)';
  } else if(age > 65) {
    discount = discountSeniors;
    offerName = 'Sconto Over 65 (40%)';
  }
  const priceFinal = (priceNoDiscount - priceNoDiscount * discount);
  return {
    price: priceFinal,
    offer: offerName
  };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const ageInput = ageIn.value;
  const kmInput = kmIn.value;
  const fullName = nameIn.value +' '+surnameIn.value;
  
  // Update values 
  ticketPassengerName.innerText = fullName;
  ticketPassengerAge.innerText = `${ageInput} anni`;
  priceOut.innerText = finalPrice;

  priceOut.innerText = trainPrice(ageInput, kmInput).toFixed(2);
})