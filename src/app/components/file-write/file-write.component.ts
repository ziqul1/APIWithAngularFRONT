import { FileService } from 'src/app/services/file.service';
import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/models/file';

@Component({
  selector: 'app-file-write',
  templateUrl: './file-write.component.html',
  styleUrls: ['./file-write.component.css']
})
export class FileWriteComponent implements OnInit {

  file: File = { skip: 0, numberOfRecordsToTake: 0, filteredBooks: '' };

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  WriteFile(): void {
    this.fileService.WriteFile(this.file.skip, this.file.numberOfRecordsToTake, this.file.filteredBooks)
      .subscribe( response => {
        let fileName = response.headers.get('content-disposition')
        ?.split(';')[1].split('=')[1];
        let blob:Blob = response.body as Blob;
        let a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
      });
  }

}
