.app {
  font-family: "Noto Sans Sinhala", sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4;
}

h1 {
  color: #4a148c;
}

.chat-box {
  height: 400px;
  overflow-y: auto;
  background: #ffffff;
  border: 1px solid #ddd;
  margin: 20px auto;
  padding: 10px;
  width: 90%;
  max-width: 600px;
  border-radius: 8px;
}

.message {
  text-align: left;
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 5px;
}

.message.user {
  background-color: #e1bee7;
}

.message.assistant {
  background-color: #c8e6c9;
}

.input-area {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

input {
  width: 60%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #aaa;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #4a148c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}
