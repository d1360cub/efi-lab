import { db } from './firebaseConfig';
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  doc,
  setDoc,
} from 'firebase/firestore';

export async function getCollection(collectionName) {
  const getCol = collection(db, collectionName);
  const collectionSnapshot = await getDocs(getCol);
  const collectionList = collectionSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return collectionList;
}

export async function createDocument(collectionName, data) {
  const docRef = await addDoc(collection(db, collectionName), data);
  const docSnap = await getDoc(docRef);
  return { id: docRef.id, ...docSnap.data() };
}

export async function getDocument(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
}

export async function setDocument(collectionName, documentId, data) {
  const docRef = doc(db, collectionName, documentId);
  await setDoc(docRef, data);
}
