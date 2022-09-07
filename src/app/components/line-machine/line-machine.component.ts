import { Component, Input, OnInit } from '@angular/core';
import { MachinesInterface } from '../../models/machines.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-line-machine',
  templateUrl: './line-machine.component.html',
  styleUrls: ['./line-machine.component.scss']
})
export class LineMachineComponent implements OnInit {
  @Input() machinesData!: MachinesInterface[] | null;
  @Input() hasIcon = false;

  constructor() { }

  ngOnInit(): void {
  }

}
