export class Cartera {
    i_Cartera_Comportamiento:number;
    d_Cartera_Comportamiento: string;
    e_Cartera_Comportamiento_Descripcion: string;
    n_Cartera_Comportamiento_Clave: string;
    n_Cartera_Comportamiento: string;   

    constructor(idcartera:number,d_cartera: string,
            e_Descripcion:string,e_Clave:string,n_cartera:string){
        this.i_Cartera_Comportamiento = idcartera;
        this.d_Cartera_Comportamiento = d_cartera;
        this.e_Cartera_Comportamiento_Descripcion = e_Descripcion;
        this.n_Cartera_Comportamiento_Clave = e_Clave;
        this.n_Cartera_Comportamiento =  n_cartera;
    }

   
}
