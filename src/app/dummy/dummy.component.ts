import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  text;

  constructor(private router: Router) { }

  getClickUrl(){
    let links=this.router.url;
    if (links==="/home") {
       this.text="Home";
    } else {
            if (links==="/services") {
              this.text="Services";
            }else{
                  if (links==="/projects") {
                    this.text="Projects";
                  } else {
                          if (links==="/aboutus") {
                            this.text="About Us";
                          } else {
                            this.text="Sign up";
                          }
                  }
            }

    }

    console.log(this.text);
  }

  ngOnInit() {
    this.getClickUrl();
  }

}
