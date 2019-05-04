module.exports = function() {
  var conn = require("../../config/mysql/config");
  var route = require("express").Router();
  var fs = require("fs");
  var multer = require("multer");
  var date = Date.now();
  var _storage = multer.diskStorage({
    destination: function(req, file, cb) {
      if (
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg"
      ) {
        cb(null, "uploads/images");
      } else {
        cb(null, "uploads/etc");
      }
    },
    filename: function(req, file, cb) {
      cb(null, date + file.originalname);
    }
  });
  var upload = multer({ storage: _storage });

  //파일의 목록이 있거나 없을때 중복없이 하나의 get으로 가져온다.
  route.get("/api/customers", function(req, res) {
    var sql = "select * from topic";
    conn.query(sql, function(err, row, field) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        // var image_url = "user/images/1.jpg";
        res.json(row);
      }
    });
  });

  route.post("/addpost", upload.single("userfile"), function(req, res) {
    var sql = "insert into topic (title, image, description) values (?,?,?)";
    var title = req.body.title;
    var image = date + req.file.originalname;
    var description = req.body.description;

    conn.query(sql, [title, image, description], function(err, row, field) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        // var image_url = "user/images/1.jpg";
        res.redirect("/customers");
      }
    });
  });

  route.get("/api/posts", function(req, res) {
    const posts = [
      { id: 1, postname: "post1", views: 32 },
      { id: 2, postname: "post2", views: 23 },
      { id: 3, postname: "post3", views: 14 }
    ];
    res.json(posts);
  });

  return route;
};
