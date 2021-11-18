# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Screenshots

!["Screenshot of Desktop view of Website"](https://github.com/stewanoya/tweeter/blob/master/docs/Desktop-view.png?raw=true)

!["Screenshot of Mobile view of Website"](https://github.com/stewanoya/tweeter/blob/master/docs/mobile-view.png?raw=true)

!["Screenshot of Single Tweet"](https://github.com/stewanoya/tweeter/blob/master/docs/tweet-box.png?raw=true)

!["Screenshot of error message, too long"](https://github.com/stewanoya/tweeter/blob/master/docs/error-noValue.png?raw=true)

!["Screenshot of error message, no tweet typed"](https://github.com/stewanoya/tweeter/blob/master/docs/error-tooLong.png)

## Feature Highlights

- The clone offers form submission functionality where, once the request is made, it prepends it to the site and displays the updated list of "tweets".
- Character counter in place to keep track of character limit. Will display error if no text is entered, or too many characters are entered.
- Responsive design elements.
  - Site will shift layout to accommodate larger screen by moving the profile to the left.

### Getting Started

1. Clone your repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

### Dependencies

- Express
- Node 5.10.x or above
- Nodemon
- Bodyparser
- Chance
