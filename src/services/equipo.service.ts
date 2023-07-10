import {EquipoModel} from '../models';

export const equipoService ={
    getAll:async()=>{
        return await EquipoModel.find();
    },
    create:async(entity:object)=>{
        return await EquipoModel.create(entity);
    },

    update:async(id:string, body:object)=>{
        return await EquipoModel.findByIdAndUpdate
        (id,body);

    },
    delete: async(id:string)=>{
        return await EquipoModel.findByIdAndDelete(id);
    }
}