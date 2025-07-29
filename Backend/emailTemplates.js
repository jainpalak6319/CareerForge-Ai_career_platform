// emailTemplates.js

const val = (v, fallback = '') => (v ? v : fallback);

const formatContact = (data) => {
  let result = val(data.yourEmail) ? `Email: ${data.yourEmail}\n` : '';
  if (data.yourPhone) result += `Phone: ${data.yourPhone}\n`;
  if (data.linkedinProfile) result += `LinkedIn: ${data.linkedinProfile}\n`;
  return result.trim();
};

const emailTemplates = {
  "cover-letter": (data) => `
Subject: Application for ${val(data.jobTitle)} at ${val(data.companyName)}

Dear ${val(data.recruiterName, "Hiring Manager")},

I am writing to express my interest in the ${val(data.jobTitle)} position at ${val(data.companyName)}${data.location ? " (" + data.location + ")" : ""}. 
${data.jobDescription ? "After reviewing the job description, I believe my experiences align well with your needs." : ""}
${data.keySkills ? "\nKey skills: " + data.keySkills + "." : ""}
${data.additionalInfo ? "\n\n" + data.additionalInfo : ""}
${data.industry ? "\nIndustry: " + data.industry + "." : ""}
${data.experienceLevel ? "\nExperience Level: " + data.experienceLevel + "." : ""}

Thank you for considering my application. I look forward to hearing from you.

Sincerely,
${val(data.yourName)}
${formatContact(data)}
  `,
  "recruiter-email": (data) => `
Subject: Inquiry about ${val(data.jobTitle)} roles at ${val(data.companyName)}

Hello ${val(data.recruiterName, "Recruiter")},

My name is ${val(data.yourName)}, and I'm interested in opportunities for the ${val(data.jobTitle)} role at ${val(data.companyName)}. 
${data.jobDescription ? "I found your recent job posting intriguing." : ""}
${data.keySkills ? "\nMy core strengths include " + data.keySkills + "." : ""}
${data.additionalInfo ? "\n\n" + data.additionalInfo : ""}

Please let me know if you are available for a quick conversation about this role. Thank you for your consideration.

Best regards,
${val(data.yourName)}
${formatContact(data)}
  `,
  "follow-up": (data) => `
Subject: Following Up: ${val(data.jobTitle)} Position (${val(data.companyName)})

Dear ${val(data.recruiterName, "Hiring Manager")},

I hope this message finds you well. I wanted to follow up regarding my application for the ${val(data.jobTitle)} position at ${val(data.companyName)}${data.location ? " (" + data.location + ")" : ""}. 
${data.keySkills ? "My background in " + data.keySkills + " makes me confident in my ability to contribute to your team." : ""}
${data.additionalInfo ? "\n\n" + data.additionalInfo : ""}

I'm eager to learn about the next steps in the hiring process. Thank you for your time!

Sincerely,
${val(data.yourName)}
${formatContact(data)}
  `,
  "networking": (data) => `
Subject: Request to Connect & Discuss Opportunities in ${val(data.industry, "Your Industry")}

Hello ${val(data.recruiterName, "there")},

My name is ${val(data.yourName)}, and I am currently looking to broaden my network within ${val(data.industry, "the industry")}. With experience in ${val(data.keySkills)}, I'm keen on learning from professionals like you at ${val(data.companyName)}.

${data.additionalInfo ? data.additionalInfo + "\n" : ""}

If you’re open to connecting or a brief coffee chat, I’d be grateful! Thank you for your time.

Best,
${val(data.yourName)}
${formatContact(data)}
  `,
  "thank-you": (data) => `
Subject: Thank You – ${val(data.jobTitle)} Interview at ${val(data.companyName)}

Dear ${val(data.recruiterName, "Hiring Team")},

Thank you for taking the time to interview me for the ${val(data.jobTitle)} role at ${val(data.companyName)}. I appreciate our conversation and the opportunity to learn about your team.

${data.keySkills ? "I am excited at the prospect of bringing my skills in " + data.keySkills + " to your company." : ""}
${data.additionalInfo ? "\n\n" + data.additionalInfo : ""}
If you have any other questions, please let me know.

Sincerely,
${val(data.yourName)}
${formatContact(data)}
  `,
  "cold-outreach": (data) => `
Subject: Exploring Opportunities at ${val(data.companyName)}

Hello ${val(data.recruiterName, "Hiring Manager")},

I am ${val(data.yourName)}, eager to explore potential opportunities at ${val(data.companyName)} in the ${val(data.jobTitle)} area. My experience in ${val(data.keySkills)} makes me confident that I would add value to your mission.

${data.additionalInfo ? "\n\n" + data.additionalInfo : ""}
I would welcome the chance to discuss how my background aligns with your needs.

Thank you for your consideration.

Best regards,
${val(data.yourName)}
${formatContact(data)}
  `
};

module.exports = emailTemplates;
