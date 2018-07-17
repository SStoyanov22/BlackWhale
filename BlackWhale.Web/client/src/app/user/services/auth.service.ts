import {Injectable} from "@angular/core"
import { HttpClient} from "@angular/common/http"
import { User } from "../../data/models/user";

@Injectable()

export class AuthService{
    currentUser: User;
    constructor(private http : HttpClient) {

    }

    login(email : string, password : string){
        let data = {email : email, password : password}
        this.http.post('/login', data);
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}