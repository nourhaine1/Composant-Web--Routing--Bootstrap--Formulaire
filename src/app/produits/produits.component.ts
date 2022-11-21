import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  //produits: string[] ; //un tableau de chînes de caractères
  produits : Produit[]; //un tableau de Produit constructor(private
  //produitService: ProduitService;
  constructor(private produitService: ProduitService ) {
  this.produits = produitService.listeProduits();
  }
  ngOnInit(): void {
    
  }
  supprimerProduit(p: Produit)
{
  let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.produitService.supprimerProduit(p);
//console.log(p);
}

  
}


