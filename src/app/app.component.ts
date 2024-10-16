import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { FaceSnapDSI22Component } from './face-snap-dsi22/face-snap-dsi22.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FaceSnapDSI22Component], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'adem_projetang';
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
    
      {
        title: 'three rock mountain',
        description: 'endroit magnifique',
        imageUrl: 'https://th.bing.com/th/id/OIP.qkv97-5Gknf5724x_R8yUQAAAA?rs=1&pid=ImgDetMain',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'un bon repas',
        description: 'ymmm c bon',
        imageUrl: 'https://thatgrapejuice.net/wp-content/uploads/2022/06/drake-thatgrapejuice-2022-scaled.jpg',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis petit!',
        imageUrl: 'https://content2.kawasaki.com/ContentStorage/KMV/Products/4904/ffd1d425-23dd-4344-b9a3-6d5b09f3559a.png?w\u003d675',
        createdDate: new Date(),
        snaps: 0
      }
    ];
  }
}
