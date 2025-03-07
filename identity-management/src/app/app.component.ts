import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { identity } from './identities';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'identity-management';

  // Identity:identity = {
  //   firstName : "Manuj",
  //   lastName : "Sharma",
  //   accountName : "Facebook",
  //   personalNumber : 1002345,
  //   costCenter : "Delhi",
  //   department : "IT",
  //   startDate : new Date('1977-09-24'),
  //   endDate : new Date, 

  // }

  Identities:identity[] = [{
    firstName : "Manuj",
    lastName : "Sharma",
    accountName : "Facebook",
    personalNumber : 1002345,
    costCenter : "Delhi",
    department : "IT",
    startDate : new Date('1977-09-24'),
    endDate : new Date, 

  },{
    firstName : "Manuj",
    lastName : "Sharma",
    accountName : "Facebook",
    personalNumber : 1002345,
    costCenter : "Delhi",
    department : "IT",
    startDate : new Date('1977-09-24'),
    endDate : new Date, 

  },{
    firstName : "Manuj",
    lastName : "Sharma",
    accountName : "Facebook",
    personalNumber : 1002345,
    costCenter : "Delhi",
    department : "IT",
    startDate : new Date('1977-09-24'),
    endDate : new Date, 

  },{
    firstName : "Manuj",
    lastName : "Sharma",
    accountName : "Facebook",
    personalNumber : 1002345,
    costCenter : "Delhi",
    department : "IT",
    startDate : new Date('1977-09-24'),
    endDate : new Date, 

  },{
    firstName : "Manuj",
    lastName : "Sharma",
    accountName : "Facebook",
    personalNumber : 1002345,
    costCenter : "Delhi",
    department : "IT",
    startDate : new Date('1977-09-24'),
    endDate : new Date('2005-09-23'), 

  },
]
}
