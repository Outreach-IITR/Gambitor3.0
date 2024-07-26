import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({ message: "Yay It's working.." });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
