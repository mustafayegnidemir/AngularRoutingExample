import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products= [
    { name: 'Product 1'},
    { name: 'Product 2'},
    { name: 'Product 3'}
  ];

  constructor( private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loadProducts(){
    //
    this.router.navigate(['products'], {relativeTo:this.route});
  }

}
