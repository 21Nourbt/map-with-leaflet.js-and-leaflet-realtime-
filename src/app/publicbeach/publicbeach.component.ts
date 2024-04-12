import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms'; 
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-publicbeach',
  templateUrl: './publicbeach.component.html',
  styleUrl: './publicbeach.component.css'
})
export class PublicbeachComponent implements OnInit {
  constructor(){};
  ngOnInit(): void {
    
  }
    publicbeachForm =new FormGroup({
      id :new FormControl(""),
   
     beachname:new FormGroup(""),
    city:new FormGroup(""),
    location:new FormGroup(""),
    description:new FormGroup(""),
    photos:new FormGroup("")

 });
publicbeachadd(){
  console.log(this.publicbeachForm);
}
}
