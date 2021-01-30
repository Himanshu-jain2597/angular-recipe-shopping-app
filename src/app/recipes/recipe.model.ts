import { Ingredient } from "../shared/ingeridents.model";

export class Recipe {
 public name: string;
 public description: string;
 public imgPath:string;
 public ingreidents:Ingredient[];

 constructor(name:string,description:string,imgPath:string,ingreidents:Ingredient[]) {
   this.name = name;
   this.description = description;
   this.imgPath = imgPath;
   this.ingreidents=ingreidents;
 }

}
