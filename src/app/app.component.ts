import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public splittednameString: string; 
  public name: string;
  public japaneseName:string;
  public awesomename:boolean = false;

  title = 'app';

 @ViewChild("englishName") nameInput: ElementRef;

 ngOnInit() {
  
}

 convertName (event:any) {
         //console.log('convername'+ this.nameInput.nativeElement.value);
        if(this.nameInput.nativeElement.value !=''){
          this.awesomename = true;
         let a= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y',
         'z']; 
         let b= ['KA','ZU','MI','TE','KU','LU','JI','RI','KI','ZU','ME','TA','RIN','TO','MO','NO',
           'KE','SHI','ARI','CHI','DO','RU','MEI','NA','FU','Z'];
         let splittednameString = Array.from(this.nameInput.nativeElement.value);
         let finalName = []
         splittednameString.forEach(function(holder:any){
           ///console.log(holder+"==>"+b[a.indexOf(holder)]);
            finalName.push(b[a.indexOf(holder)]);
           //console.log(finalName);
         
            
           
         })
         this.japaneseName = finalName.join("");
        }
 }
 reset (event:any) {
   this.nameInput.nativeElement.value = '';
   this.awesomename = false;
 }
// voice() {
//   console.log(this.japaneseName);
//   let voiceName = this.japaneseName;
//   console.log(voiceName);
//    responsiveVoice.setDefaultVoice("Japanese Female");
//    responsiveVoice.speak("hello world", {pitch: 2});
// }

  }

