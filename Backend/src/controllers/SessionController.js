const knex = require("../database/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
    async Session(req, res, next) {
        try {

            const token = req.headers['authorization'];
            const decoded = await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if(err) {
                    res.status(401);
                    res.json({
                        error: 401,
                        message: "Error whne try authenticate"
                    })
                }

                req.userId = decoded.userId

                next();
            });

            res.json({ title: "x", text: "jgkldgiufgilds" })
            
        } catch (error) {
            next(error)
        }
    }
}