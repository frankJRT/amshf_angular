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
  socialUser!: SocialUser;
  isLoggedin: boolean = false;  

  title = 'amshf'; 

  constructor(
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService,
    private router:Router,
    private oauthService:OauthService,
    private tokenService:TokenDtoService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    
    
    
    this.socialAuthService.authState.subscribe((data) => {
      this.socialUser = data;
      this.isLoggedin = (this.socialUser != null && this.tokenService.getToken()!= null);   
      //console.log(this.socialUser);
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
            this.tokenService.setToken(res.value);
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
    this.socialAuthService.signOut().then(
      data => {
        this.tokenService.logOut();
        this.router.navigate(['']);
        this.isLoggedin=false;
        this.toggleSidebar();
      }
    );    
  }
}
