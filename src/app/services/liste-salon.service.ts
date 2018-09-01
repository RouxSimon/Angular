import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeSalonService {

  salon5:string="salon5";

  static getSalonsStatic():string[] {
    return ["salon1","salon2","salon3","salon4"];
  }
  getSalons():string[] {
    return ["salon1","salon2","salon6",this.salon5];
  }
  constructor() { }
}
