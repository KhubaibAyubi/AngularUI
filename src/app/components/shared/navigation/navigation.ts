import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navigation',
   imports: [MatIconModule,MatMenuModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {

}
