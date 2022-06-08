import { Model, DataTypes} from "sequelize";
import { sequelize } from '../instances/pg';



export interface PhraseInstance extends Model{
      id:Number,
      autor: String,
      txt:String
};


//tabela da base de dados - frase (tb) 
export const Phrase = sequelize.define<PhraseInstance>('frase',{

     id:{
         primaryKey: true,
         autoIncrement: true,
         type: DataTypes.INTEGER
    },

     autor: {
        type: DataTypes.STRING
     },

     txt:{
        type : DataTypes.STRING
     }
},{
    tableName: 'frase',
    timestamps:false
});

