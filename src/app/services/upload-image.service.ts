import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FileUpload } from '../data/fileupload';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private basePath = '/uploads';
  imagePath;

  constructor(private db: AngularFireDatabase) { }

  pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          this.imagePath = downloadURL;
          this.db.list('/images/').push({path: downloadURL});
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      }
    );
  }

  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.basePath}/`).push({image: fileUpload});
    // this.imagePath =  fileUpload.url;
  }
}
