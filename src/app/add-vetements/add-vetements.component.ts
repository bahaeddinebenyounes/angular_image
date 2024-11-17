import { Component } from '@angular/core';
import { Vetements } from '../model/Vetements.model';
import { vetementsService } from '../services/vetements.service';
import { Router } from '@angular/router';
import { Type } from '../model/Type.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-add-vetements',
  templateUrl: './add-vetements.component.html',
  styleUrls: ['./add-vetements.component.css']
})
export class AddVetementsComponent {
  newvetements = new Vetements();
  message : string | undefined;
  type! : Type[];
  newIdType! : number; 
  newType! : Type;
  uploadedImage!: File; 
  imagePath: any; 


  constructor(private vetementsService: vetementsService,private router:Router) {}


  ngOnInit():void {
    this.vetementsService.listeTypes(). 
    subscribe(vets => {
      this.type = vets._embedded.types;
      console.log(vets); 
       });
     }
  /* addvetement(){ 
    this.newvetements.type = this.type.find(cat => cat.idType == this.newIdType)!; 
    this.vetementsService.ajoutervetements(this.newvetements) .subscribe(vet => { 
      console.log(vet); 
      this.router.navigate(['vetements']); }); } */

      addvetement(){ 
        this.vetementsService 
        .uploadImage(this.uploadedImage, this.uploadedImage.name) 
        .subscribe((img: Image) => { 
             this.newvetements.image=img; 
             this.newvetements.type = this.type.find(cat => cat.idType 
  == this.newIdType)!; 
          
              this.vetementsService 
                .ajoutervetements(this.newvetements) 
                .subscribe(() => { 
                  this.router.navigate(['vetements']); 
                }); 
        }); 
        }

      onImageUpload(event: any) { 
        this.uploadedImage = event.target.files[0]; 
         
        var reader = new FileReader(); 
        reader.readAsDataURL(this.uploadedImage); 
        reader.onload = (_event) => {  this.imagePath = reader.result;    } 
     } 
   
  
  }
  
 
