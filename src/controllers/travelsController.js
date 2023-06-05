import { travels } from "../models/index.js";
import notFound from "../errors/notFound.js";

class TravelController {
  static listTravels = async (req, res, next) => {
    try {
      const search = travels.find();
      const count = await travels.countDocuments({}).exec();
      const result = {
        data: search,
        count: count,
      };
      req.result = result;
      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listTravelById = async (req, res, next) => {
    try {
      let id = req.params.id;
      const travelResult = await travels.findById(id);
      if (travelResult !== null) {
        res.status(200).send({ travelResult });
      } else {
        res.status(404).send({ message: "Id da viagem não localizado." });
      }
    } catch (err) {
      next(err);
    }
  };

  static registerTravel = async (req, res, next) => {
    try {
      let travel = new travels(req.body);
      await travel.save();
      res.status(201).send(travel.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static updateTravel = async (req, res, next) => {
    try {
      const id = req.params.id;
      const travelResult = await travels.findByIdAndUpdate(id, {
        $set: req.body,
      });
      if (travelResult !== null) {
        res.status(200).send({ message: "Viagem atualizada com sucesso!" });
      } else {
        next(new notFound("Id da viagem não localizado."));
      }
    } catch (err) {
      next(err);
    }
  };

  static deleteTravel = async (req, res, next) => {
    try {
      const id = req.params.id;
      const travelResult = await travels.findByIdAndDelete(id);
      if (travelResult !== null) {
        res.status(200).send({ message: "Viagem excluida som sucesso!" });
      } else {
        next(new notFound("Id da viagem não localizado."));
      }
    } catch (err) {
      next(err);
    }
  };

  static listTravelsByFilter = async (req, res, next) => {
    try {
      const search = await processSearch(req.query);
      if (search !== null) {
        const travelResult = travels.find(search);
        const count = await travels.countDocuments({}).exec();
        const result = {
          data: travelResult,
          count: count,
        };
        req.result = result;
        next();
      } else {
        res.status(200).send([]);
      }
    } catch (err) {
      next(err);
    }
  };
}

async function processSearch(params) {
  const { place } = params;
  let search = {};
  if (place) search.nome_destino = { $regex: place, $options: "i" };

  return search;
}

export default TravelController;
