import { Router } from "express";
import * as apiControllers from '../controllers/apiController';

const router = Router();




//Rotas
router.get('/ping',apiControllers.Ping);

router.get('/redom',apiControllers.Random);

router.get('/nome/:nome',apiControllers.nome);



router.post('/frases',apiControllers.createPhrases);

router.get('/lista',apiControllers.ListaPhrase);

router.get('/frase/:id',apiControllers.PhraseId);

router.put('/frase/:id',apiControllers.UpdatePrhase);

router.delete('/frase/:id',apiControllers.DeletPhrase);




export default router;