import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { TokenDto } from 'src/app/models/token-dto';
import { OauthService } from 'src/app/service/oauth.service';
import { TokenDtoService } from 'src/app/service/token-dto.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
    
  loginForm!: FormGroup;
  public socialUser = new SocialUser();
  isLoggedin!: boolean;
  

  title = 'amshf'; 

  constructor(
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService,
    private router:Router,
    private oauthService:OauthService,
    private tokenService:TokenDtoService
  ) { }

  ngOnInit(): void {
   /* this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    */
    
    this.isLoggedin = (this.tokenService.getToken!=null);
    this.socialAuthService.authState.subscribe(
      (data) => {
      this.socialUser = data;
      this.isLoggedin = (this.socialUser != null && this.tokenService.getToken()!= null);
    });

  }

  toggleSidebar(){
      this.toggleSidebarForMe.emit();
  }
  

  loginWithGoogle(): void {    
    //this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);

    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.socialUser = data;
        const tokenGoogle = new TokenDto(this.socialUser.idToken);
        this.oauthService.google(tokenGoogle).subscribe(
          res => {
            this.tokenService.setToken(res.value,this.socialUser.email,this.socialUser.name, this.socialUser.photoUrl);
            this.isLoggedin = true;
            this.router.navigate(["/dashboard"]);
          },
          err => {
            console.log(err);
            this.logOut();
          }
        );
      }
    );
  }

  logOut(): void {
    this.tokenService.logOut();
    this.isLoggedin=false;
    this.toggleSidebar();
    this.socialAuthService.signOut().then(
      data => {
        this.tokenService.logOut();
        this.router.navigate(['']);
        this.isLoggedin=false;
        this.toggleSidebar();
      }
    );    
  }

  getUsuario():string|null{
    if (this.tokenService.getName()!=null){
      return this.tokenService.getName();
    }
    return null;
  }

  getEmail():string|null{
    if (this.tokenService.getEmail()!=null){
      return this.tokenService.getEmail();
    }
    return null;
  }
  getImagen():string|null{
    if (this.tokenService.getPotho()!=null){
      return this.tokenService.getPotho();
    }
    return null;
  }
  
}
