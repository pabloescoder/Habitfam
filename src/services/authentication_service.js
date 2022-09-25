import { initializeApp } from "firebase/app";
import { firebaseconfig } from "../config/firebase_config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import User from "../models/user";

const firebaseInstance = initializeApp(firebaseconfig);
const auth = getAuth(firebaseInstance)

/**
 * function signs the user in & also performs CRUD operations for additional user details
 * @param {String} email account email
 * @param {String} password account password
 */
export async function firebaseSignIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password).then(
        (user) => {
            var result = new User(user.user.uid, user.user.email);
        }
    ).catch(
        (error) => { }
    );
}

/**
 * function creates an accound with email & password & also performs necessary database operations
 * @param {String} email email from registration form
 * @param {String} password password
 * @param {String} name name
 * @returns {User} user
 */
export async function firebaseRegister(email, password, name) {
    await createUserWithEmailAndPassword(auth, email, password).then(
        (user) => {

        }
    ).catch(
        (error) => {
            
        }
    );
}