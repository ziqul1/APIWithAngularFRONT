import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  private fileReadURL = 'https://localhost:7185/api/File';
  private fileWriteURL = 'https://localhost:7185/api/File?numberOfRecordsToTake=';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  ReadFile(file: any) {
    let formData = new FormData();
    formData.append('filePath', file);
    return this.http.post(this.fileReadURL, formData);
  }

  WriteFile(skip: number, numberOfRecordsToTake: number, filteredBooks: string): Observable<any> {
    return this.http.get(this.fileWriteURL + numberOfRecordsToTake + "&skip=" + skip + "&filteredBooks=" + filteredBooks,
      {
        observe: "response",
        responseType: "blob"
      });
  }

}
