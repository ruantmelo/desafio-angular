import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TableNameFrequencyComponent } from './table-name-frequency/table-name-frequency.component';


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'frequencia', component: TableNameFrequencyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
