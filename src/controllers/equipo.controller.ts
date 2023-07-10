
import { Response,Request } from "express"

import {equipoService} from '../services'
export const equipoController = {
    getAllEquipo:async(req:Request,res:Response)=>{
        try {
            const data = await equipoService.getAll();
            return res.json(data);
        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    },
    create: async(req:Request,res:Response)=>{
        try {
            const data = await equipoService.create(req.body);
            return res.json(data);
        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    },
    update: async(req:Request,res:Response)=>{
        try {
            const {id} = req.params;
            const data = await equipoService.update(id,req.body);
            return res.json(data);
        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    },
    delete: async(req:Request,res:Response)=>{
        try {
            const {id} = req.params;
            const data = await equipoService.delete(id);
            return res.json(data);
        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    }

        
}