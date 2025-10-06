import headshotImage from "@assets/generated_images/Professional_academic_headshot_portrait_bfdc488e.png";

interface HeroProps {
  name: string;
  position: string;
  institution: string;
  bio: string;
}

export default function Hero({ name, position, institution, bio }: HeroProps) {
  return (
    <section id="home" className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={headshotImage}
                alt={name}
                className="w-64 h-64 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                data-testid="img-headshot"
              />
            </div>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-2" data-testid="text-name">
                {name}
              </h1>
              <p className="text-xl text-muted-foreground" data-testid="text-position">
                {position}
              </p>
              <p className="text-base text-muted-foreground" data-testid="text-institution">
                {institution}
              </p>
            </div>
            <p className="text-base leading-relaxed" data-testid="text-bio">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
