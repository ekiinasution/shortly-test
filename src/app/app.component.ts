import { Component, OnInit } from '@angular/core';
import { ApiconnectionService } from './apiconnection.service';
// import { ClipboardModule } from '@angular/cdk/clipboard';
import { ClipboardModule } from 'ngx-clipboard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../stylus.css']
})
export class AppComponent implements OnInit{
  
  
  title = 'Main Page';
  inputUrl:any;
  dataLinks:any = [{
    "longUrl": "",
    "shortUrl": ""
  }];

  constructor(
    private apiService:ApiconnectionService,
    private clipboards:ClipboardModule
  ){}
  
  ngOnInit(){
    this.dataLinks = []
  }

  onCopy(){
    Swal.fire({
      icon: 'success',
      title: 'Your link has been copied',
      showConfirmButton: false,
      timer: 1500
    })
  }

  goShorten() {
    // console.log(this.inputUrl)
    
    this.apiService.shortenLink(this.inputUrl)
      .subscribe(data => {
        console.log(data)
       
        if(data.ok){
          this.dataLinks.push({
            "longUrl": data.result.original_link, 
            "shortUrl": data.result.short_link2
          })
          
          console.log(this.dataLinks)
          Swal.fire({
            icon: 'success',
            title: 'Your link has been shortened',
            showConfirmButton: false,
            timer: 2000
          })
          this.inputUrl = ""

        }else{
          Swal.fire({
            icon: 'warning',
            title: 'Please check your input link',
            showConfirmButton: false,
            timer: 2000
          })
          // this.inputUrl = ""
        }

      })      
  }

}