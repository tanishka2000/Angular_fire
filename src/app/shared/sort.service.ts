import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Sort } from './sort.model';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  formData: Sort;

  constructor(private firestore: AngularFirestore) { }

  getData() {
    console.log("this.firestore.collection('datas').snapshotChanges():: ", this.firestore.collection('employees').snapshotChanges())
    return this.firestore.collection('datas').snapshotChanges();
  }
}