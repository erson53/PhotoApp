const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Speicherort der Fotos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.array("photos"), (req, res) => {
  res.json({ message: "Fotos erfolgreich hochgeladen.", files: req.files });
});

app.get("/images", (req, res) => {
  const uploadsDir = path.join(__dirname, "uploads");

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      console.error("Fehler beim Lesen des Verzeichnisses: ", err);
      return res
        .status(500)
        .json({ message: "Fehler beim Lesen des Verzeichnisses." });
    }

    const images = files.map((file) => ({
      name: file,
      url: `http://localhost:${port}/uploads/${file}`,
    }));

    res.json(images);
  });
});

app.delete("/image/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "uploads", filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Fehler beim Löschen der Datei: ", err);
      return res
        .status(500)
        .json({ message: "Fehler beim Löschen der Datei." });
    }
    res.json({ message: "Datei erfolgreich gelöscht." });
  });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
