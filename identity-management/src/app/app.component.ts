import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { identity } from './identities';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet
    CommonModule,
    FormsModule
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

  Identities: identity[] = [{
    firstName: "Manuj",
    lastName: "Sharma",
    accountName: "Facebook",
    personalNumber: 1002345,
    costCenter: "Delhi",
    department: "IT",
    startDate: new Date('1977-09-24'),
    endDate: new Date,

  }, {
    firstName: "Manuj",
    lastName: "Sharma",
    accountName: "Facebook",
    personalNumber: 1002345,
    costCenter: "Delhi",
    department: "IT",
    startDate: new Date('1977-09-24'),
    endDate: new Date,

  }, {
    firstName: "Manuj",
    lastName: "Sharma",
    accountName: "Facebook",
    personalNumber: 1002345,
    costCenter: "Delhi",
    department: "IT",
    startDate: new Date('1977-09-24'),
    endDate: new Date,

  }, {
    firstName: "Manuj",
    lastName: "Sharma",
    accountName: "Facebook",
    personalNumber: 1002345,
    costCenter: "Delhi",
    department: "IT",
    startDate: new Date('1977-09-24'),
    endDate: new Date,

  }, {
    firstName: "Manuj",
    lastName: "Sharma",
    accountName: "Facebook",
    personalNumber: 1002345,
    costCenter: "Delhi",
    department: "IT",
    startDate: new Date('1977-09-24'),
    endDate: new Date('2005-09-23'),

  },];

  DeleteIdentity(MyIdentity: identity): void {
    // filter the identities(all records), just remove the current records
    this.Identities = this.Identities.filter(i => i != MyIdentity) // Take my set of identites (identities), put filter on it, and in filter => take all (i) beside/except the one i was entering/selecting (MyIdentity)
  }
}
