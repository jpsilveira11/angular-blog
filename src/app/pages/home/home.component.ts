import { Component } from '@angular/core';
import { BlogTitleComponent } from "../../components/blog-title/blog-title.component";
import { FeaturedPostComponent } from "../../components/featured-post/featured-post.component";
import { OtherPostComponent } from "../../components/other-post/other-post.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BlogTitleComponent, FeaturedPostComponent, OtherPostComponent, NavBarComponent]
})
export class HomeComponent {

}
