import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/data-fake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit{
  photoCover: string = ''
  contentTitle: string = ''
  contentDescription = ''
  id: number = 0

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe( value => this.id = value['id'])
    this.setValuesToComponent(this.id)
  }

  // Definindo as variáveis do componente
  setValuesToComponent(id: number){
    const result = dataFake.filter(article => article.id == id)[0]

    this.photoCover = result.photo
    this.contentTitle = result.title
    this.contentDescription = result.description
  }
}
