const dutyFree = (normPrice, discount, hol) => {
  const saving = (discount/100) * normPrice;
  
  const bottlesPurchased = hol / saving;
  return Math.floor(bottlesPurchased);
}
const onClickCalculate = () => {
  const normPrice = document.getElementById("normPrice").value;
  const discount = document.getElementById("discount").value;
  const holidayPrice = document.getElementById("holidayPrice").value;

  const bottlesRequired = dutyFree(normPrice, discount, holidayPrice);
  
  document.getElementsByClassName("jumbotron")[0].style.display = 'block';
  document.getElementsByClassName("lead")[0].innerHTML = bottlesRequired;
}