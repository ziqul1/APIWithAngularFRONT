import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-read',
  templateUrl: './file-read.component.html',
  styleUrls: ['./file-read.component.css']
})
export class FileReadComponent implements OnInit {

  file: any;

  constructor( private fileservice: FileService) { }

  ngOnInit(): void {
  }

  ReadFile() {
    this.fileservice.ReadFile(this.file)
    .subscribe(response => console.log(response));
  }

  selectFile(e: any) {
    this.file = e.target.files[0];
  }

}
