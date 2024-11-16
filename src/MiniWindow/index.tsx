import { useEffect } from "react";
import {
  doGetWindowInfo,
  PdfInfo,
  pdfInfoListVar,
  usePdfInfoList,
} from "./hooks";
import styles from "./index.module.css";

type Props = {
  requestIds: string[];
  onGetData?: (info: PdfInfo[]) => void;
};

export const MiniWindow: React.FC<Props> = ({ requestIds, onGetData }) => {
  const { pdfInfoList } = usePdfInfoList();

  useEffect(() => {
    const info = doGetWindowInfo(requestIds);
    pdfInfoListVar(info);
  }, []);

  useEffect(() => {
    if (pdfInfoList) {
      onGetData?.(pdfInfoList);
    }
  }, [pdfInfoList]);

  return (
    <div className={styles.container}>
      <h1>【見出し】</h1>
      <>
        {pdfInfoList.map(({ id, title, message }) => (
          <div key={id}>
            <h2>{title}</h2>
            <div>{message}</div>
          </div>
        ))}
      </>
    </div>
  );
};