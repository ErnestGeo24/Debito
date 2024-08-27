import { Component, OnInit } from '@angular/core';
import { Song } from './song.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cognome-canzoniere';

  // Dati della canzone inseriti dall'utente
  song: Song = new Song('', new Date(), 0);

  // Vettore che contiene tutte le canzoni inserite
  songList: Song[] = [];

  // Metodo per salvare la canzone e aggiungerla alla lista
  addSong() {
    const newSong = new Song(this.song.title, this.song.data_uscita, this.song.durata);
    this.songList.push(newSong);
    console.log(this.songList);
    this.song = new Song('', new Date(), 0);
  }

  // Metodo che viene chiamato all'avvio dell'applicazione
  ngOnInit() {
    // Simulazione del caricamento di dati all'avvio dell'applicazione
    this.loadInitialSongs();
  }

  // Metodo per caricare i dati iniziali
  loadInitialSongs() {
    this.songList = [
      new Song('Song One', new Date('2022-01-01'), 4),
      new Song('Song Two', new Date('2023-05-15'), 3),
      new Song('Song Three', new Date('2021-11-20'), 5)
    ];

    // Visualizza i dati caricati sulla console
    console.log('Dati iniziali caricati:', this.songList);
  }
}
