import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';   
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { GammeslistComponent } from './gammeslist/gammeslist.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { GameprofileComponent } from './gameprofile/gameprofile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

import { HttpClientModule } from '@angular/common/http';

import { GammelistService } from './service/gammelist.service';
import { GenresComponent } from './genres/genres.component';
import { CompanysComponent } from './companys/companys.component';
import { ReleaseDateComponent } from './release-date/release-date.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    GammeslistComponent,
    HomeComponent,
    GameprofileComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    GenresComponent,
    CompanysComponent,
    ReleaseDateComponent,
    UserlistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [GammelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
