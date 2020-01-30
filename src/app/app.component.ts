import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { AppConfigService } from './providers/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private config: AppConfigService) {
    console.log(this.config.getConfig());
    //console.log(environment.baseUrl);
    //console.log(environment.config.tenant);
  }
  title = 'dynamic-config-demo';
}
