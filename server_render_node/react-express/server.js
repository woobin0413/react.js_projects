// const port = 5000;
// app.listen(port, () => console.log("server running on " + port));
var app = require("./config/mysql/express")();
var topic = require("./routes/mysql/topic")();
app.use("/", topic);

app.listen(5000, function() {
  console.log("Server running on 5000 port!");
});
