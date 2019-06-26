import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from 'src/app/service/authenticator.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuSelectedName:string = ''
  menuSelected:any[]

  menu:any[]=[{
    href:'/games',
    name:'Lista de Jogos'
  },
  {
    href:'/search',
    name:'Pesquisar'
  },
  {
    href:'',
    name:'Generos',
    subMenu:[
      {
        href:'/genres/adventure',
        name:'Aventura'
      },
      {
        href:'/genres/strategy',
        name:'Estratégia'
      },
      {
        href:'/genres/role-playing-rpg',
        name:'RPG'
      },
      {
        href:'/genres/indie',
        name:'Indie'
      },
      {
        href:'/genres/sport',
        name:'Esportes'
      },
      {
        href:'/genres/shooter',
        name:'Tiro'
      },
      {
        href:'/genres/tactical',
        name:'Táticos'
      },
      {
        href:'/genres/fighting',
        name:'Luta'
      },
      {
        href:'/genres/music',
        name:'Musicais'
      },
      {
        href:'/genres/simulator',
        name:'Simuladores'
      },
      {
        href:'/genres/racing',
        name:'Corrida'
      },
      {
        href:'/genres/arcade',
        name:'Arcade'
      },
    ]
  },
  {
    href:'',
    name:'Empresas',
    subMenu:[
      {
        href:'/companys/activision',
        name:'Activision'
      },
      {
        href:'/companys/electronic-arts',
        name:'EA'
      },
      {
        href:'/companys/ubisoft',
        name:'Ubisoft'
      },
      {
        href:'/companys/valve-corporation',
        name:'Valve'
      },
    ]
  },  
  {
    href:'',
    name:'Data de Lançamento',
    subMenu:[
      {
        href:'/release/2015',
        name:'> 2015'
      },
      {
        href:'/release/2010_2015',
        name:'< 2015'
      },
      {
        href:'/release/2005_2010',
        name:'< 2010'
      },
      {
        href:'/release/2005',
        name:'< 2005'
      },
    ]
  },
  {
    href:'/about',
    name:'Sobre'
  },
  {
    href:'/userList',
    name:'Meus Jogos',
    logado: true
  },
  {
    href:'/login',
    name:'Login',
    logado: false
  },
  {
    href:'/registrar',
    name:'Registrar',
    logado: false
  },
  {
    href:'/dashboard',
    name:'Logout',
    logado: true
  },
  
]


  selectionMenu(item:any, nameParent:string){    
    if(item!==undefined){
      this.menuSelected = item
      this.menuSelectedName = nameParent  
    }  
  }

  constructor(private authService:AuthenticatorService) { }

  ngOnInit() {
    this.menuSelected = this.menu

  }

  logout(){
    this.authService.logout()
  }

}
