const knex = require("../database/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
    async Login(req, res, next) {
        try {
            try {

                const { email, password } = req.body;

                const passHashBefore = await knex("users").select("password").where({ email }).first();

                if(!passHashBefore) {
                    res.status(404);
                    res.json({
                        status: 404,
                        message: "Error when try login at application: email or password cannot be found!"
                    });

                    console.log("Error when try login at application: password cannot be found!");
                }

                const result = bcrypt.compareSync(password, passHashBefore.password);

                if(!result) {
                    res.status(404);
                    res.json({
                        status: 404,
                        message: "Error when try login at application: email or password cannot be found!"
                    });

                    console.log("Error when try login at application: password cannot be found!");
                }

                const user = await knex("users").select("id", "name").where({ email }).first();

                res.json({
                    status: 200,
                    name: user.name,
                    id: user.id,
                    email,
                    auth: true,
                    token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 300 })
                });

            } catch (error) {
                console.log({
                    error,
                    message: "Error in backend application"
                })
            }

        } catch (error) {
            next(error)
        }
    }
}