import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  onPress(){
   var title = (<HTMLInputElement> document.getElementById('blogTitle')).value;
console.log(title);
document.getElementById('titleBlog').innerHTML=title;

var content = (<HTMLInputElement> document.getElementById('blogContent')).value;
console.log(content);
document.getElementById('contentBlog').innerHTML=content;

  }

}
