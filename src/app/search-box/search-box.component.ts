import { Component, Input } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { NamesService } from '../names.service';
import { NameFrequency } from '../name-frequency';



@Component({
  selector: 'app-search-box',
  // standalone: true,
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  searchForm = this.formBuilder.group({
    name: '',
  });

  @Input() onSubmit!: (name: string) => void ;

  constructor(
    private formBuilder: FormBuilder,
    // private namesService: NamesService,
  ) {}

  onSubmitForm() {
    const name = this.searchForm.value.name;

    if (!name) return;

    // console.log('porra', this.namesService)

    this.onSubmit(name);
  }
}
