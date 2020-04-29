import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  contactInfoData = [];
  appReactiveForm: FormGroup;
  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.dataService.getData().subscribe(
      response => {
      console.log("dummy response");
      this.contactInfoData = response;
    });
    console.log(this.contactInfoData);

    //creating a reactive form
    this.appReactiveForm  = new FormGroup({
      'firstname': new FormControl(null),
      'lastname': new FormControl(null),
      'email': new FormControl(null),
      'phoneNo': new FormControl(null),
      'status': new FormControl('active')
    });
  }

  deleteContact(delId){
    this.dataService.deleteData(delId).subscribe(
      response => {
      console.log("dummy response");
      this.contactInfoData = response;
    });
  }

  /* addContact(){
  const obj = {

  };
  this.dataService.addData()
  } */

  onSubmit(){
    console.log(this.appReactiveForm);
    const postData = {
      id: null,
      first_name: this.appReactiveForm.value['firstname'],
      last_name: this.appReactiveForm.value['lastname'],
      email: this.appReactiveForm.value['email'],
      status: (this.appReactiveForm.value['status'] === 'active') ? true : false
    };
    this.dataService.addData(postData).subscribe(
      response => {
      console.log("dummy response");
      this.contactInfoData = response;
    });
    console.log(this.contactInfoData);
  }

  editContact(event, item){
    if(event.keyCode === 13){
      item.editFlag = false;
    }
  }

  choseItem(item){
    item.editFlag = true;
  }
}
