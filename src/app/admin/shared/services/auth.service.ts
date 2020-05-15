import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private  http: HttpClient) {
    }

    get token(): string {
        return '';
    }

    login(user: User): Observable<any> {
        return this.http.post( `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`, user)
            .pipe(
                tap(this.setToken)
            );
    }

    logout() {

    }

    isAuthenticate(): boolean {
        return !!this.token;
    }

    private setToken(response) {
        console.log(response);
    }

}