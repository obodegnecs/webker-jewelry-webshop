import { Injectable } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  collectionName = 'Cart';

  constructor(private angularFirestore: AngularFirestore) { 
    
  }

  create(cart: Cart) {
    cart.id = this.angularFirestore.createId();
    return this.angularFirestore.collection<Cart>(this.collectionName).doc(cart.id).set(cart);
  }

  getCurrentUsersCartByDate(email: string) {
    return this.angularFirestore.collection<Cart>(this.collectionName, ref => ref.where('email', '==', email).orderBy('date', 'asc')).valueChanges();
  }

  update(cart: Cart) {
    return this.angularFirestore.collection<Cart>(this.collectionName).doc(cart.id).set(cart);
  }

  delete(id: string) {
    return this.angularFirestore.collection<Cart>(this.collectionName).doc(id).delete();
  }

  getById(id: string) {
    return this.angularFirestore.collection<Cart>(this.collectionName).doc(id).valueChanges();
  }
}
