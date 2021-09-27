import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/controllers/AuthenticateUserController";

const autheticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

autheticateRoutes.post("/login", authenticateUserController.handle);

export { autheticateRoutes };
