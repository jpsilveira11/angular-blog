import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {sample} from '../../data/sample'
import { get } from 'http';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
    private postID:string|null="0"
    postPicture:string="";
    pictureAlt:string="";
    postTitle:string="";
    postContent:string="";

  constructor(private route:ActivatedRoute){

  }

    buildPost(postID:string|null){
      const post=sample.filter(post => post.id === postID)[0];
      this.postPicture=post.picture;
      this.postTitle=post.title;
      this.postContent=post.content;
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value=>
    this.postID=value.get("id"));
    this.buildPost(this.postID);
    //throw new Error('Method not implemented.');
  }
}
