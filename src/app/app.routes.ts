import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import { GammeslistComponent } from './gammeslist/gammeslist.component';
import { GameprofileComponent } from './gameprofile/gameprofile.component';
import { SearchComponent } from './search/search.component';
import { GenresComponent } from './genres/genres.component';
import { CompanysComponent } from './companys/companys.component';
import { ReleaseDateComponent } from './release-date/release-date.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
    {path: '',redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: HomeComponent},
    {path: 'games', component: GammeslistComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrar', component: RegisterComponent},
    {path: 'games/:slug', component: GameprofileComponent},
    {path: 'genres/:slug', component: GenresComponent},
    {path: 'companys/:slug', component: CompanysComponent},
    {path: 'release/:data', component: ReleaseDateComponent},
    {path: 'userList', component: UserlistComponent},
    {path: 'about', component: AboutComponent},
    {path: 'search', component: SearchComponent}
  ]
  