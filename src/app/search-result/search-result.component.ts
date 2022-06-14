import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  results : any;
  searchQuery : string | null = '';

  constructor(private route:ActivatedRoute, private musicDataService:MusicDataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params : Params) =>{ 
      this.searchQuery=params['q'];
    })

    this.musicDataService.searchArtists(this.searchQuery).subscribe(data =>{
      this.results=data.artists.items.filter((artist: any) => artist.images.length > 0)
    })
  }

}
