import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShortenerService } from '../shortener.service';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  @Input() longUrl:string="";
  shortUrl:string="";
  urldata ={
    "longurl":"",
    "shorturl":"",
    "count":0
  };

  constructor(private urlService:ShortenerService, private router:Router) { }

  ngOnInit(): void {
  }

  save(long:string, short:string){
    this.urldata={
      "longurl":long,
      "shorturl":short,
      "count":0
    };
    this.urlService.saveUrl(this.urldata).subscribe(()=>{
    });
  }

  shorten(){
    var chars=this.longUrl.slice(8);
    var charLength=chars.length;

    for(var i=0; i<4; i++)
    {
      this.shortUrl += chars.charAt(Math.floor(Math.random()*charLength));
    }
    this.save(this.longUrl,this.shortUrl)
  }
}
