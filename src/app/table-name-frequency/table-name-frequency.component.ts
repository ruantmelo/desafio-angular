import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NameFrequency } from '../name-frequency';
import { NameService } from '../name.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table-name-frequency',
  templateUrl: './table-name-frequency.component.html',
  styleUrls: ['./table-name-frequency.component.scss']
})
export class TableNameFrequencyComponent{
  nameFrequency: NameFrequency | undefined;
  name: string | null = null;
  isLoading = true;

  total = 0;

  constructor(
    private route: ActivatedRoute,
    private namesService: NameService,
    private router: Router
  ){}

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {
      const name = params.get('q') as string;
      this.name = name;
      this.namesService.getNameFrequency(name).subscribe(nameFrequency => {
        this.nameFrequency = nameFrequency;
        this.total = nameFrequency?.res.reduce((acc, cur) => acc + cur.frequencia, 0) || 0;
        this.isLoading = false;
      })
      // console.log(`TableNameFrequencyComponent: ngOnInit(${name})`)
    }
    )
  }

  backToSearch(): void {
    this.router.navigate(['/']);
  }
}
