let bookedSeatsCount = 0;
function bookedSeat(event) {
    const booked = document.getElementById(event.target.innerHTML);
    const remainingSeats = document.getElementById('kl');
    if (bookedSeatsCount >= 4) {
        alert('Sorry, only 4 seats available now .');
        return;
    }
    booked.classList.add('bg-green-500');
    bookedSeatsCount++;
    let count = remainingSeats.innerText;
    count = parseInt(count) - 1;
    remainingSeats.innerText = count;
    let kenCount = document.getElementById('plus').innerText;
    kenCount = parseInt(kenCount) + 1;
    document.getElementById('plus').innerText = kenCount;
    const div = document.getElementById('price-sit');
    const div2 = document.createElement('div');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3= document.createElement('span');
    const changingPriceTicket = document.getElementById("c-price");
    const ticketPrice = bookedSeatsCount * +(550);
    changingPriceTicket.textContent = ticketPrice;
    document.getElementById("c-price").textContent = ticketPrice;
    span2.classList.add('p-40')
    span1.innerText = booked.innerText;
    span2.innerText = "Economy";
    span3.innerText = 550
    div2.appendChild(span1);
    div2.appendChild(span2);
    div2.appendChild(span3);
    div.appendChild(div2);

}
const press = document.getElementsByTagName('kbd');
for (let pressed of press) {
    pressed.addEventListener("click", bookedSeat);
}
let discountedPrice = 0;
const grand=document.getElementById("apply-btn");

grand.addEventListener('click',function(){
  let coupon =document.getElementById('coupon').value ;
  const totalPrice = document.getElementById("c-price");
  const total=parseInt(totalPrice.innerText);
    if (coupon === "NEW15") {
      console.log("hero")
      discountedPrice = total -((total *15)/100);
    } else if (coupon === "Couple 20") {
      discountedPrice = total - ((total *20)/100);
    } 
    document.getElementById('grand-total').innerText=discountedPrice;
})
function next(){
  const headerSection =document.getElementById('header-screen');
  headerSection.classList.add('hidden');
  const mainSection =document.getElementById('main-screen');
  mainSection.classList.add('hidden');
  const footerSection =document.getElementById('footer-screen');
  footerSection.classList.add('hidden');
  const sucessSection =document.getElementById('sucess');
  sucessSection.classList.remove('hidden');


}

  

