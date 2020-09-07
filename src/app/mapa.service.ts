import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Location 
{
  latitude: string;
  longitude: string;
}

@Injectable()
export class MapaService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get('http://api.ipapi.com/api/check?access_key=69f92aa964c9399007909d616e28ebf8')
  }

}