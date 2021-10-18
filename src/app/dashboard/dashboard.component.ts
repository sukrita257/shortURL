import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShortenerService } from '../shortener.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id: number=0
  links=0;
  clicks=0;

  constructor(private activeRoute: ActivatedRoute, private userService:ShortenerService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.userService.getUserByID(paramsData.id).subscribe((data) => {
      })
    })

    this.userService.getAll().subscribe((data)=>{
      data.forEach((element)=>{
        this.links += 1;
        this.clicks += element.count;
      })
    })
  }    
}
