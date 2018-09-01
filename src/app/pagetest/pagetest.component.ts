import { Component, OnInit } from '@angular/core';
import { ListeSalonService } from '../services/liste-salon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagetest',
  templateUrl: './pagetest.component.html',
  styleUrls: ['./pagetest.component.css']
})
export class PagetestComponent implements OnInit {

  salon:string;
  listeSalons:string[];
  listeSalonsStatics:string[];

  constructor(http: HttpClient, listeSalonService: ListeSalonService) { 
    console.log("salut");
    this.listeSalons = listeSalonService.getSalons();
    this.listeSalonsStatics = ListeSalonService.getSalonsStatic();
  }
  
  ngOnInit() {
  }

}
