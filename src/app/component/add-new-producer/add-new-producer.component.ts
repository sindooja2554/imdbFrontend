import { Component, OnInit } from "@angular/core";
import { Producer } from "../../model/producer/producer";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DataService } from "../../services/data/data.service";

@Component({
  selector: "app-add-new-producer",
  templateUrl: "./add-new-producer.component.html",
  styleUrls: ["./add-new-producer.component.scss"],
})
export class AddNewProducerComponent implements OnInit {
  producer: Producer = new Producer();

  constructor(
    public dialogRef: MatDialogRef<AddNewProducerComponent>,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.producerNewDetails.subscribe(
      (details) => (this.producer = details)
    );
  }

  save() {
    console.log("value------------------------->", this.producer);
    this.data.producer(this.producer);
    this.dialogRef.close(
      (this.producer = {
        name: "",
        sex: "",
        dob: "",
        bio: "",
      })
    );
  }
}
