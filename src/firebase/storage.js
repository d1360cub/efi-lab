import { storage } from './firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function uploadFile(localfile) {
  const fileRef = ref(storage, `images/${localfile.name}`);
  await uploadBytes(fileRef, localfile);
  const fileUrl = await getDownloadURL(fileRef);
  return fileUrl;
}
