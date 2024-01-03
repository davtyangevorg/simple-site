// import { add } from "./helpers.js";

// $(document).ready(function () {
//   $("#clickMe").click(function () {
//     $("#message").text("You clicked the button!");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickMe");
  const message = document.getElementById("message");
  button.addEventListener("click", function () {
    if (!message.innerHTML) {
      message.innerHTML = "You clicked the button!";
    } else {
      message.innerHTML = "";
    }
  });
});
