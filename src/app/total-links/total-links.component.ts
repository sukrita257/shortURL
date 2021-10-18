import { Component, OnInit } from '@angular/core';
import { Url } from '../model';
import { ShortenerService } from '../shortener.service';

@Component({
  selector: 'app-total-links',
  templateUrl: './total-links.component.html',
  styleUrls: ['./total-links.component.css']
})
export class TotalLinksComponent implements OnInit {
  links:Array<Url>=[];
  linkData={
    "longurl":"",
    "shorturl":"",
    "count":0
  }

  constructor(private userService:ShortenerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.userService.getAll().subscribe((data)=>{
      this.links=data;
      console.log(this.links);
    })
  }

  changeCount(id:number|undefined){
    this.userService.getAll().subscribe((data)=>{
      data.forEach((element)=>{
        if(element.id===id)
        {
          this.linkData={
            "longurl":element.longurl,
            "shorturl":element.shorturl,
            "count":element.count + 1
          }
          console.log(this.linkData.count);
          this.userService.update(this.linkData,id).subscribe((data)=>{
            this.ngOnInit();
          });
        }
      })
    })
  }
}
