import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [] ;
  public eventosFiltrados: any = [];
  widthImg: number = 100;
  marginImg: number = 2;
  showImg : boolean = false;
  private _filterList: string='';

  public get filterList(): string {
    return this._filterList;
  }
  public set filterList(value: string){

    this._filterList = value;
    this.eventosFiltrados = this.filterList ? this.filterEvento(this._filterList) : this.eventos;
  }

  filterEvento(filterBy: string): any {

    filterBy = filterBy.toLocaleLowerCase();
    return this.eventos.filter(
      (evento :any) => evento.tema.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  changeImg(){
    this.showImg = !this.showImg;
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/Eventos').subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error => console.log(error)
      );
  }
}


/*
Diretivas estruturais
ngfor
ngif
ngShow
Binding e interpolações
aqui você pode escrever javascript
{{eventos[0].tema + 1}}

*/
