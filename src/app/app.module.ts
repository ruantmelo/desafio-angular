import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TableNameFrequencyComponent } from './table-name-frequency/table-name-frequency.component';
import { NamesService } from './names.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    TableNameFrequencyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [NamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
