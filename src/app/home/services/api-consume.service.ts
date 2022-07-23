import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {

  private apiKey = '2677590116182dd88074640a00c1e620'
  private ts = '1';
  private hash = '9bf5f40e3051f0fee3e5ce546ee43c8c';

  constructor(private httpClient: HttpClient) { }

  public getCharacters(offset: Number, limit: Number) {
    const url = 'https://gateway.marvel.com/v1/public/characters';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('ts', this.ts);
    queryParams = queryParams.append('apikey', this.apiKey);
    queryParams = queryParams.append('hash', this.hash);
    queryParams = queryParams.append('offset', `${offset}`);

    return this.httpClient.get<any>(url, { params: queryParams });
  }

  public getCharactersByName(name: string) {
    name = name.replace(/\s/g, '%20');
    const url = 'https://gateway.marvel.com/v1/public/characters';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('ts', this.ts);
    queryParams = queryParams.append('apikey', this.apiKey);
    queryParams = queryParams.append('hash', this.hash);
    queryParams = queryParams.append('nameStartsWith', name);

    return this.httpClient.get<any>(url, { params: queryParams });
  }

  public getSeries(offset: Number, limit: Number) {
    const url = 'https://gateway.marvel.com/v1/public/series';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('ts', this.ts);
    queryParams = queryParams.append('apikey', this.apiKey);
    queryParams = queryParams.append('hash', this.hash);
    queryParams = queryParams.append('offset', `${offset}`);

    return this.httpClient.get<any>(url, { params: queryParams });
  }

  public getSeriesByTitle(title: string) {
    const url = 'https://gateway.marvel.com/v1/public/series';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('ts', this.ts);
    queryParams = queryParams.append('apikey', this.apiKey);
    queryParams = queryParams.append('hash', this.hash);
    queryParams = queryParams.append('titleStartsWith', title);

    return this.httpClient.get<any>(url, { params: queryParams });
  }

  public getSeriesById(id: string) {
    const url = `https://gateway.marvel.com/v1/public/series/${id}`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("ts", this.ts);
    queryParams = queryParams.append("apikey", this.apiKey);
    queryParams = queryParams.append("hash", this.hash);

    return this.httpClient.get<any>(url, { params: queryParams });
  }

  public getSeriesByIdCharacter(id: string) {
    const url = `https://gateway.marvel.com/v1/public/series/${id}/characters`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("ts", this.ts);
    queryParams = queryParams.append("apikey", this.apiKey);
    queryParams = queryParams.append("hash", this.hash);

    return this.httpClient.get<any>(url, { params: queryParams });
  }

  public getSeriesByIdCharacterName(id: String, characterName: string) {
    characterName = characterName.replace(/\s/g, '%20');
    const url = `https://gateway.marvel.com/v1/public/series/${id}/characters`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("ts", this.ts);
    queryParams = queryParams.append("apikey", this.apiKey);
    queryParams = queryParams.append("hash", this.hash);
    queryParams = queryParams.append("nameStartsWith", characterName);

    return this.httpClient.get<any>(url, { params: queryParams });
  }
}
