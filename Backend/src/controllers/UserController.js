const knex = require("../database/connection");
const bcrypt = require("bcryptjs");

module.exports = {
    async index(req, res, next) {
        try {
            
            const result = await knex("users").select("*");
            res.json(result);

        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next) {
        try {
            
            const { name, username, email, password } = req.body;

            await knex("users").insert({
                name, 
                username,
                email,
                password: bcrypt.hashSync(password, 10)
            });

            res.json({
                status: 200,
                message: "new user created",
                name,
                email
            })

        } catch (error) {
            next(error)
        }
    }
}