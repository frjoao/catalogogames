import { Game, Count, Pulse } from '../models/game.model'
import { Artwork } from '../models/game.model'
import { Injectable } from '@angular/core';
import { FACELIST_API, AUTENTICATION_API } from '../app.api'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'user-key': '41cbf6db092a99939c3923e3f28a8dbb',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': 'true'
  })

};


@Injectable()
export class GammelistService {
  constructor(private http: HttpClient) { };


  games: Game[] = [];
  public totalGames:number;

  newGameInUserList(id: string): Observable<Game[]> {
    return this.http.put<Game[]>(`${AUTENTICATION_API}` + '/users',`where id= "${id}";`, httpOptions);
  }

  getGameBySlug(id: string): Observable<Game[]> {
  
    return this.http.post<Game[]>(`${FACELIST_API}` + '/games',`fields *, involved_companies.id, cover.image_id, genres.name, game_engines.name, game_modes.name,player_perspectives.name,platforms.name, involved_companies.company.name; where slug = "${id}"; `, httpOptions);
  }

  getAllGames(): Observable<Game[]> {
    return this.http.post<Game[]>(`${FACELIST_API}` + '/games',`fields *,genres.id,name,cover.url,cover.image_id;limit 50; sort popularity desc;`, httpOptions);
  }

  getLastPulse(): Observable<Pulse[]> {
    return this.http.post<Pulse[]>(`${FACELIST_API}` + '/pulses',`fields *, website.url;limit 1;`, httpOptions);
  }

  getGamesBySearch(nome: string): Observable<Game[]> {
    return this.http.post<Game[]>(`${FACELIST_API}` + '/games',`fields *,genres.id,name,cover.url,cover.image_id;limit 50; search "${nome}";`, httpOptions);
  }
  
  getGamesByGenre(genre): Observable<Game[]> {
    return this.http.post<Game[]>(`${FACELIST_API}` + '/games',`fields *,genres.id,name,cover.url,cover.image_id;limit 50;where genres.slug = "${genre}"; sort popularity desc;`, httpOptions);
  }
  
  getGamesByCompany(company): Observable<Game[]> {
    return this.http.post<Game[]>(`${FACELIST_API}` + '/games',`fields *,genres.id,name,cover.url,cover.image_id;limit 20;where involved_companies.company.slug= "${company}"; sort popularity desc;`, httpOptions);
  }

  getGamesByReleaseDate(date): Observable<Game[]> {
    return this.http.post<Game[]>(`${FACELIST_API}` + '/games',`fields *,name,cover.url,cover.image_id;limit 50;where ${date}; sort popularity desc;`, httpOptions);
  }
  
  getCompanyNameBySlug(company): Observable<Game[]> {
    return this.http.post<Game[]>(`${FACELIST_API}` + '/companies',`fields *, logo.image_id ;limit 10;where slug= "${company}";`, httpOptions);
  }
    
  getGenreNameBySlug(genre): Observable<Game[]> {
    return this.http.post<Game[]>(`${FACELIST_API}` + '/genres',`fields *;limit 10;where slug= "${genre}";`, httpOptions);
  }

  getArtWork(ids): Observable<Artwork[]> {
    return this.http.post<Artwork[]>(`${FACELIST_API}` + '/covers',`fields *; where id = (${ids});`, httpOptions);
  }

  count(param): Observable<Count[]> {
    return this.http.post<Count[]>(`${FACELIST_API}` + '/'+param+'/count',`fields *;`, httpOptions);
  }

  getGameByPopularity(): Observable<Game[]> {
    return this.http.post<Game[]>(`${FACELIST_API}` + '/games',`fields name;limit 1; sort popularity desc;`, httpOptions);
  }

  getLastReleaseGame(dtaAtual): Observable<Game[]> {
    return this.http.post<Game[]>(`${FACELIST_API}` + '/games',`fields name, first_release_date; sort first_release_date desc; limit 1; where first_release_date > 1558051200 & first_release_date < ${dtaAtual};`, httpOptions);
  }

  

}