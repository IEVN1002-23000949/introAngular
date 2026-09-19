import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
imageWidth:number=40;
imageMargin:number=2;
muestraImage:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImage=!this.muestraImage
}


heroes:any[]=[
{
  imagen:"https://dragonball-api.com/transformaciones/gogeta.webp",
  nombre:"Gogeta",
  descripcion:"Fusion",
  race:"Saiyan",
  ki:150000
},
{
  imagen:"https://dragonball-api.com/characters/Jiren.webp",
  nombre:"Jiren",
  descripcion:"Fuerza del Orden",
  race:"Jiren Race",
  ki:120000
},
{
  imagen:"https://dragonball-api.com/characters/Beerus_DBS_Broly_Artwork.webp",
  nombre:"Bills",
  descripcion:"Dios de la Destrucccion",
  race:"God",
  ki:1000000
},
{
  imagen:"https://dragonball-api.com/characters/Raditz_artwork_Dokkan.webp",
  nombre:"Raditz",
  descripcion:"Hijo malo",
  race:"Saiyan",
  ki:1500
}
]

}
