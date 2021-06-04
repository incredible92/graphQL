
import express, { json, urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";


mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    consoleLog("DB connection successful");
    seedNow();
  })
  .catch((err) => consoleLog(err));


app.use(json({ limit: "1 mb" }));
app.use(urlencoded({ extended: false, limit: "1 mb" }));
app.use(helmet());
app.use(cors());

app.use("/api/v1", apiRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  