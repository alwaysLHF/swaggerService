import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private httpClient: HttpClient) { }

  createNewProject(reqBody) {
    const reqUrl = 'api/newproject';
    return this.httpClient.post(reqUrl, reqBody);
  }

  getProjectList(reqBody) {
    const reqUrl = 'api/projectlist';
    return this.httpClient.post(reqUrl, reqBody);
  }

  addMember(reqBody) {
    const reqUrl = 'api/addmember';
    return this.httpClient.post(reqUrl, reqBody);
  }

  login(reqBody) {
    const reqUrl = 'api/login';
    return this.httpClient.post(reqUrl, reqBody);

  }

  register(reqBody) {
    const reqUrl = 'api/register';
    return this.httpClient.post(reqUrl, reqBody);

  }
}
