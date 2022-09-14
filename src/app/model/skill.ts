export class Skill {
    update(id: any, skill: Skill) {
      throw new Error('Method not implemented.');
    }
    id: number;
    nombre: string;
    porcentaje: number;

    constructor(nombre:string, porcentaje:number){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }
}
