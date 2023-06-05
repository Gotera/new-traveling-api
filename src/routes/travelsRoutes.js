import express from "express";
import TravelsController from "../controllers/travelsController.js";
import paginate from "../middlewares/paginate.js";

const router = express.Router();

router
  .get("/api/travels", TravelsController.listTravels, paginate)
  .get("/api/travels/search", TravelsController.listTravelsByFilter, paginate)
  .get('/api/travels/:id', TravelsController.listTravelById)
  .post("/api/register", TravelsController.registerTravel)
  .put("/api/update/:id", TravelsController.updateTravel)
  .delete("/api/delete/:id", TravelsController.deleteTravel)
export default router;
