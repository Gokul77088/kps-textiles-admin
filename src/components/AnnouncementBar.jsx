import { useEffect, useState } from "react";

const messages = [
  "✦ Free Shipping on orders above ₹999",
  "🧵 Handwoven With Love — Crafted in India",
  "✨ New Handloom Collection Is Here",
]

function AnnouncementBar(){
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((previousMessage) => {
                return (previousMessage + 1) % messages.length;
            });
        }, 3000);

        return() => clearInterval(interval)
    }, []);

    return(
        <div className="announcement-bar">
            <p key={currentMessage}>{messages[currentMessage]}</p>
        </div>
    );
}

export default AnnouncementBar;