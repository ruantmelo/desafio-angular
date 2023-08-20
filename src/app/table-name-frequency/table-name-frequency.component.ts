import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NameFrequency } from '../name-frequency';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-table-name-frequency',
  templateUrl: './table-name-frequency.component.html',
  styleUrls: ['./table-name-frequency.component.scss']
})
export class TableNameFrequencyComponent implements OnChanges{
  @Input() nameFrequency: NameFrequency | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if ('nameFrequency' in changes) {
      const nameFrequency = changes['nameFrequency'].currentValue as NameFrequency | undefined;
      if (nameFrequency) {
        console.log(`TableNameFrequencyComponent: ngOnChanges(${nameFrequency})`)
      }
    }
  }
}
