import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  @Input()
  email: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  doLogin() {
   if (this.email === 'mohamedkhayreddine.allala@esprit.tn' && this.password === 'test1234') {
     this.router.navigateByUrl('conditions');
   } else {
     console.log('fail');
   }
  }

}
