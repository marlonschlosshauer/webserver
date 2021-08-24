const express = require("express");
const cors = require("cors")
const app = express();
const port = 5000;

app.use(cors())

app.get("/api/product", (req, res) => {
  console.log(req);
  res.send([
    {
      product: "Semi Slick RE71",
      sku: "SRE71",
      stock: "Freiburg 10, München 5",
      price: 19.99,
    },
  ]);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
