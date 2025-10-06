import CV from "../CV";

export default function CVExample() {
  const mockEducation = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "University of Technology",
      year: "2023 - Present"
    },
    {
      degree: "M.S. in Computer Science",
      institution: "State University",
      year: "2021 - 2023"
    },
    {
      degree: "B.S. in Computer Science",
      institution: "State University",
      year: "2017 - 2021"
    }
  ];

  const mockExperience = [
    {
      position: "Graduate Research Assistant",
      organization: "AI Research Lab, University of Technology",
      period: "2023 - Present",
      description: "Conducting research on machine learning algorithms and their applications in natural language processing. Collaborating with industry partners on real-world AI solutions."
    },
    {
      position: "Research Intern",
      organization: "Tech Corporation AI Division",
      period: "Summer 2022",
      description: "Developed novel deep learning models for image recognition tasks. Contributed to open-source machine learning frameworks."
    }
  ];

  return (
    <CV
      education={mockEducation}
      experience={mockExperience}
      cvPdfUrl="#"
    />
  );
}
