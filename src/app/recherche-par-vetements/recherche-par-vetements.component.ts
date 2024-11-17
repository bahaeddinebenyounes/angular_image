import { Component } from '@angular/core';
import { Type } from '../model/Type.model';
import { vetementsService } from '../services/vetements.service';
import { Vetements } from '../model/Vetements.model';

@Component({
  selector: 'app-recherche-par-vetements',
  templateUrl: './recherche-par-vetements.component.html',
  styleUrls: ['./recherche-par-vetements.component.css']
})
export class RechercheParVetementsComponent {
vetements:Vetements[]=[];
IdType!:number;
type:Type[];
types:Type[];
ngOnInit(): void {
  this.vetementsService.listeTypes().subscribe(cats => {
    this.type = cats._embedded.types; 
    console.log(cats);
  });
}

constructor(private vetementsService:vetementsService){}
onChange() {
  this.vetementsService.rechercherPartype(this.IdType).subscribe(prods =>{this.vetements=prods});
}
}
