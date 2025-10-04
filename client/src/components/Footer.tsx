import { Mail, Linkedin, Github } from "lucide-react";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";

interface FooterProps {
  email?: string;
  linkedin?: string;
  github?: string;
  googleScholar?: string;
  researchGate?: string;
}

export default function Footer({ email, linkedin, github, googleScholar, researchGate }: FooterProps) {
  return (
    <footer className="py-12 border-t">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {googleScholar && (
              <a
                href={googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-scholar"
              >
                <SiGooglescholar className="w-5 h-5" />
              </a>
            )}
            {researchGate && (
              <a
                href={researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-researchgate"
              >
                <SiResearchgate className="w-5 h-5" />
              </a>
            )}
          </div>
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} All rights reserved. Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </footer>
  );
}
