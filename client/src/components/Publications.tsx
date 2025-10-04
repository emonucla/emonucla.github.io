import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  pdfUrl?: string;
}

interface PublicationsProps {
  publications: Publication[];
}

export default function Publications({ publications }: PublicationsProps) {
  const groupedByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section id="publications" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8" data-testid="heading-publications">Publications</h2>
        <div className="space-y-8">
          {years.map((year) => (
            <div key={year} className="space-y-6">
              <h3 className="text-2xl font-semibold text-muted-foreground" data-testid={`heading-year-${year}`}>
                {year}
              </h3>
              <div className="space-y-6">
                {groupedByYear[year].map((pub, index) => (
                  <div
                    key={index}
                    className="border rounded-md p-6 hover-elevate transition-all duration-200"
                    data-testid={`card-publication-${year}-${index}`}
                  >
                    <h4 className="text-lg font-semibold mb-2" data-testid={`text-pub-title-${index}`}>
                      {pub.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1" data-testid={`text-pub-authors-${index}`}>
                      {pub.authors}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4" data-testid={`text-pub-venue-${index}`}>
                      {pub.venue}
                    </p>
                    {pub.pdfUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        data-testid={`button-pdf-${index}`}
                      >
                        <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-2" />
                          PDF
                        </a>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
