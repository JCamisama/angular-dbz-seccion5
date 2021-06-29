import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {


  constructor(
    private gifsService: GifsService ) { }

  get historial() {
    return [...this.gifsService.historial];
  }

  buscar(termino: string){
    console.log(termino);
    this.gifsService.buscarGifs(termino);
  }
}


// export class SidebarComponent {

//   public historical: string[];


//   constructor(
//     private _gifsService: GifsService
//   ) {
//      this.historical = [];
//      this.getHistorical();
//      }


//   public getHistorical(): void {
//     this.historical = [...this._gifsService.historial];
//   }

// }
