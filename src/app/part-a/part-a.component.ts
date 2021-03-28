import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  num= new FormControl('');

  showAnsA(){
    var n= this.num.value;
    var sum_to_n = function(n:number){
      var a = 1;
      var sum = 0;
      while (a<=n){
        sum+=a;
        a++
      }
      return sum;
    };
      var x =sum_to_n(n);
      window.alert("Result: "+x);
    }

    showAnsB(){
      var n= this.num.value;
      var sum_to_n = function(n:number){
        var sum=0;
        for (var i=0;i<=n;i++){
        sum+=i;
        }
        return sum;
      };
        var x =sum_to_n(n);
        window.alert("Result: "+x);
      }

      showAnsC(){
        var n= this.num.value;
        var sum_to_n = function(n:number){
          var a = n*(n+1)/2;
          return a;
        };
          var x =sum_to_n(n);
          window.alert("Result: "+x);
        }
}
