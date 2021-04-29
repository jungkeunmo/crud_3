import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController)
globalRouter.get("/detail", globalController.detailController)
globalRouter.get("/create", globalController.createController)

export default globalRouter;