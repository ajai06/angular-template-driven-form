import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aj Studies';

  topics = [
    'Angular',
    'React',
    'Vue'
  ];

  errorMsg = '';

  userModel = new User ('ajai', 'test@a.com', 99999 , '' , 'morning' , true);

  constructor(private enrollment: EnrollmentService) {

  }

  onSubmit() {
    this.enrollment.enroll(this.userModel).subscribe(
      data => console.log('success' , data),
      error => this.errorMsg = error.statusText

    );
  }
}
