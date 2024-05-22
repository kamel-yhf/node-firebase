import firebase from '../firebase.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Initialiser Firebase Auth
const auth = getAuth(firebase);

// Inscription d'un nouvel utilisateur
export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(201).send({ uid: user.uid, email: user.email });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Connexion d'un utilisateur
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(200).send({ uid: user.uid, email: user.email });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Déconnexion d'un utilisateur
export const logoutUser = async (req, res) => {
  try {
    await signOut(auth);
    res.status(200).send('User signed out successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
