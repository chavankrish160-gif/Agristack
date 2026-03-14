import { useEffect, useState } from 'react';
import { useSocket } from '../hooks/useSocket';

export default function ChatPanel() {
  const socket = useSocket();
  const [room] = useState('crop-room-1');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('join_room', room);
    const handler = (payload) => setMessages((prev) => [...prev, payload]);
    socket.on('receive_message', handler);
    return () => socket.off('receive_message', handler);
  }, [room, socket]);

  const sendMessage = () => {
    if (!message.trim()) return;
    socket.emit('send_message', { room, text: message, sender: 'You' });
    setMessage('');
  };

  return (
    <section className="rounded-xl bg-white p-4 shadow-sm">
      <h3 className="mb-3 font-semibold">Real-time Chat</h3>
      <div className="mb-3 h-36 overflow-y-auto rounded border p-2 text-sm">
        {messages.map((msg, idx) => (
          <p key={`${msg.timestamp}-${idx}`}>
            <span className="font-semibold">{msg.sender}: </span>
            {msg.text}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message farmer"
          className="flex-1 rounded border px-3 py-2 text-sm"
        />
        <button onClick={sendMessage} className="rounded bg-mandi-green px-4 py-2 text-sm text-white">
          Send
        </button>
      </div>
    </section>
  );
}
