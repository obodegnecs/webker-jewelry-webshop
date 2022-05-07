import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/Item';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  //HTTP

  collectionName = 'Items';

  constructor(private http: HttpClient, private angularFirestore: AngularFirestore, private angularFireStorage: AngularFireStorage) { }

  loadItemMeta(metaUrl: string): Observable<Array<Item>> {
    //return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Item>>;
    return this.angularFirestore.collection<Item>(this.collectionName).valueChanges();
  }

  loadItem(imageUrl: string) {
    //return this.http.get(environment.hostUrl + '/assets/' + imageUrl, {responseType: 'blob'});
    return this.angularFireStorage.ref(imageUrl).getDownloadURL();
  }

  getAllByName() {
    return this.angularFirestore.collection<Item>(this.collectionName, ref => ref.where('id', '!=', 'null').orderBy('id').orderBy('name')).valueChanges();
  }
}
