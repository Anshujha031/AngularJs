import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports : [RouterOutlet,FormsModule]

})
export class AppComponent {
  title = 'Hello from BridgeLabz.';
  imageUrl = 'assets/imgurl.jpg'; // Ensure this file exists in src/assets/

  url = 'https://www.bridgelabz.com';
  userName: string = '';
  nameError: String = '';

  ngOnInit(): void {
    this.title = 'Hello from BridgeLabz.';
  }

  onClick(event: Event): void {
    console.log('BridgeLabz logo clicked!', event);
    window.open(this.url, '_blank');
  }
  onInput($event : any){
    console.log("Change Event Occurred!" , $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
}


}
