import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent implements OnInit{

  @Input()id: string = '0'
  @Input()photoCover: string = ''
  @Input()cardTitle: string = ''

  ngOnInit(): void {
  }


}
