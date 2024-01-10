//Select relevant DOM elements
const button = document.querySelector("#check-btn");
const inputText = document.querySelector("#text-input")
const result = document.querySelector("#result");

//Add event listener to the button
button.addEventListener("click", () => {
  //Get the input value
  const text = inputText.value;

  //Check if the input is empty
  if (text.length == 0) {
    //Show an alert if the input is empty
    alert("Please input a value");
    return; //Exit the function if the input is empty
  }

  //Remove any non-alphanumeric characters and convert to lower case
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  //Check if the cleaned text is a palindrome by comparing the original and reversed strings
  const isPalindrome = cleanText === cleanText.split("").reverse("").join("");

  //Create a message based on whether the input is a palindrome or not
  const message = isPalindrome
  ? `<span>${text}</span> is a palindrome!`
  : `<span>${text}</span> is not a palindrome!`

  //Update the result element with message 
  result.innerHTML = message;
  result.classList.remove("error", "success");
  setTimeout(() => {
    result.classList.add(isPalindrome ? "success" : "error");
  }, 10);
});