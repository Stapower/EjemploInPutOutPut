export class Producto {
    id: number;
    descripcion: string;
	tipo: Tipo;
	fechaDeVencimiento: string;
	precio: number;
	rutaDeFoto: string;

	public constructor(//	id: number,
						descripcion: string,
						tipo: Tipo,
						fechaDeVencimiento: string,
						precio: number,
						rutaDeFoto: string)
    {

		//this.id = id;
		this.descripcion = descripcion;
		this.tipo = tipo;
		this.fechaDeVencimiento = fechaDeVencimiento;
		this.precio = precio;
		this.rutaDeFoto = rutaDeFoto;
	}
	

}

export enum Tipo{
	liquido = "Liquido",
	solido = "Solido"
}