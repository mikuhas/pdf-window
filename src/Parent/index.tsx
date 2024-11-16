import { useEffect, useState } from "react";
import { MiniWindow } from "../MiniWindow";
import styles from "./index.module.css";

export const Parent = () => {
  const [openWindow, setOpenWindow] = useState<Window | null>(null);
  const requestIds = ["1", "2", "3"];

  const handleClick = () => {
    const win = window.open("child", undefined, "width=600,height=800");
    setOpenWindow(win);
  };

  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (openWindow && e.data.isReceived) {
        openWindow.postMessage({ requestIds: requestIds });
        setOpenWindow(null);
      }
    });
  }, [openWindow]);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <div className={styles.headerText}>プレビュー</div>
          <button onClick={handleClick}>印刷する</button>
        </div>
        <div className={styles.box}>
          <MiniWindow requestIds={requestIds} />
        </div>
      </div>
    </div>
  );
};
