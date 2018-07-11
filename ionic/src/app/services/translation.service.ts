import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import * as cnf from '../config';

@Injectable()
export class TranslationService {
  token: string = "";
  constructor(public http: HttpClient) {
    this.token = localStorage.getItem('api_token');
  }

  /**
   * Load basic information from server
   * @return Observable<any>
   */
  getBasicInfo(): Observable<any> {
    return this.http.get<any>(cnf.HOST + '/api/translation/basic_info');
  }

  translate(translation: any) {
    return this.http.get<any>(cnf.HOST + '/api/translation/translate?token=' + this.token
      + '&from_language=' + (translation.from_language ? translation.from_language : '')
        + '&to_language=' + (translation.to_language ? translation.to_language : '')
        + '&word=' + (translation.word ? translation.word : '')
    );
  }

  /**
   * Invoke API service to create or update word.
   * @param word any
   */
  saveWord(word: any): Observable<any> {
    return this.http.post<any>(cnf.HOST + "/api/translation/save_word?token=" + this.token, word);
  }
}