import { Component, OnInit } from "@angular/core";
import { Producer } from "../../model/producer/producer";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-new-producer",
  templateUrl: "./add-new-producer.component.html",
  styleUrls: ["./add-new-producer.component.scss"],
})
export class AddNewProducerComponent implements OnInit {
  producer: Producer = new Producer();

  constructor(public dialogRef: MatDialogRef<AddNewProducerComponent>) {}

  ngOnInit() {}
}
