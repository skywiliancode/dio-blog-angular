import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent implements OnInit{

  @Input()id: string = '0'
  @Input()photoCover: string = ''
  @Input()cardTitle: string = ''
  @Input()cardDescription: string = ''


  ngOnInit(): void {
  }


}
