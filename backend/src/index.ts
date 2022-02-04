import express from "express";
import cors from "cors";
import { setupDatabase } from "./config/database";
import userRoutes from "./api/routes/users";
setupDatabase();
const app = express();
app.use(express.json());
app.use(cors());

// Routes should probably start with /api/... - /api/users/...
/* probably can add a generic template and loop though with Object.keys etc.. */
app.use(userRoutes);

// app.get("/", (req, res) => {
//   res.send("yoogg");
// });

const port = 3001;

app.listen(port, () => {
  console.log(`backend deployed on port ${port}`);
});
// adb reverse tcp:3001 tcp:3001 - for unix if cannot access form diff port

export const viteNodeApp = app;