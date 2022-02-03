import * as express from "express";
import UserController from "../controllers/users";
const userRoutes = express.Router();
const controller = new UserController();

const baseRoute = "/users";
userRoutes.post(baseRoute, controller.create);
userRoutes.get(baseRoute, controller.findAll);
userRoutes.get(baseRoute + "/:id", controller.findOne);
userRoutes.put(baseRoute + '/:id/edit', controller.update);
userRoutes.delete(baseRoute + '/:id', controller.delete);

export default userRoutes;
