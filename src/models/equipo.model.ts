import {Schema,model} from 'mongoose';


const equipoSchema = new Schema({
    nombre:{
        type:String
    },
    descripcion:{
        type:String
    },
    serie:{
        type:String
    }
});

export const EquipoModel = model('equipos',equipoSchema); 