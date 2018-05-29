import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public splittednameString: string;
  public splitter : Array<string>=[]; 
  public name: string;
  public a : Array<string>= ['a','b','c']; 
  public b : Array<string>= ['a','ZU','MI']; 
  public iEle:number;
  title = 'app';
  convertName(nameInput) {
    
    // this.nameString = nameInput.value;
    // //console.log(this.nameString);
    // let splittednameString = Array.from(this.nameString);
    
     //console.log(this.a.filter(x=> this.b.indexOf(x)<0));
    // this.a.forEach(function(value){
    //   if(this.a.value==this.b.forEach(function(value)){});  
    // });
    this.name="sriram";
    let splittednameString = Array.from(this.name);
    console.log('Name-->'+splittednameString);
    splittednameString.forEach(function(holder){
      console.log(holder);
      
    })


     console.log(this.a.indexOf('a'));
    }
  }

