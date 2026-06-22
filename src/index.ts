import cookieParser from "cookie-parser";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";
import validateEnv from "../utils/validateEnv.js";
import logger from "./middlewares/logger.js";
import router from "./router/router.js";
import helpers from "./views/helpers/helpers.js";

declare module "express-session" {
	interface SessionData {
		uid: string;
	}
}

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	name: "sid",
	genid: () => uuidv4(),
	secret: env.SECRET,
	resave: false,
	saveUninitialized: false,
	rolling: true,
	cookie: {
		httpOnly: true,
		maxAge: 2 * 60 * 60 * 1000
	}
}));

app.use((res, res, next) => {
	res.locals.logado = !!req.session.uid;
	next();
});

app.use(router);
