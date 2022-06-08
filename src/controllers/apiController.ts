import {Request, Response } from "express";
import {Phrase} from '../models/Phrases';


export const Ping = (req:Request , res:Response)=>{
    res.json({pong:true});
};


export const Random  = (req:Request,res:Response)=>{
    let num: Number = Math.floor(Math.random()* 10) ;
     res.json({vNaber:num});
 };


 export const nome =(req:Request,res:Response)=>{
    let nome:string = req.params.nome;
    res.json({nome});  

};




//Criar a frase
export const createPhrases = async (req:Request,res:Response)=>{   
    //pega os dados da requisição
    let {autor,txt} = req.body;
    
    //insere na base de dados
    let NewPrhase = await Phrase.create({autor,txt});

    res.json({id: NewPrhase,autor,txt});
};


//Listar todas as fases
export const ListaPhrase = async (req:Request,res:Response)=>{
    
   let lista = await Phrase.findAll();
   res.json({lista});

};


//Pegar frase pelo id
export const PhraseId = async  (req:Request,res:Response)=>{
    let {id} = req.params;
    let Frase = await Phrase.findByPk(id);

    if (Frase){
        res.json({Frase});
    }else{
        res.json({erro:'Frase não encontrada'});
    }
 
 };


 //update
 export const UpdatePrhase = async  (req:Request,res:Response)=>{
    let {id} = req.params;
    let {autor, txt} = req.body;

    let Frase = await Phrase.findByPk(id);

    if (Frase){
       Frase.autor = autor;
       Frase.txt = txt;
       Frase.save();
       res.json({Frase});
    }else{
        res.json({erro:'Frase não encontrada'});
    }
 
 }; 

 //Delete Frase
 export const DeletPhrase = async  (req:Request,res:Response)=>{
    let {id} = req.params;
    await Phrase.destroy({where: {id} });
    res.json({});
 
 };