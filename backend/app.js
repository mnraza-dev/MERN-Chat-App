import morgan from "morgan";
import express from "express";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
    res.send("Hello World!");
});


export default app;
