import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Experience {
  position: string;
  organization: string;
  period: string;
  description: string;
}

interface CVProps {
  education: Education[];
  experience: Experience[];
  cvPdfUrl?: string;
}

export default function CV({ education, experience, cvPdfUrl }: CVProps) {
  return (
    <section id="cv" className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold" data-testid="heading-cv">Curriculum Vitae</h2>
          {cvPdfUrl && (
            <Button asChild data-testid="button-download-cv">
              <a href={cvPdfUrl} download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          )}
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6" data-testid="heading-education">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-6" data-testid={`item-education-${index}`}>
                  <h4 className="text-lg font-semibold" data-testid={`text-degree-${index}`}>
                    {edu.degree}
                  </h4>
                  <p className="text-base text-muted-foreground" data-testid={`text-institution-${index}`}>
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-year-${index}`}>
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6" data-testid="heading-experience">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-6" data-testid={`item-experience-${index}`}>
                  <h4 className="text-lg font-semibold" data-testid={`text-exp-position-${index}`}>
                    {exp.position}
                  </h4>
                  <p className="text-base text-muted-foreground" data-testid={`text-exp-org-${index}`}>
                    {exp.organization}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2" data-testid={`text-exp-period-${index}`}>
                    {exp.period}
                  </p>
                  <p className="text-sm leading-relaxed" data-testid={`text-exp-desc-${index}`}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
