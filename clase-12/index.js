import express from "express";
import calificacionesRouter from "./src/routes/calificaciones.routes.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", calificacionesRouter);

app.listen(PORT, () => console.log(`Server listening on: ${PORT}`));
app.on("error", (error) => console.log(`ERROR: ${error}`));
