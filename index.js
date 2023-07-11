const express = require("express"); // ok // importer Express puis ajouter listner : en même temps, on doit créer un fichier .env et l'importer
const dotenv = require("dotenv"); // ok // importer dotenv
const mongoose = require("mongoose");
const usersRouter = require("./Routes/UserRoutes"); // ok // // importer Router pour user
mongoose.set("strictQuery", false); // config mongoose pour éviter les erreurs
const app = express(); // pour utiliser express
app.use(express.json());
dotenv.config(); // ok // utiliser env
app.use("/api", usersRouter); // ok // use route

mongoose.connect(process.env.DB_URL).then(console.log("DB Connected"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
