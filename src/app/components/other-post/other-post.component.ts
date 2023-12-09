import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'other-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './other-post.component.html',
  styleUrl: './other-post.component.css'
})
export class OtherPostComponent implements OnInit {

  @Input()
  postID:string="0";
  @Input()
  postPicture:string = "";
  @Input()
  pictureAlt:string = "";
  @Input()
  postTitle:string = "";
  @Input()
  postDescription:string = "";
  
  constructor() {}
  
  ngOnInit(): void {
  console.log("Other Post init")
    //throw new Error('Method not implemented.');
  }

}
