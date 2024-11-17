import { Component, OnInit } from '@angular/core';
import { Type } from '../model/Type.model';
import { vetementsService } from '../services/vetements.service';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styleUrls: ['./liste-types.component.css']
})
export class ListeTypesComponent implements OnInit{

  types! : Type[];

  updatedType:Type = {"idType":0,"nomType":"","descriptionType":""};

  ajout:boolean=true;

  constructor(private vetementService : vetementsService) { }
  ngOnInit(): void {
  this.vetementService.listeTypes().
  subscribe(cats => {this.types = cats._embedded.types;
  console.log(cats);
  });
  }
  typeUpdated(type:Type){
    console.log("type",type)
    this.vetementService.ajouterCategorie(type).
    subscribe( ()=> this.chargerTypes());
  }
  chargerTypes(){
    this.vetementService.listeTypes().
    subscribe(cats => {this.types = cats._embedded.types;
    console.log(cats);
    });
  }

  updateType(type:Type) {
    this.updatedType=type;
    this.ajout=false; 

    }

}
