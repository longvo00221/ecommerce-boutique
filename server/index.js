import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import "dotenv/config";
import mongoose from "mongoose";
import routes from "./src/routes/index.js";
import importStaticData from "./DataImport.js";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use('/api/import',importStaticData)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);


const port = process.env.PORT || 5000;
const server = http.createServer(app);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("DB Connected");
        server.listen(port, () => {
            console.log(`Server is Running on Port ${port}`);
        });
    })
    .catch((err)=>{
        console.log({err});
        process.exit(1);
    })
