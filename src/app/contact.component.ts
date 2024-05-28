import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
  //styleUrls: ['./dashboard.component.css']
})
export class ContactComponent implements OnInit{
  details:any[]=[];
  constructor(private contactService:ContactService){}
  
    ngOnInit(): void {
      this.details=this.contactService.getDetails();
        
    }



}