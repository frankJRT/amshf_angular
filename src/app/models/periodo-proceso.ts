import { Cartera } from "./cartera";


export interface PeriodoProceso {
    id: number;
    i_Periodo: number;
    i_Cartera_Comportamiento: Cartera;
    d_Alta: Date;
    X_Status: string;
}
