import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../db/firestore';

export const getUserProfile = uid =>
    db
        .collection('profiles')
        .doc(uid)
        .get()
        .then(snapshot => snapshot.data())

const createUserProfile = userProfile =>
    db
        .collection('profiles')
        .doc(userProfile.uid)
        .set(userProfile)

export async function registerUser({email, password, username}) {
    try {
        const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await createUserProfile({uid: user.uid, username, email})
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const logout = () => firebase.auth().signOut()

export const login = ({email, password}) =>
    firebase.auth().signInWithEmailAndPassword(email, password)

export const onAuthStateChanges = onAuth =>
    firebase.auth().onAuthStateChanged(onAuth)
