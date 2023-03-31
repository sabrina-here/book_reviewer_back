const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Book reviewer server running here");
});

// iknowthissabrina
// pLk252o0l4mw05cA

const uri =
  "mongodb+srv://iknowthissabrina:pLk252o0l4mw05cA@cluster0.si1sqts.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const booksCollection = client.db("book_reviewer").collection("books");

    app.post("/addBooks", async (req, res) => {
      const books = req.body.array;
      console.log(books);
      const result = await booksCollection.insertMany(books);
      res.send(result);
    });
  } finally {
  }
}
run().catch((e) => console.error(e));

app.listen(port, () => {
  console.log("running");
});
