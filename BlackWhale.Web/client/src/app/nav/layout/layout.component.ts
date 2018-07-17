import {Component} from "@angular/core"
import { AuthService } from "../../user/services/auth.service";

@Component({
    selector : 'layout',
    templateUrl : './layout.component.html'
})
export class LayoutComponent{
    constructor(private auth : AuthService) {
        
    }
}