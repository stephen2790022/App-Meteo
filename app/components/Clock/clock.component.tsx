import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { StyledText } from "../Ui/StyledText/styled-text.component";

export const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <StyledText>{currentTime}</StyledText>;
};
