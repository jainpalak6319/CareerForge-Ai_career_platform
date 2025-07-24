// src/utils/exportDocx.js
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

export const exportToDocx = (resumeData) => {
  const {
    formData,
    summary,
    education,
    skills,
    experience,
    projects,
    certificates,
  } = resumeData;

  const section = [];

  // Full Name
  if (formData.fullName) {
    section.push(
      new Paragraph({
        children: [new TextRun({ text: formData.fullName, bold: true, size: 32 })],
        spacing: { after: 200 },
      })
    );
  }

  // Contact
  section.push(
    new Paragraph({
      children: [
        new TextRun(`${formData.email || ''} | ${formData.phone || ''} | ${formData.location || ''}`),
      ],
      spacing: { after: 300 },
    })
  );

  // Summary
  if (summary?.trim()) {
    section.push(
      new Paragraph({
        children: [new TextRun({ text: 'Professional Summary', bold: true, size: 26 })],
        spacing: { after: 100 },
      }),
      new Paragraph(summary),
      new Paragraph(""),
    );
  }

  // Education
  if (education?.length > 0) {
    section.push(
      new Paragraph({ children: [new TextRun({ text: 'Education', bold: true, size: 26 })], spacing: { after: 100 } })
    );
    education.forEach((edu) => {
      section.push(
        new Paragraph(`${edu.degree} from ${edu.school} (${edu.year})`)
      );
    });
    section.push(new Paragraph(""));
  }

  // Skills
  if (skills?.length > 0) {
    section.push(
      new Paragraph({ children: [new TextRun({ text: 'Skills', bold: true, size: 26 })], spacing: { after: 100 } }),
      new Paragraph(skills.join(', ')),
      new Paragraph(""),
    );
  }

  // Experience
  if (experience?.length > 0) {
    section.push(
      new Paragraph({ children: [new TextRun({ text: 'Experience', bold: true, size: 26 })], spacing: { after: 100 } })
    );
    experience.forEach((exp) => {
      section.push(
        new Paragraph(
          `${exp.jobTitle} at ${exp.company} (${exp.duration})\n${exp.description}`
        )
      );
    });
    section.push(new Paragraph(""));
  }

  // Projects
  if (projects?.length > 0) {
    section.push(
      new Paragraph({ children: [new TextRun({ text: 'Projects', bold: true, size: 26 })], spacing: { after: 100 } })
    );
    projects.forEach((proj) => {
      section.push(
        new Paragraph(
          `${proj.title}${proj.link ? ` (${proj.link})` : ''}\nTools: ${proj.tech}\n${proj.description}`
        )
      );
    });
    section.push(new Paragraph(""));
  }

  // Certificates
  const validCertificates = certificates?.filter((cert) => cert.name?.trim());
  if (validCertificates?.length > 0) {
    section.push(
      new Paragraph({ children: [new TextRun({ text: 'Certificates', bold: true, size: 26 })], spacing: { after: 100 } })
    );
    validCertificates.forEach((cert) => {
      section.push(
        new Paragraph(
          `${cert.name}${cert.issuer ? ` by ${cert.issuer}` : ''}${cert.date ? ` on ${cert.date}` : ''}${cert.link ? ` (${cert.link})` : ''}`
        )
      );
    });
    section.push(new Paragraph(""));
  }

  const doc = new Document({
    sections: [{ children: section }],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${formData.fullName || 'resume'}.docx`);
  });
};
