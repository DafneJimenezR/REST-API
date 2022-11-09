const { Router } = require("express");
const router = Router();

const path = require('path');

//Raiz
router.get("/", (req, res) => {
  res.json({
    "Title": "Hola Mundo usando rutas",
  });
 //  res.sendFile(path.join(__dirname+'../html/index.html'));

});

module.exports = router;
