import React, { useEffect, useState } from "react";

const Countdown = (expiryDate) => {
  const [timeleft, setTimeleft] = useState("");

  useEffect(() => {
    const targetDate = new Date(expiryDate).getTime();

    function updateCountdown() {
      const now = Date.now();
      const range = targetDate - now;
      if (range < 0) {
        setTimeleft("");
        return;
      }
      const hours = Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const min = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((range % (1000 * 60)) / 1000);
      setTimeleft(`${hours}h ${min}m ${sec}s`);
      setTimeout(updateCountdown, 1000);
    }

    updateCountdown();

    return () => clearTimeout(updateCountdown);
  }, [expiryDate]);
  return timeleft;
};

export default Countdown;