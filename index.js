const secondInput = document.getElementById("test2");
const firstInput = document.getElementById("test");
const equals = document.querySelector("strong");
let isSecondInputFocused = false;
document.querySelector("span").addEventListener("click", () => {
  document.getElementById("test2").focus();
  isSecondInputFocused = true;
});
// [b,b,b]
document.querySelectorAll("button").forEach(function (item, index) {
  item.addEventListener("click", () => {
    //console.log('run with inner value',item.innerText, +item.innerText);
    // console.log('run with index',index + 1);
    // if (isSecondInputFocused) document.getElementById("test2").value += index;
    // else document.getElementById("test2").value += index;
    isSecondInputFocused
      ? (secondInput.value += index + 1)
      : (firstInput.value += index + 1);
  });
});
equals.addEventListener("click", () => {
  const resault = parseInt(firstInput.value) + parseInt(secondInput.value);
  equals.innerHTML += resault;
  // window.location.reload();
});
