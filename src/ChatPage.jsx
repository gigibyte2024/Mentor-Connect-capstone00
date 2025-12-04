import React, { useState } from "react";
import "./chat-page.css";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      id: 1,
      sender: "mentor",
      text: "Alright, I've pushed the latest schematics to the repo. The neon lattice needs a recalibration. Can you take a look?",
      time: "2m",
    },
    {
      id: 2,
      sender: "you",
      text: "On it. I see the commit. Running diagnostics now. Did you account for the power fluctuations from the last cycle?",
      time: "Just now",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setChat([
      ...chat,
      { id: Date.now(), sender: "you", text: message, time: "now" },
    ]);

    setMessage("");
  };

  return (
    <div className="chat-wrapper">

      {/* SIDEBAR */}
      <aside className="chat-sidebar">

        {/* Current user */}
        <div className="sidebar-header">
          <div className="user-info">
            <div
              className="user-avatar"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC95Yi9ftuSjT35Jcj3h_kk-_eUe8y7lS_6rupduq-i4kGwd01ToZ1b6oO-jjzvl1O9hgOwE4gpAtx6v6tkoEJeCEZwd_hn_bJUxNwSlWzGw3FJYV1uMxj_cJRWxIxcpeExsQR3pyCGEgcvG9Ldb--S_Iiwjbq_ioVQHkO4imHoTNXPAEvTJcdO9cvrGfhyXvG9ohmVV5wvT7347dkE48PGxa2FeS08WZIIRDXLaHFvuEhibkremjv8kI3SbiYeHiyuJIyKJrkC1OY')",
              }}
            />
            <div>
              <h3 className="user-name">Neo</h3>
              <p className="user-status">Online</p>
            </div>
          </div>
        </div>

        {/* Chat list */}
        <div className="chat-list">
          <div className="chat-item active">
            <div
              className="chat-avatar"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpn9PM-gIApLISjf6lrR5oyM9on8u_NaYFuCmCBQN-Wj7WFPhVLFQSoraEc_7s5putOybOCpqXEutcREAME7uEcrB7FDh0e-vz1k4I6ZDtvCC3ShaBUZDlbK8iCOgCXBPDt7JVtEYSwXHH9AsBsgFaEGUwHQGy2ijXzco4LDvZLC3P6Grpm0IEFIjroD5YhZblXQyofLOIcrNwPHmriRI-P9GTm853-JWW0YSfYx2gl4DOKJyeNEt9lDnNca5MEs_KlHFpsYMCxuM')",
              }}
            />
            <div className="chat-meta">
              <p className="chat-name">Juno Tran</p>
              <p className="chat-preview">Alright, I've pushed the…</p>
            </div>
          </div>

          <div className="chat-item">
            <div
              className="chat-avatar"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTZ3mx7K-3U0MHu-NKZWzrwmzeosIhds1PoG5vap4gN_qzE9KqpJAOPfPWGjUGSDxX-PO4a_qMBdH-jNueT6WxXJs2HylsG77GewrzHiKCFxWqqRzfQDeb-saKZxA-_tvvkvQ2mJKX7bN_1Uhw_Sc_pwpC0FRuc9ocbQ_OYrs_K6Y40bQHV5tFxmMbHq8Bq_8zsTiA1kD6n-LWg_uwqFfSE9Ohsz5ukKhJ66EJ1RjInCZGt1QMHd9ojdj6NuFYWZYu1oVOgtoWDDw')",
              }}
            />
            <div className="chat-meta">
              <p className="chat-name">Alex Ryder</p>
              <p className="chat-preview">Let’s review your code…</p>
            </div>
          </div>

        </div>

      </aside>

      {/* MAIN CHAT AREA */}
      <main className="chat-main">

        {/* Header */}
        <div className="chat-main-header">
          <div className="chat-user-info">
            <div
              className="chat-avatar-large"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLqWEq5FE0Retyd0EVcDwra933B699pnkeLgpXKNqu0BQviRXavrtF7WJC6HyxaalQn8KaWyIdLoRY02qKDJLifEAWE6WsWxrnjaZa9qgow5PFy1gOFsqVVNkaIA7z_GjoQUPnJb97g8PVV9EhNyEIvhi5CjMSV49t9gcqDhI6IILDU83yaxpi-quXfH3nN1tPoADXk6kFiUrJUF5u_gxiRuvkeFb-otK73X3ut28nLFs0z0WQ8L6zkO5_ZyroWBkHoTDeXmI-W4g')",
              }}
            />
            <div>
              <h2 className="chat-main-name">Juno Tran</h2>
              <p className="chat-main-status">Mentor • Online</p>
            </div>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="messages-box">
          {chat.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.sender === "you" ? "sent" : "received"}`}
            >
              <p className="message-text">{msg.text}</p>
            </div>
          ))}
        </div>

        {/* MESSAGE INPUT */}
        <div className="message-input-box">
          <input
            type="text"
            placeholder="Connect with your mentor…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="message-input"
          />

          <button onClick={sendMessage} className="send-btn">
            Send
          </button>
        </div>

      </main>
    </div>
  );
};

export default ChatPage;
