import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MovieService } from "../../services/movie/movie.service";

export interface DialogData {
  _id: any;
}

@Component({
  selector: "app-add-poster",
  templateUrl: "./add-poster.component.html",
  styleUrls: ["./add-poster.component.scss"],
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
    console.log("on in it");
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
    payload.append("image", this.selectedFile, this.selectedFile.name);
    payload.append("_id", this.data._id);
    console.log("image======================>", payload);
    this.movie.uploadPoster(payload).subscribe(
      (result: any) => {
        console.log("result====================>", result);
      },
      (err) => {
        console.log("error", err);
      }
    );
  }
}
