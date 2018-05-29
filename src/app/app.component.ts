import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nameString: string; 
  public splittednameString: string;
  public splitter : Array<string>=[]; 
  public a : Array<number>= [1,2,3,4,7]; 
  public b : Array<number>= [1,4,3,5]; 
  title = 'app';
  convertName(nameInput) {
    
    // this.nameString = nameInput.value;
    // //console.log(this.nameString);
    // let splittednameString = Array.from(this.nameString);
    
    //  console.log(this.a.filter(x=> this.b.indexOf(x)<0));

  }
}
