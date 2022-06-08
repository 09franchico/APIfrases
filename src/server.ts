import  express,{Request,Response}  from "express";
import path from "path";
import dotenv from 'dotenv';
import cors from 'cors';
import apiRouter from './routes/api';

//Inicia as variavies 
dotenv.config();

const server = express();

server.use(cors());


server.use(express.static(path.join(__dirname,'../public')));
server.use(express.urlencoded({extended : true}));


server.use(apiRouter);


server.use((Req:Request, Res:Response)=>{
   Res.status(404);
   Res.json({erro:'Endpoint não encontrado'});
});


server.listen(process.env.PORT);