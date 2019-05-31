import { Component } from '@angular/core';
import * as legacyScript from './legacy_script';

console.log(legacyScript);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repro-app';
}
