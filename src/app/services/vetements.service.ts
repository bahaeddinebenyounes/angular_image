import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vetements } from '../model/Vetements.model';
import { typeWrapper } from '../model/typeWrapped.model';
import { Type } from '../model/Type.model';
import { Image } from '../model/image.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
  providedIn: 'root'
})
export class vetementsService {
  apiURL: string = 'http://localhost:8080/vetements/api';
  apiURLCat: string = 'http://localhost:8080/vetements/type';

  vetements: Vetements[]= [];
  constructor(private http : HttpClient,
              private authService : AuthService
  ) {
    }


  listevetements():Observable<Vetements[]>{ 
    return this.http.get<Vetements[]>(this.apiURL+"/all");

  }
  
  ajoutervetements(vet: Vetements):Observable<Vetements>{ 
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.post<Vetements>(this.apiURL+"/addvet", vet, {headers:httpHeaders});
  }
  supprimervetements(id : number) { 
    const url = `${this.apiURL}/delvet/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
}


  vetement! : Vetements;



  consultervetements(id: number): Observable<Vetements> { 
    const url = `${this.apiURL}/getbyid/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Vetements>(url,{headers:httpHeaders});
}

   triervetements(){ 
    this.vetements = this.vetements.sort((n1,n2) => {
      let x1=n1.idVetemnt;
      let x2=n2.idVetemnt;
       if (x1 > x2) { 
        return 1;
      } 
       if (n1.idVetemnt < n2.idVetemnt) { 
        return -1; 
      } 
      return 0; 
    }); 
    } 
    
    updateVetements(prod: Vetements): Observable<Vetements> { 
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<Vetements>(this.apiURL+"/updatevet", prod, {headers:httpHeaders});
      }
  
    
    /* listetype():Observable<Type[]>{ 
      return this.http.get<Type[]>(this.apiURL+"/type"); 
    } */

    listeTypes():Observable<typeWrapper>{
      let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.get<typeWrapper>(this.apiURLCat,{headers:httpHeaders}
  );
}
      

  
    rechercherPartype(idType: number):Observable< Vetements[]> { const url = 
      `${this.apiURL}/vetstype/${idType}`; 
      return this.http.get<Vetements[]>(url); }

      rechercherParNom(nom: string):Observable< Vetements[]> { 
        const url = `${this.apiURL}/vetsByName/${nom}`; 
        return this.http.get<Vetements[]>(url); }

      ajouterCategorie( cat: Type):Observable<Type>{
        return this.http.post<Type>(this.apiURLCat, cat, httpOptions);
        }
        
        uploadImage(file: File, filename: string): Observable<Image>{
          const imageFormData = new FormData();
          imageFormData.append('image', file, filename);
          const url = `${this.apiURL + '/image/upload'}`;
          return this.http.post<Image>(url, imageFormData);
          }

          loadImage(id: number): Observable<Image> {
            const url = `${this.apiURL + '/image/get/info'}/${id}`;
            return this.http.get<Image>(url);
            }

            uploadImageVet(file: File, filename: string, idProd:number): Observable<any>{ 
              const imageFormData = new FormData(); 
              imageFormData.append('image', file, filename); 
              const url = `${this.apiURL + '/image/uploadImageForVetement'}/${idProd}`; 
              return this.http.post(url, imageFormData); 
            } 
           supprimerImage(id : number) {
            const url = `${this.apiURL}/image/delete/${id}`;
            return this.http.delete(url, httpOptions);
            }

            uploadImageFS(file: File, filename: string, idProd : number): Observable<any>{
              const imageFormData = new FormData();
              imageFormData.append('image', file, filename);
              const url = `${this.apiURL + '/image/uploadFS'}/${idProd}`;
              return this.http.post(url, imageFormData);
            }
      
    }
  
     

