// import { Component, OnInit } from '@angular/core';
// import { AlarmService } from '../data.service';
// import { Alarm } from '../app.model';

// @Component({
//   selector: 'app-read',
//   templateUrl: './read.component.html',
//   styleUrls: ['./read.component.css']
// })

// export class ReadComponent {
//    alarms: Alarm[] = []; // Initialize with an empty array
//  public databaseData: any;

//   constructor(private AlarmService: AlarmService) {}

//   ngOnInit(): void {
//     this.AlarmService.getData().subscribe(data => {
//       this.databaseData = data;
//     });
//   }
//  selectedItem: any;
//   showDetails(item: any): void {
//     this.databaseData.forEach(data => {
//       if (data !== item) {
//         data.showDetails = false; // Hide details of other rows
//       }
//     });
//     item.showDetails = !item.showDetails; // Toggle details for the clicked row
//     this.selectedItem = item.showDetails ? item : null;
// }
//  editAlarm(alarm: Alarm): void {
//     // Here you can implement logic to open an edit form or dialog for the selected alarm
//     console.log('Editing alarm:', alarm);
//   }

//   deleteAlarm(id: number): void {
//     if (confirm('Are you sure you want to delete this alarm?')) {
//       this.AlarmService.deleteAlarm(id).subscribe(() => {
//         // Remove the deleted alarm from the local array
//         this.alarms = this.alarms.filter(a => a.id !== id);
//         console.log('Alarm deleted successfully');
//       }, error => {
//         console.error('Error deleting alarm:', error);
//         // Optionally, display an error message to the user
//       });
//     }
// }}
import { Component, OnInit } from '@angular/core';
import { Alarm } from '../app.model';
import { AlarmService } from '../data.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class AlarmComponent  implements OnInit {
  alarms: Alarm[] = []; // Initialize with an empty array
  selectedAlarm: Alarm | null = null; // Initialize selectedAlarm as null
  showEditForm = false;
  constructor(private AlarmService: AlarmService) { }

  ngOnInit(): void {
    this.loadAlarms();
  }

  loadAlarms(): void {
    this.AlarmService.getAlarms().subscribe(
      (alarms: Alarm[]) => {
        this.alarms = alarms;
        console.log('Alarms:', alarms); // Add a console.log statement to check if alarms are received
      },
      (error) => {
        console.error('Error loading alarms:', error);
      }
    );
  }
  

  editAlarm(alarm: Alarm): void {
    this.selectedAlarm = alarm;
    this.showEditForm = false; // Close edit form when selecting a new alarm
  }

  toggleEditForm(): void {
    this.showEditForm = !this.showEditForm;
  }

  submitEditForm(): void {
    if (this.selectedAlarm) {
      const scrollPosition = window.pageYOffset;
      this.AlarmService.updateAlarm(this.selectedAlarm).subscribe(
        (updatedAlarm: Alarm) => {
          const index = this.alarms.findIndex(a => a.id === updatedAlarm.id);
          if (index !== -1) {
            this.alarms[index] = updatedAlarm;
          }
          console.log('Alarm updated successfully');
          this.selectedAlarm = null;
          this.showEditForm = false;
          window.scrollTo(0, scrollPosition); // Maintain scroll position
        },
        (error) => {
          console.error('Error updating alarm:', error);
        }
      );
    }
  }
  

  cancelEdit(): void {
    this.selectedAlarm = null;
    this.showEditForm = false;
  }


  deleteAlarm(id: number): void {
    if (confirm('Are you sure you want to delete this alarm?')) {
      this.AlarmService.deleteAlarm(id).subscribe(() => {
        // Remove the deleted alarm from the local array
        this.alarms = this.alarms.filter(a => a.id !== id);
        console.log('Alarm deleted successfully');
      }, error => {
        console.error('Error deleting alarm:', error);
        // Optionally, display an error message to the user
      });
    }
  }
}
