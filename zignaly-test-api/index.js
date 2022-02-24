require("dotenv").config();
const app = require("./server");

app.listen(5000, () => {
    console.log("Server has started!");
});

// set port, listen for requests
const PORT = process.env.NODE_LOCAL_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});