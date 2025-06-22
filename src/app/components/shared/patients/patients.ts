import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-patients',
   imports: [MatIconModule,MatMenuModule],
  templateUrl: './patients.html',
  styleUrl: './patients.css'
})
export class Patients {

}
