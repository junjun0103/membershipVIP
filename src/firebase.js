import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyA7NWQGRfQ0LzcunDN3vLvQ0HrkMm-N6xE",
    authDomain: "vipmembership-9906e.firebaseapp.com",
    databaseURL: "https://vipmembership-9906e.firebaseio.com",
    projectId: "vipmembership-9906e",
    storageBucket: "vipmembership-9906e.appspot.com",
    messagingSenderId: "323559989581",
    appId: "1:323559989581:web:9b84676cff3aef99589704"

};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };