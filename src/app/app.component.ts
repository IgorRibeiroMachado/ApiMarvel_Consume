import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Marvel Api';

  constructor(
    private router: Router
  ) {}

  private firebaseConfig = {
    apiKey: "AIzaSyCLzAjIHGE8HosLmqL0PJLx0qCJpi2AanU",
    authDomain: "marvelapi-aa9ae.firebaseapp.com",
    projectId: "185741167344",
  }

  private app = initializeApp(this.firebaseConfig);
  private auth = getAuth();

  user: any;
  autenticado: any;

  public login(providerName: string) {
    let provider: any;
    if (providerName == 'google')
      provider = new GoogleAuthProvider();
    else if (providerName == 'facebook')
      provider = new FacebookAuthProvider();

    signInWithPopup(this.auth, provider)
    .then((result) => {
      this.user = result.user;
      this.autenticado = this.auth.currentUser;
      this.router.navigate(['/home']);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`
      Code ${errorCode}!
      Message: ${errorMessage}
      `)
    });
  }

  deslogar() {
    signOut(this.auth).then(() => {
      console.log('Deslogado');
      this.autenticado = this.auth.currentUser;
      this.router.navigate(['/test']);
    }).catch((error) => {
      console.log(error);
    })
  }
}
