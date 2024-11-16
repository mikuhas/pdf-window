import { useEffect, useState } from "react";
import { MiniWindow } from "../MiniWindow";
import { PdfInfo } from "../MiniWindow/hooks";

export const Child = () => {
  const [requestIds, setRequestIds] = useState<string[] | null>(null);
  const [pdfData, setPdfData] = useState<PdfInfo[] | null>(null);

  useEffect(() => {
    const win = window.opener as Window;
    win.postMessage({ isReceived: true });
  }, []);

  useEffect(() => {
    if (pdfData) {
      window.print();
      window.close();
    }
  }, [pdfData]);

  window.addEventListener("message", (e) => {
    if (e.data.requestIds) {
      setRequestIds(e.data.requestIds);
    }
  });

  if (!requestIds) return null;

  return (
    <>
      <div>
        <MiniWindow requestIds={requestIds} onGetData={setPdfData} />
      </div>
    </>
  );
};
