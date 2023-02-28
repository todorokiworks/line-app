import React from "react";
import SignOut from "./SignOut";
import SendMessage from "./SendMessage";
import { auth, db } from "../firebase";
import { useState, useEffect } from "react";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => (doc.data())));
      });
  }, []);
  return (
    <>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, photoURL, text, uid }) => (
          <div key={Math.floor(Math.random() * 10000)}
          className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </>
  );
}

export default Line;
