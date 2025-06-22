import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-actions',
 imports: [MatIconModule,MatMenuModule],
  templateUrl: './actions.html',
  styleUrl: './actions.css'
})
export class Actions {

}
