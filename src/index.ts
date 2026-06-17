import cookieParser from "cookie-parser";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";

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
