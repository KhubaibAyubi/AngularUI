import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { Patient } from '../../Interface/patient';
import { Appointment } from '../../Interface/appointment';
import { Header } from '../shared/header/header';
import { Navigation } from '../shared/navigation/navigation';
import { Actions } from "../shared/actions/actions";
import { Patients } from "../shared/patients/patients";
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule, Header, Navigation, Actions, Patients],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  isMenuOpen = false;
  appointmentsTextMenus = {
    isAppointmentTextMenu1Open : true,
    isAppointmentTextMenu2Open : false,
    isAppointmentTextMenu3Open : false,
    isAppointmentTextMenu4Open : false,
    isAppointmentTextMenu5Open : false,
    isAppointmentTextMenu6Open : false,
  }
navigationItems = [
    { icon: 'dashboard', label: 'Potilaan tarkastelu', badge: null },
    { icon: 'person_add', label: 'Potilaan viehtiti', badge: '1' },
    { icon: 'chat', label: 'Lääkärin viestitä', badge: null },
    { icon: 'schedule', label: 'Työajat', badge: null },
    { icon: 'calendar_today', label: 'Kalenteri', badge: null },
    { icon: 'settings', label: 'Asetukset', badge: null },
    { icon: 'description', label: 'Terveysporti', badge: null }
  ];

  quickActions = [
    { icon: 'local_hospital', label: 'Sairaalalahete' },
    { icon: 'science', label: 'Laboratoriotilaus' },
    { icon: 'description', label: 'Todistukset' },
    { icon: 'receipt', label: 'Resepti' },
    { icon: 'timeline', label: 'Kurvantaminen' },
    { icon: 'healing', label: 'Lääkelista' }
  ];

  appointments: Appointment[] = [
    {
      time: '09:00 AM',
      doctor: 'Juha Lahtinen',
      id: '240545-123Y',
      type: 'Etävastaanotto',
      message: 'Hei tohtori, kiitos, että hyväksyitte tapaamisen. Tarvitsen apua uusien oireideni kanssa, joita aloin kokea viime viikolla.'
    },
    {
      time: '09:45 AM',
      doctor: 'Kaarina Mäkinen',
      id: '210637-963A',
      type: 'Etävastaanotto'
    },
    {
      time: '10:30 AM',
      doctor: 'Antti Virtanen',
      id: '060526-741B',
      type: 'Vastaanotto'
    },
    {
      time: '11:15 AM',
      doctor: 'Mari Hiltunen',
      id: '060526-741B',
      type: 'Hoitopuhelu'
    },
    {
      time: '01:00 PM',
      doctor: 'Petri Niemi',
      id: '060526-741B',
      type: 'Konsultaatio'
    },
    {
      time: '02:15 PM',
      doctor: 'Laura Leppänen',
      id: '151139-258D',
      type: 'Etävastaanotto'
    }
  ];

  recentPatients: Patient[] = [
    { name: 'Olavi Virtanen', id: '240545-123Y' },
    { name: 'Juhani Korhonen', id: '010132-123Y' },
    { name: 'Riikka Mäkelä', id: '150242-456K' },
    { name: 'Mikko Nieminen', id: '300630-789P' },
    { name: 'Aino Salminen', id: '010141-321N' }
  ];


  getChipClass(type: string): string {
    return `chip-${type.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/å/g, 'a')}`;
  }

  getActionText(type: string, buttonType: 'primary' | 'secondary'): string {
    const actions: { [key: string]: { primary: string, secondary: string } } = {
      'Etävastaanotto': { primary: 'Avaa etävastaanotto', secondary: 'Avaa potilaat' },
      'Vastaanotto': { primary: 'Aloita vastaanotto', secondary: 'Avaa potilaat' },
      'Hoitopuhelu': { primary: 'Avaa etävastaanotto', secondary: 'Avaa potilaat' },
      'Konsultaatio': { primary: 'Aloita vastaanotto', secondary: 'Avaa potilaat' }
    };
    
    return actions[type]?.[buttonType] || 'Avaa';
  }
}