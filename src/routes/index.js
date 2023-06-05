import express from "express";
import travels from './travelsRoutes.js'

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Node");
	});
	
	app.use(
		express.json(),
		travels
	)
};

export default routes;
