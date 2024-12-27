import dotenv from "dotenv";  
dotenv.config();  
import http from "http";
import app from "./app";

const port = process.env.PORT || 3000;

const server = http.createServer(app);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
