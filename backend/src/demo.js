const express = require('express');
const app = express();

function regularHandler(req, res) {
  // `this` here would not refer to req or res
  console.log('Inside regular function. `this` refers to:', this); // This will log `this` as the global object or undefined.
  res.send('Hello from regular function!');
}

app.get('/', regularHandler);  // Calling regular function
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
