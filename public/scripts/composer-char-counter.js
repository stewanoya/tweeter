$(document).ready(function () {
  charCounter();
});

const charCounter = () => {
  // will collect current counter
  const charCount = $(".counter").text();

  //will check how many characters are in textarea
  let tweetLength = 0;

  //a variable to check if it's negative
  let total;
  //event listenting for new-tweet class
  $(".new-tweet").on("keyup", function (event) {
    tweetLength = $("textarea").val().length;
    total = charCount - tweetLength;
    //will replace current html counter with new html and new charcount value
    $(".counter").replaceWith(
      `<output name="counter" class="counter" for="tweet-text">${total}</output>`
    );
    //conditional check for red text to demonstrate too many chars
    if (total < 0) {
      $(".counter").css({ color: "red" });
    }
  });
};
