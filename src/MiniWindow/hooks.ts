import { makeVar, useReactiveVar } from "@apollo/client";

export type PdfInfo = {
  id: string;
  title: string;
  message: string;
};

export const doGetWindowInfo = (ids: string[]): PdfInfo[] => {
  console.log(`${[...ids]}を使用してPDFのデータを取得します。`);

  return ids.map((id) => ({
    id,
    title: "PDF 見出し",
    message: `PDFメッセージ ${id}`,
  }));
};

export const pdfInfoListVar = makeVar<PdfInfo[]>([]);

export const usePdfInfoList = () => ({
  pdfInfoList: useReactiveVar(pdfInfoListVar),
});
