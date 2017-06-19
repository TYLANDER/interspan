import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

export class HttpService {
    //Get request HTTP service
    static get(url: string, headers: Object = {}): Observable<any> {
        return Observable.ajax({
            url,
            method: 'GET',
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
    //Post request HTTP service
    static post(url: string, body: any, headers = { 'Content-Type': 'application/json' }): Observable<any> {
        return Observable.ajax({
            url,
            method: 'POST',
            body,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
}