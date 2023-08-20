import { Component } from '@angular/core';
import { NameFrequency } from './name-frequency';
import { NamesService } from './names.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NamesService],
})
export class AppComponent {

  nameFrequency: NameFrequency | undefined;

  constructor(
    private namesService: NamesService,
  ){}

  onSubmit(name: string) {
    console.log(`AppComponent: onSubmit(${name})`)
    this.namesService.getNameFrequency(name).subscribe(nf => this.nameFrequency = nf)
  }
}
