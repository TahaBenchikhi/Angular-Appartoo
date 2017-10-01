import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './routes/app.routes';
import { AppGuard } from './guard/app.guard';
import { FriendComponent } from './friend/friend.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { MyfriendComponent } from './friend/myfriend/myfriend.component';
import { NewfriendComponent } from './friend/newfriend/newfriend.component';
@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    LoginComponent,
    ProfilComponent,
    MyfriendComponent,
    NewfriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true }
    )
  ],
  providers: [AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
