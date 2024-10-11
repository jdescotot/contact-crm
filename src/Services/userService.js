// src/services/userService.js
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, doc, getDoc, setDoc } from "firebase/firestore";

const usersCollectionRef = collection(db, "users");

const createUser = async (user) => {
  return await addDoc(usersCollectionRef, user);
};

const getUsers = async () => {
  const data = await getDocs(usersCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const getUser = async (id) => {
  const userDoc = doc(db, "users", id);
  return await getDoc(userDoc);
};

const updateUser = async (id, updatedUser) => {
  const userDoc = doc(db, "users", id);
  return await setDoc(userDoc, updatedUser, { merge: true });
};

export { createUser, getUsers, getUser, updateUser };
