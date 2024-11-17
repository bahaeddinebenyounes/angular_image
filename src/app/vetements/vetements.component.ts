import { Component } from '@angular/core';
import { vetementsService } from '../services/vetements.service';
import { AuthService } from '../services/auth.service';
import { Vetements } from '../model/Vetements.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html',
  styleUrls: ['./vetements.component.css']
})
export class VetementsComponent {
  vetements   : any;
  constructor(private vetementsService: vetementsService,
    public authService: AuthService ) {
    /* this.vetements = vetementsService.listevetements(); */
  /*console.log(this.vetements); */
  }
  
  ngOnInit(): void {
  this.chargervetements();
}
  
 /*  chargervetements(){ this.vetementsService.listevetements().subscribe(vet => { 
    console.log(vet); this.vetements = vet; }); }
 */
    chargervetements() {
      this.vetementsService.listevetements().subscribe(vets => {
        this.vetements = vets;   
        this.vetements.forEach((prod) => { 
          prod.imageStr = 'data:' + prod.images[0].type + ';base64,' + 
  prod.images[0].image; 
            });          
      }); 
     } 
      

  
    
 

  supprimervetements(p: Vetements) { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) this.vetementsService.supprimervetements(p.idVetemnt).subscribe(() => {
       console.log("vetements supprimé"); this.chargervetements(); }); 
      }
}


