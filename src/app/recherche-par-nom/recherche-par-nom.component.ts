import { Component, OnInit } from '@angular/core';
import { Vetements } from '../model/Vetements.model';
import { vetementsService } from '../services/vetements.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{
  vetements:Vetements[]=[];
  allvetements:Vetements[];
  nomvetements!:string;
  searchTerm!:string;

    constructor(private vetementsService:vetementsService){}

  ngOnInit(): void {
    this.vetementsService.listevetements().subscribe(prods => { 
      console.log(prods); 
      this.allvetements = prods; 
    });
    }
  rechercherProds(){ this.vetementsService.rechercherParNom(this.nomvetements).subscribe(prods => { this.vetements = prods; console.log(prods)}); }
  onKeyUp(filterText : string){ this.vetements = this.allvetements.filter(item => item.nomVetement.toLowerCase().includes(filterText)); }  
}
