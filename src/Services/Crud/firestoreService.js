// src/Services/firestoreService.js
import { db } from '../../firebaseConfig';
import { collection, setDoc, doc, getDoc, getDocs } from 'firebase/firestore';

// Función para agregar un cliente a Firestore
export const addClientToFirestore = async (clientData) => {
  const { dni } = clientData;
  try {
    console.log('Agregando cliente con ID:', dni);
    const docRef = doc(db, 'clients', dni);
    console.log('El doc Ref fue lleno:', docRef);
    await setDoc(docRef, clientData);
    console.log('Cliente agregado con ID:', dni);
    return dni;
  } catch (error) {
    console.error('Error al agregar cliente:', error.message);
    throw new Error('No se pudo agregar el cliente');
  }
};


  export const getClientById = async (dni) => {
    try {
      const docRef = doc(db, 'clients', dni);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log('Cliente encontrado:', docSnap.data());
        return docSnap.data();
      } else {
        console.log('No existe tal cliente');
        return null;
      }
    } catch (error) {
      console.error('Error al obtener cliente:', error.message);
      throw new Error('No se pudo obtener el cliente');
    }
  };

  export const getAllClients = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'clients'));
      const clients = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log('Clientes obtenidos:', clients);
      return clients;
    } catch (error) {
      console.error('Error al obtener la lista de clientes:', error.message);
      throw new Error('No se pudo obtener la lista de clientes');
    }
  };

  export const updateClientInFirestore = async (dni, updatedClientData) => {
    try {
      const docRef = doc(db, 'clients', dni);
      await setDoc(docRef, updatedClientData, {merge: true});
      console.log('Cliente actualizado con ID:', dni);
      return dni;
    }catch(error){
      console.error('Error al actualizar cliente:', error.message);
      throw new Error('No se pudo actualizar el cliente');
    }
  };