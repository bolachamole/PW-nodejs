import { Router } from "express"
import majorController from "../controllers/major.js"
import authController from "../controllers/auth.js"
import gameController from "../controllers/game.js";

const router = express.Router();

router.get("/cookie", majorController.testCookie);

router.all("/signup", authController.signup);
router.all("/login", authController.login);
router.get("/logout", authController.logout);

router.get("/major", majorController.index);
router.all("/major/create", majorController.create);
router.get("/major/read/:id", majorController.read);
router.all("/major/update/:id", majorController.update);
router.post("/major/remove/:id", majorController.remove);

router.get("/play", gameController.play);

export default router
