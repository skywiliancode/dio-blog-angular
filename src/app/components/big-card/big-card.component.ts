import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent implements OnInit{

  @Input()photoCover: string = ''
  @Input()cardTitle: string = ''
  @Input()cardDescription: string = ''


  ngOnInit(): void {
  }


}
