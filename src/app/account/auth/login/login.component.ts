import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';

// Libs
import {
  CookieService
} from 'ngx-cookie-service';
import Swal from 'sweetalert2'

// Services
import {
  AuthService
} from 'src/app/core/services/auth/auth.service';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';

type UserFields = 'email' | 'password';
type FormErrors = {
  [u in UserFields]: string
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // User
  userData: any;

  public newUser = false;
  public loginForm: FormGroup;
  public formErrors: FormErrors = {
    'email': '',
    'password': '',
  };
  public errorMessage: any;
  public loginButton = false;
  public errorGeneral = '';

  email: any;
  password: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
    private authService: AuthService,
    private firestoreService: FirestoreService,
  ) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['./admin']);
  }

  handleLogin() {
    this.router.navigate(['./admin']);
    /*
    let session = this.authService.login({"email" : this.email,"password" : (this.password)});


    this.authService.login({"email" : this.email,"password" : (this.password)})
      .subscribe(
        resp=>{
            let respueta:any = resp;
            if(respueta.msj!=""){
              this.errorAlert('Error Login', respueta.msj);
              return;
            }
            if(respueta.data.statusAccount=="Congelada"){
              this.errorAlert('Error Login', "Cuenta congelada");
              return;
            }
            if(respueta.data.statusAccount=="Activa"){
              alert("Cuanta activa");
              this.router.navigate(['./admin']);
            }
            
        },
        err=> {
          console.log(err);
          this.errorAlert('Error Login', err.message);
        }
        
      );
      */
  }

  async handleCookieAsigned(email) {
    this.cookieService.set('email', email);
    console.log(email);
    await this.firestoreService.getUser(email).then(info => {
      info.docs.map(doc => {
        const userData = doc.data();
        console.log(userData);

        if (userData.status === 1) {
          if (userData.login === 0) {
            this.userData = userData;
            console.log(this.userData);
            this.handleAssginedCookies(userData);
          } else {
            this.handleAssginedCookies(userData);
          }
        } else {
          this.handleFirebaselogout();
          this.userDisable();
          this.loginButton = false;
        }
      });
    });
  };

  handleAssginedCookies(userData){
    this.cookieService.set('name', `${userData.firstName}`);
    this.cookieService.set('roleType', userData.roleType);
    this.cookieService.set('uid', userData.uid);
    if (userData.roleType === 1) this.router.navigate(['./admin']);
    // else if (userData.roleType === 2) this.router.navigate(['./admin']);
    // else if (userData.roleType === 3) this.router.navigate(['./user']); 
    // else if (userData.roleType === 4) this.router.navigate(['./technical']); 
    else this.handleFirebaselogout();
  }


  userDisable() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Parece que tu usuario no se encuentra activo.',
      footer: '<a href>Contactar con soporte.</a>'
    })
  }

  errorAlert(title: string, body: string) {
    Swal.fire(
      title,
      body,
      'error'
    ).then((resp => {
      this.loginButton = false;
    }))
  }

  handleFirebaselogout() {

  }

}