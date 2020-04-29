import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

 personData;

  constructor() {
    //mock data
    this.personData = [
    {id:1,first_name:"Inga",last_name:"Belding",email:"ibelding0@rediff.com",status:true, editFlag: false},
    {id:2,first_name:"Lawry",last_name:"Widdecombe",email:"lwiddecombe1@wikispaces.com",status:false, editFlag: false},
    {id:3,first_name:"Nat",last_name:"Cuningham",email:"ncuningham2@wikipedia.org",status:true, editFlag: false},
    {id:4,first_name:"Axe",last_name:"L'argent",email:"alargent3@google.es",status:true, editFlag: false},
    {id:5,first_name:"Earvin",last_name:"Archbell",email:"earchbell4@addthis.com",status:false, editFlag: false},
    {id:6,first_name:"Rickert",last_name:"Banke",email:"rbanke5@usatoday.com",status:false, editFlag: false},
    {id:7,first_name:"Darci",last_name:"De Mattei",email:"ddemattei6@people.com.cn",status:true, editFlag: false}
   ];
  }

  getData(): Observable<any>{
    //here we will be fetching the data from an api using http module
    return of(this.personData); // return this.http.get(`url`);
  }

  deleteData(id): Observable<any>{
    //here we will be posting the data to an end point api using http module
    this.personData = this.personData.filter(item => id !==item.id );
    return of(this.personData); // return this.http.get(`url`);
  }

  addData(obj): Observable<any>{
    //here we will be posting the data to an end point api using http module
    obj.id = this.personData.length !==0 ? this.personData[this.personData.length - 1]['id'] + 1 : 1;
    this.personData.push(obj);
    console.log("adddata serivce", this.personData);
    return of(this.personData); // return this.http.get(`url`);
  }
}
