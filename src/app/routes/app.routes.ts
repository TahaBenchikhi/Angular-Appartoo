import { RouterModule, Routes } from '@angular/router';
import { FriendComponent } from '../friend/friend.component';
import { ProfilComponent } from '../profil/profil.component';
import { AppGuard } from '../guard/app.guard';
import { LoginComponent } from '../login/login.component';
export const APP_ROUTES: Routes = [
  { path: 'friends', canActivate: [AppGuard], component: FriendComponent },
  { path: 'profil', canActivate: [AppGuard], component: ProfilComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
