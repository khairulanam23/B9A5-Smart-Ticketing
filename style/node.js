const grandTotalDiv = document.getElementById("grandPrice");

function updatePrice(price) {
  
  const couponInput = document.getElementById("couponInput");
  const couponInputBtn = document.getElementById("couponInputBtn");
  let total = 0;

  let coupon = "";

  couponInputBtn.addEventListener("click", () => {
    coupon = couponInput.value;
    total =
      coupon.toUpperCase() === "NEW15"
        ? price - price * 0.15
        : coupon.toUpperCase() === "COUPLE 20"
        ? price - price * 0.2
        : price;
    grandTotalDiv.innerHTML = total;
  });
}

function updateSeat(selectedSeat) {
  let seatNumber = document.getElementById("seatNumber");
  let className = document.getElementById("className");
  let priceValue = document.getElementById("priceValue");
  seatNumber.innerHTML = "";
  className.innerHTML = "";
  priceValue.innerHTML = "";

  for (let i of selectedSeat) {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    p1.textContent = i;
    p1.className = "calcText";

    p2.textContent = "Economy";
    p2.className = "calcText";

    p3.textContent = 550;
    p3.className = "calcText";

    seatNumber.append(p1);
    className.append(p2);
    priceValue.append(p3);
  }
  totalPriceDiv = document.getElementById("totalPrice");
  totalPrice = selectedSeat.length * 550;
  totalPriceDiv.innerHTML = totalPrice;
  grandTotalDiv.innerHTML = totalPrice;
  updatePrice(totalPrice);
  const couponInputBtn = document.getElementById("couponInputBtn");

  if (selectedSeat.length === 4) {
    couponInputBtn.style.display = "";
  }
}

let seats = document.querySelectorAll(".seat");
let selectedSeat = [];
const couponInputBtn = document.getElementById("couponInputBtn");
if (selectedSeat.length != 4) {
  couponInputBtn.style.display = "none";
}

const totalseatdiv = document.getElementById("seats");
let total = parseInt(totalseatdiv.innerHTML);
seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    if (selectedSeat.length < 4 && !selectedSeat.includes(seat.innerHTML)) {
      seat.style.backgroundColor = "#1DD100";
      seat.style.color = "white";
      selectedSeat.push(seat.innerHTML);
      total--;
      totalseatdiv.innerHTML = total;
      updateSeat(selectedSeat);
    } else if (selectedSeat.includes(seat.innerHTML)) {
      seat.style.backgroundColor = "";
      seat.style.color = "black";
      let indextorem = selectedSeat.indexOf(seat.innerHTML);
      selectedSeat.splice(indextorem);
      total++;
      totalseatdiv.innerHTML = total;
      updateSeat(selectedSeat);
    }
    console.log(seat.innerHTML);
  });
});

let formSubmit = document.getElementById("form-submit");
let body = document.getElementsByTagName("body");
let popUp = document.getElementById("pop-up");
formSubmit.addEventListener("click", () => {
  popUp.style.display = "block";
  body.innerHTML = "";
  body.style.backgroundColor = "white";

  console.log("Popup clicked");
});

let continueBtn = document.getElementById("pop-up-btn");

continueBtn.addEventListener("click", () => {
  popUp.style.display = "none";
});
