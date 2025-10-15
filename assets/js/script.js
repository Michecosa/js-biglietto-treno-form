const ageIn = document.getElementById('age');
const kmIn = document.getElementById('num-km');
const priceOut = document.getElementById('price');

const button = document.querySelector('button')

/* 
console.log(ageIn);
console.log(kmIn);
console.log(priceOut);
console.log(button);
*/

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

button.addEventListener('click', () => {
  const ageInput = ageIn.ariaValueMax;
  const kmInput = kmIn.ariaValueMax;
  console.log(trainPrice(ageInput, kmInput));
})