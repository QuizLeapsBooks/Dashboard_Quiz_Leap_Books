// Import Firebase
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// Firebase configuration (should be the same as your backend.js)
const firebaseConfig = {
  apiKey: "AIzaSyB0Vaq_9NnHQsHL_ACo_N8pJjRaxt5Wi3Y",
  authDomain: "time-table-maker-b2065.firebaseapp.com",
  projectId: "time-table-maker-b2065",
  storageBucket: "time-table-maker-b2065.appspot.com",
  messagingSenderId: "1056332331740",
  appId: "1:1056332331740:web:42b8df87aa00d8f58f1219"
};

// Initialize Firebase
const auth = getAuth();
const db = getFirestore();

// Get the user's name and display it in the dashboard
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Get user's info from Firestore
    const docRef = doc(db, "users", user.uid);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        const userData = docSnap.data();
        const userName = `${userData.fname} ${userData.lname}`;
        document.getElementById('user-name').textContent = `Hello, ${userName}!`;
      }
    }).catch((error) => {
      console.error("Error fetching user data:", error);
    });
  } else {
    // If no user is logged in, redirect to login page
    window.location.href = 'https://quizleapsbooks.github.io/Welcome_Quiz_Leap_Books/';
  }
});

// Logout functionality
document.getElementById('logout-button').addEventListener('click', () => {
  signOut(auth).then(() => {
    // Redirect to the login page after logout
    window.location.href = 'https://quizleapsbooks.github.io/Welcome_Quiz_Leap_Books/';
  }).catch((error) => {
    console.error("Error logging out:", error);
  });
});
