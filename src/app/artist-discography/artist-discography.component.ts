import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-artist-discography-component',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {

  id:any;
  artist:any | undefined;
  album:any | undefined;
  constructor(private musicDataService:MusicDataService, private route:ActivatedRoute) {  }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.musicDataService.getArtistById(this.id).subscribe(data=>{
      return(this.artist=data)
    });
    this.musicDataService.getAlbumsByArtistId(this.id).subscribe((data) => {
      return (this.album = data.items.filter((curValue, index, self) => self.findIndex(t => t.name.toUpperCase() === curValue.name.toUpperCase()) === index));
    });
    
  }

}
