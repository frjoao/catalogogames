import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Md5 } from 'ts-md5/dist/md5';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'
import { AUTENTICATION_API } from 'src/app/app.api';
import { Game } from '../models/game.model';
import { gamesAdicionados } from '../models/gamesAdicionados.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  private currentUser: User
  public totalUsers:number;

  constructor(private http:HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('u'))

    if(this.currentUser==null){
      this.guestUser()
    }
    this.qntdeUsuarios()
   }

  registrarPost(user:User):Observable<User>{
    user.password = Md5.hashStr(user.password).toString();
    return this.http.post<User>(`${AUTENTICATION_API}/users`,user);
  }

  
  addGameMyList(game:Game[], user):Observable<gamesAdicionados>{
    console.log(game[0])
    const data = {
      userId:user,
      gamesAdicionados:game[0]
    }
    return this.http.post<gamesAdicionados>(`${AUTENTICATION_API}/gamesAdicionados`,data);
  }

  
  myList(user):Observable<gamesAdicionados[]>{

    return this.http.get<gamesAdicionados[]>(`${AUTENTICATION_API}/gamesAdicionados?userId=${user}`);
  }
  

  registrar(user:User){
    this.registrarPost(user).subscribe(
      data => {
        this.currentUser = data;
        localStorage.setItem('u',JSON.stringify(this.currentUser));
      }
    )
    alert('Seja bem vindo ao nosso site ' + user.name)
  }

  guestUser(){
    this.currentUser = {
      "id":0,
      "name":"Usuário Não Registrado",
      "email":"",
      "password":"",
      "meusJogos":[]
      
    }
  }

  logout(){
    localStorage.removeItem('u');
    this.guestUser();
  }

  getCurrentUser():User{
    return this.currentUser;
  }

  isLogged(){
    if(localStorage.getItem('u')!=null){
      return true;
    }else{
      return false;
    }
  }

  qntdeUsuarios() {
    this.http.get<User>(`${AUTENTICATION_API}/users`).subscribe(
      data =>{
        this.totalUsers = Object(data).length;        
      }
    )
     
  }

  private getUserByLogin(email:String):Observable<User>{
    return this.http.get<User>(`${AUTENTICATION_API}/users?email=${email}`)
  }


  login(email:String, password:string){

    this.getUserByLogin(email).subscribe(
      data=>{
        //Verificar se veio conteúdo
        if(data){
          
          //Verificar se a senha é igual
          password = Md5.hashStr(password).toString();
          
          if(data[0].password===password){
            this.currentUser = data[0];
            localStorage.setItem('u',JSON.stringify(this.currentUser));
          }
        }
      }
    )
    this.qntdeUsuarios()
    alert('Seja bem vindo novamente' )

    
  }
}
