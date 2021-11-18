/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//function to esacpe html in tweet form
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function () {
  //renders tweets in db
  loadTweets();
  //form submission function
  $(".tweet--form").submit((e) => {
    e.preventDefault();
    const errorMsg = `<h4 class="error">❌ Error! People can't read an empty tweet! ❌</h4>`;
    const errorMsgLong = `<h4 class="error">❌ Error! Your tweet is too long. Keep it short and sweet, bub. ❌</h4>`;
    const tweetText = $("#tweet-text").val();
    const serialVal = $("#tweet-text").serialize();
    if (!tweetText) {
      $(".error").remove();
      $(".tweet--form").prepend(errorMsg);
    } else if (tweetText.length > 140) {
      $(".error").remove();
      $(".tweet--form").prepend(errorMsgLong);
    } else {
      //removes error message after successful tweet
      $(".error").remove();
      $.post("/tweets/", serialVal).then(() => {
        loadTweets();
        $("#tweet-text").val("");
      });
    }
  });
});

const loadTweets = () => {
  return $.get("/tweets/", (data) => {
    renderTweets(data);
  });
};

//empties current loaded tweets and loops through all tweets to create them.
const renderTweets = (arrOfTweets) => {
  $(".all-tweets").empty();
  for (tweet of arrOfTweets) {
    $(".all-tweets").append(createTweetElement(tweet));
  }
};

//Using string template to inject HTML
const createTweetElement = (obj) => {
  const tweetTemplate = `<article class="tweet-container">
  <header class="tweet-header">
    <!-- icon, name, username -->
    <div class="icon-name">
      <img src="${obj.user.avatars}">
      <h6 class="name">
            ${obj.user.name} 
            </h6>
    </div>
    <div class="handle-name">${obj.user.handle}</div>
  </header>
  <div class="tweet--body">
  <p class="tweet-text">
  ${escape(obj.content.text)}
  </p> 
  </div>
  <div class="divider"></div>
  <footer class="tweet-footer">
 
    <!-- Timestamp -->
    <time
      class="need_to_be_rendered"
      datetime="${obj.created_at}"
    >${obj.created_at}</time>
    <!-- social icons -->
    <div class="icons">
      <i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i
      ><i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`;
  $(".all-tweets").prepend(tweetTemplate);
  timeago.render(document.querySelectorAll(".need_to_be_rendered"));
};
