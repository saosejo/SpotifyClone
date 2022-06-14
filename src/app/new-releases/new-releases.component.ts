import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-new-releases-component',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  releases: any[];
  subscribe: any; 
  constructor(private musicDataService : MusicDataService) {this.releases = []}

  ngOnInit(): void {
    this.subscribe = this.musicDataService.getNewReleases().subscribe((data)=>{
      this.releases=data.albums.items;
    }) 
  }
  

}
