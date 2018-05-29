import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public splittednameString: string; 
  public name: string;
  title = 'app';
 
  convertName(nameInput) {
    let a= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y',
    'z']; 
    let b= ['KA','ZU','MI','TE','KU','LU','JI','RI','KI','ZU','ME','TA','RIN','TO','MO','NO',
      'KE','SHI','ARI','CHI','DO','RU','MEI','NA','FU','Z'];
    let finalName=[];
   let japaneseName='';
    this.name="sriram";
    let splittednameString = Array.from(this.name);
    console.log('Name-->'+splittednameString);
    splittednameString.forEach(function(holder){
      console.log(holder+"==>"+b[a.indexOf(holder)]);
      finalName.push(b[a.indexOf(holder)]);
      return japaneseName=finalName.join("");
      
    })
    
    }
  }

