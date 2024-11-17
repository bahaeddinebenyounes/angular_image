import { Type } from "./Type.model";
import { Image } from "./image.model";

export class Vetements {
  idVetemnt!   : number;
  nomVetement! : string;
  prixVetement!: number;
  dateVetement!: Date;
  type!        : Type;
  image! : Image;
  imageStr!:string;
  images!:Image[];
}
