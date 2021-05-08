import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController)
globalRouter.get("/detail", globalController.detailController)
globalRouter.get("/create", globalController.createController)

globalRouter.post("/postUpdate", globalController.postUpdateController)
globalRouter.post("/postDelete", globalController.postDeleteController)
globalRouter.post("/postCreate", globalController.postCreateController)

export default globalRouter;