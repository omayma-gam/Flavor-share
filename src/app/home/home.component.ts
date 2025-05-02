import { Component } from '@angular/core';
import { RecipeServiceService } from '../services/recipe-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
Recette:any[]=[]
selectCategories=''
  searchByTitle=''
  constructor(private recetService : RecipeServiceService) {
  }

  ngOnInit(): void {
    this.onAllData()
   }
   onAllData(){
     this.recetService.obtenirDonnee().subscribe((AllData:any)=>{
       this.Recette = AllData;
       console.log(AllData)
 
     })
   }
}
