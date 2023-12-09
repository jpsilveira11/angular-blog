import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'featured-post',
  standalone: true,
  imports: [],
  templateUrl: './featured-post.component.html',
  styleUrl: './featured-post.component.css'
})
export class FeaturedPostComponent implements OnInit {
  @Input()
  postPicture:string="";//"../../../assets/images/placeholder.png";
  @Input()
  pictureAlt:string="";
  @Input()
  postTitle:string="";//"This is the featured Post";
  @Input()
  postDescription:string="";//"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  
  constructor(){}
  
  ngOnInit(): void {
    console.log("featured cart init");
    //throw new Error('Method not implemented.');
  }

}
