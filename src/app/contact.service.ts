import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ContactService {
  

  
  getDetails(){
    return [{
      office:"Puttur Office",
      address:"Opposite GL Complex",
      mobile_number:9632669141
    },
    {
      office:"Udupi Office",
      address:"Opposite JK Complex",
      mobile_number:9632699141
    },
    {
      office:"Mangalore Office",
      address:"Opposite City Centre",
      mobile_number:9632909141
    },
    {
      office:"Bangalore Office",
      address:"Opposite Veena Stores",
      mobile_number:9632669101
    },
    {
      office:"Sullia Office",
      address:"Opposite Bus Stand",
      mobile_number:9602969141
    },
  ]
  }

  
}