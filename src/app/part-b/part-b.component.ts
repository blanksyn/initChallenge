import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-part-b',
  templateUrl: './part-b.component.html',
  styleUrls: ['./part-b.component.css']
})
export class PartBComponent implements OnInit {
  initPart2 = new FormGroup({
    bit: new FormControl('',Validators.required),
    decimal: new FormControl('',Validators.required),
    otp: new FormControl('',Validators.required)
  })

  numRegex = /^-?\d*[.,]?\d{0,2}$/;

  constructor() { }

  ngOnInit(): void {
  }
  
  get bit(){
    return this.initPart2.get('bit')
  }

  get decimal(){
    return this.initPart2.get('decimal')
  }

  get otp(){
    return this.initPart2.get('otp')
  }
  

}
