import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { vetementsService } from '../services/vetements.service';
import { Vetements } from '../model/Vetements.model';
import { Type } from '../model/Type.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-vetements',
  templateUrl: './update-vetements.component.html',
  styleUrls: ['./update-vetements.component.css']
})
export class UpdateVetementsComponent implements OnInit {

  currentvetements = new Vetements();
  Type!: Type[];
  updatedCatId!: number;
  myImage! : string; 
  uploadedImage!: File; 
  isImageUpdated: Boolean=false; 


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private vetementsService: vetementsService) { }


  ngOnInit(): void {
    this.vetementsService.listeTypes(). subscribe(vets => {
      this.Type = vets._embedded.types;
       console.log(vets);
       this.vetementsService.consultervetements(this.activatedRoute.snapshot.params['id'])
       .subscribe( prod =>{ this.currentvetements = prod; 
              this.updatedCatId =   prod.type.idType; 
          } ) ; 
    
    });
     /*  this.vetementsService.consultervetements(this.activatedRoute.snapshot.params['id']). subscribe( prod =>{ 
        this.currentvetements = prod;
         this.updatedCatId = this.currentvetements.type.idType;
        this.vetementsService 
        .loadImage(this.currentvetements.image.idImage) 
        .subscribe((img: Image) => { 
        this.myImage = 'data:' + img.type + ';base64,' + img.image; 
        });  
        } ) ; */
  }
  onImageUpload(event: any) { 
    if(event.target.files && event.target.files.length) { 
      this.uploadedImage = event.target.files[0]; 
       this.isImageUpdated =true; 
      const reader = new FileReader(); 
      reader.readAsDataURL(this.uploadedImage); 
      reader.onload = () => { this.myImage = reader.result as string;  }; 
    } 
 }
 onAddImageVetement() { 
  this.vetementsService 
  .uploadImageVet(this.uploadedImage, 
this.uploadedImage.name,this.currentvetements.idVetemnt) 
  .subscribe( (img : Image)  => { 
          this.currentvetements.images.push(img); 
          }); 
 } 
 supprimerImage(img: Image){ 
  let conf = confirm("Etes-vous sûr ?"); 
  if (conf) 
     this.vetementsService.supprimerImage(img.idImage).subscribe(() => { 
        //supprimer image du tableau currentProduit.images     
        const index = this.currentvetements.images.indexOf(img, 0); 
        if (index > -1) { 
          this.currentvetements.images.splice(index, 1); 
        } 
   }); 
 } 

 


  
  /* updatevetements() {
    this.currentvetements.type = this.Type.find(cat => cat.idType == this.updatedCatId)!;

    // Log the current vetements object before the update
    console.log('Updating Vetement with data:', this.currentvetements);

    this.vetementsService.updateVetements(this.currentvetements).subscribe(
        prod => { 
            console.log('Vetement updated successfully:', prod); // Log successful response
            this.router.navigate(['vetements']); 
            window.location.reload();
        },
        error => {
            console.error('Error updating Vetement:', error); // Log any errors
        }
    );
}
 */
updatevetements() { 
  /* this.currentvetements.type = this.Type.find(cat => cat.idType == 
this.updatedCatId)!; 
  //tester si l'image du produit a été modifiée 
  if (this.isImageUpdated) 
  {     
    this.vetementsService 
    .uploadImage(this.uploadedImage, this.uploadedImage.name) 
    .subscribe((img: Image) => { 
      this.currentvetements.image = img; 
    
             this.vetementsService 
               .updateVetements(this.currentvetements) 
               .subscribe((vet) => { 
                  this.router.navigate(['vetements']);
                  window.location.reload();
                            }); 
      }); 
    } 
    else{           
        this.vetementsService 
          .updateVetements(this.currentvetements) 
          .subscribe((prod) => { 
            this.router.navigate(['vetements']); 
            window.location.reload();
          }); 
    }  */

          this.currentvetements.type = this.Type.find(cat => cat.idType == 
            this.updatedCatId)!;         
                      this.vetementsService 
                        .updateVetements(this.currentvetements) 
                        .subscribe((prod) => { 
                          this.router.navigate(['vetements']); 
                        }); 
              } 
}


