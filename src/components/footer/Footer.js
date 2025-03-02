import React, { useState, useEffect, useMemo } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
  const [emoji, setEmoji] = useState("❤️‍🔥");

  const emojis = useMemo(
    () => ["❤️‍🔥", "😎", "🤩", "😉", "😵‍💫", "😭", "💻", "🪄", "🤘🏻"],
    []
  );

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setEmoji(emojis[currentIndex]);
      currentIndex = (currentIndex + 1) % emojis.length;
    }, 700);

    return () => clearInterval(interval);
  }, [emojis]);

  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Designed and Developed by{" "}
          <span className="link link-underline link-underline-black" href="#">
            Akila Ramesh
          </span>
          ⚡
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
        Made with passion <span id="emojiContainer">{emoji}</span>,  a touch of curiosity 🤔 + plenty of late-night magic ✨
        </p>
      </Fade>
    </div>
  );
}
