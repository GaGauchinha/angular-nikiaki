import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

//Igual ao antigo

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nikiaki';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUsuarioBoard = false;

  username?: string;
  authService: any;
  storageService: any;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    console.log("ENTROU NO ISLOGGEDIN");
   
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const usuario = this.tokenStorageService.getUsuario();
      console.log('dentro do loggedin', usuario)
      /* 
      this.roles = usuario.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      */
      if(usuario.isAdmin){
        console.log(usuario.isAdmin)
        this.showAdminBoard = true
      } else {
        this.showUsuarioBoard = false
      }
      this.username = usuario.username;
      console.log(usuario)
    }
    }
    logout(): void {
      this.tokenStorageService.signOut();
      window.location.reload();
    }
}
