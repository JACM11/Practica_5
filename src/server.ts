import express,{Express} from 'express';
import morgan from 'morgan';
import cors from 'cors'

import { connectDB } from './database/index';
import {PORT} from './config';
import {routes} from './routes';
export class Server{
    private app:Express;

    constructor(){
        this.app = express();
        connectDB();
        this.configuration();
        this.middlewares();
        this.routes();
    }

    configuration(){
        this.app.set('port',PORT || 3000);
    }
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.get('/',(req,res)=>{
            res.status(200).json({
                name:'API REST EQUIPOS'
            })
        })
        this.app.use('/api/equipo',routes.EquipoRoute);
    }
    
    listen(){
        this.app.listen(this.app.get('port'),()=>{
            console.log(`Server esta  en el puerto ${this.app.get('port')}
            `);
        })
    }
}
