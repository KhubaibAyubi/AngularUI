import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  imports: [MatIconModule,MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
 isMenuOpen = false;



  
  
}

