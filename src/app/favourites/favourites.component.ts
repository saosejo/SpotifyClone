import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { mergeMap, Observable } from 'rxjs';
import { MusicDataService } from '../music-data.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites : Array<any> | undefined;
  constructor(private musicDataService:MusicDataService, private matSnackBar:MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    this.musicDataService.getFavourites().subscribe(data=>{
      this.favourites= data.tracks;
    })
  }
  removeFromFavourites(id: any) {
    this.musicDataService.removeFromFavourites(id).subscribe((data) => {
      this.favourites = data.tracks;
    });
    this.matSnackBar.open('Removing from Favourites...', 'Done', {
      duration: 15000,
    });
  }

}
