const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.json({
        date: new Date().toLocaleString
    })
})


module.exports = routes;