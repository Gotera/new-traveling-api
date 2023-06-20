import express from "express";
import travels from './travelsRoutes.js'
import users from './usersRoutes.js'

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Node");
	});
	
	app.use(
		express.json(),
		travels,
		users
	)
};

export default routes;
