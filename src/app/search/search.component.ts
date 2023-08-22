import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  // standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required])
  }
  );

  isSubmitted = false;

  constructor(
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    // private namesService: NamesService,
  ) {}

  onSubmitForm() {
    this.isSubmitted = true;
    const name = this.searchForm.value.name;

    if (!name) return;

    this.router.navigate(
      ['/frequencia'],
      { queryParams: { q: name} }
    );
  }

  get name() {
    return this.searchForm.get('name') as AbstractControl;
  }

  clearForm(){
    this.searchForm.reset();
    this.searchForm.markAsUntouched();
    this.isSubmitted = false;
  }
}
