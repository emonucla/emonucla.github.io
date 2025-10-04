interface AboutProps {
  content: string;
  interests: string[];
}

export default function About({ content, interests }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8" data-testid="heading-about">About Me</h2>
        <div className="space-y-6">
          <p className="text-base leading-relaxed" data-testid="text-about-content">
            {content}
          </p>
          <div>
            <h3 className="text-xl font-medium mb-4" data-testid="heading-interests">Research Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-md text-sm font-medium"
                  data-testid={`badge-interest-${index}`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
