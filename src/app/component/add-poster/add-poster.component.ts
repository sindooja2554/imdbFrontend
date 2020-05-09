import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieService } from '../../services/movie/movie.service';

export interface DialogData {
  _id: any;
}

@Component({
  selector: 'app-add-poster',
  templateUrl: './add-poster.component.html',
  styleUrls: ['./add-poster.component.scss'],
})
export class AddPosterComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddPosterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private movie: MovieService
  ) {}

  image: File;
  selectedFile = null;
  imageUrl: any;

  ngOnInit() {
    console.log('on in it');
  }

  cancel() {
    this.dialogRef.close();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  setPoster() {
    const payload = new FormData();
    console.log('image-------------->', this.imageUrl);
    payload.append('image', this.selectedFile, this.selectedFile.name);
    let movieId = {
      _id: this.data._id,
    };
    this.movie.uploadPoster(payload, movieId).subscribe(
      (result: any) => {
        console.log('result====================>', result);
        this.dialogRef.close();
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
}
