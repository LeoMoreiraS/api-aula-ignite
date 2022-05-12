import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { autheticateRoutes } from "./authenticate.routes";
import { carsRoutes } from "./car.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();
router.use("/categories", categoriesRoutes);
router.use("/specifications", ensureAuthenticated, specificationsRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use(autheticateRoutes);
export { router };
