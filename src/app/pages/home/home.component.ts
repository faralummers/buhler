import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MachinesInterface } from '../../models/machines.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _unsubscribe$: Subject<void> = new Subject<void>();
  public machinesData!: Observable<MachinesInterface[] | null>;
  public date: Date = new Date();

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this._getMachinesData();
    this._getRealTimeDate();
  }

  _getMachinesData(): void {
    this.machinesData = this.homeService.getMachinesData();
  }

  _getRealTimeDate(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
