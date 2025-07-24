// utils/downloadPDF.js
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadResumePDF = async (elementId = 'resume-preview') => {
  const element = document.getElementById(elementId);
  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('My_Resume.pdf');
};
