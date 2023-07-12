# Asynchronous JS and Fetch GET Requests

## Learning Goals

- Nested data structures
- Looping through data
- Request-response cycle
- HTTP Verbs
- GET requests with external API
- Handling promises from .fetch()
- .catch() and the try / catch syntax

## Dad Jokes API Endpoints

In order to use the Dad Jokes API we'll need the URL and a pair of special headers:

URL:
```
https://icanhazdadjoke.com/
```

Headers:
```js
headers: {
  Accept: 'application/json'
}
```

For the json-server:

URL:
```
http://localhost:3000/jokes
```

Headers:
```
none
```

## Practice

1. Make an initial fetch request to the Dad Jokes API and add a new paragraph tag to the `dad-jokes-container` with the new joke.

  - HINT: Be sure to look at the data you get back so you know how to get the joke inside the response...


2. When a user clicks the `new-joke-button`, make a fetch request to the Dad Jokes API and add a new paragraph tag to the `dad-jokes-container` with the new joke (just like above!)

3. Start up json-server with `json-sever --watch db.json`. If you aren't able then attempt to install the json-server (installation depends on your OS). You can now fetch jokes from `http://localhost:3000/jokes`. Fetch the array of jokes, iterate through the array, and create a new paragraph tag for each joke just like above.

  - HINT: Once again make sure you look at the data you get back, it WILL be different from the dad jokes API
