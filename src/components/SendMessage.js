import React from "react";
import { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    db.collection("messages").add({
      text: message,
      uid,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            type="text"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="メッセージを入力してください"
            value={message}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
