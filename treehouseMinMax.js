// random number between two values
function randomNum(min, max) {
  if (isNaN(min) || isNaN(max)) {
    throw new Error ("please enter a number");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.write(randomNum(1,8));
