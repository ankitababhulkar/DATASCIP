import { BgGradient } from "./components/BgGradient";
import { NewsletterSignUp } from "./components/NewsletterSignUp";
import { ChangelogBento } from "./components/ChangelogBento";
import { ContactBento } from "./components/ContactBento";
import { CertificationBento } from "./components/CertificationBento";
import { CommunityWallBento } from "./components/CommunityWallBento";
import { CalendarBento } from "./components/CalendarBento";
import { FeaturedBlogCard } from "./components/FeaturedBlogCard";
import { ConnectionsBento } from "./components/ConnectionsBento";
import { AnimatedProfilePicture } from "./components/AnimatedProfilePicture";
import { AnimatedText } from "./components/AnimatedText";
import { PhotoGallery } from "./components/PhotoGallery";
import { AboutMeBento } from "./components/AboutMeBento";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { GridWrapper } from "./components/GridWrapper";
import { WhyHireMeBento } from "./components/WhyHireMeBento";
import clsx from "clsx";

type Blog = {
  code: string;
  summary: string;
  title: string;
  publishedAt: string;
  imageName: string;
  categories: string[];
  slug: string;
  draft: boolean;
  canonicalUrl?: string | undefined;
  audioFile?: string | undefined;
};

export default function Home() {
  const featuredArticles: Blog[] = [
    {
      code: "# Building AI-Powered Data Pipelines\n\nLearn how to create efficient data pipelines using modern AI tools and techniques.",
      summary: "A comprehensive guide to building scalable AI-powered data pipelines that can handle large datasets and complex transformations.",
      title: "Building AI-Powered Data Pipelines",
      publishedAt: "2024-10-15",
      imageName: "javascript_generators.jpeg",
      categories: ["AI", "Data Engineering", "Machine Learning"],
      slug: "building-ai-powered-data-pipelines",
      draft: false,
      canonicalUrl: undefined,
      audioFile: undefined
    },
    {
      code: "# The Future of Generative AI\n\nExploring the latest trends and developments in generative artificial intelligence.",
      summary: "Dive deep into the cutting-edge world of generative AI and discover what the future holds for this revolutionary technology.",
      title: "The Future of Generative AI",
      publishedAt: "2024-10-10",
      imageName: "blogfolio_v5.jpg",
      categories: ["Generative AI", "Technology", "Innovation"],
      slug: "future-of-generative-ai",
      draft: false,
      canonicalUrl: undefined,
      audioFile: undefined
    },
    {
      code: "# Data Science Best Practices\n\nEssential practices every data scientist should follow for successful projects.",
      summary: "Master the fundamental best practices that separate successful data science projects from failed ones.",
      title: "Data Science Best Practices",
      publishedAt: "2024-10-05",
      imageName: "vscode_toolbox_2021.jpeg",
      categories: ["Data Science", "Best Practices", "Analytics"],
      slug: "data-science-best-practices",
      draft: false,
      canonicalUrl: undefined,
      audioFile: undefined
    }
  ];

  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

  return (
    <section>
      <AnimatedProfilePicture delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]"
              >
                Hey, I'm Teja!
                <br /> where Data meets AI!
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="leading-8 text-text-secondary"
                >
                  I’m a Data Scientist and AI/ML Engineer passionate about building impactful, intelligent systems. My work blends data, design, and curiosity this space is my playground for experimenting with ideas that push AI forward!
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
          <div>
            {/* Desktop Photos */}
            <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
              <PhotoGallery animationDelay={PHOTOS_DELAY} />
            </div>

            {/* Mobile Photos */}
            <AnimatedMobilePhotos delay={PHOTOS_DELAY} />
          </div>
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <AboutPattern /> */}
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Here&apos;s What makes me stand out in my field
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
              <div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-6">
                <AboutMeBento linkTo="/about" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-8">
                <ConnectionsBento linkTo="https://www.linkedin.com/in/teja-chakilam/" />
              </div>

              <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                <CertificationBento linkTo="/certifications" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
                <CalendarBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Blog Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <BlogPattern /> */}
          <div className="relative space-y-4 text-balance">
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
              <BgGradient />
            </span>
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Blog</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:text-4xl">
                I love sharing my learnings and insights with others
              </h2>
            </GridWrapper>
          </div>

          <div className="z-10">
            <GridWrapper>
              <ul className="z-50 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {featuredArticles.length > 0 ? (
                  <>
                    {featuredArticles.slice(0, 4).map((post, index) => (
                      <FeaturedBlogCard
                        key={post.slug}
                        slug={post.slug}
                        imageName={post.imageName}
                        title={post.title}
                        summary={post.summary}
                        className={clsx(
                          // Hide the fourth article on mobile and desktop
                          index === 3 && "hidden md:block lg:hidden",
                        )}
                      />
                    ))}
                  </>
                ) : (
                  <p>Nothing to see here yet...</p>
                )}
              </ul>
            </GridWrapper>
          </div>
        </section>

        {/* Why Hire Me Section */}
        <section className="relative space-y-10 md:space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-purple-600">
                <span>Why Hire Me</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                See how I can drive innovation and results for your team
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="mx-auto max-w-2xl">
              <WhyHireMeBento />
            </div>
          </GridWrapper>
        </section>

        {/* My Site Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <MySitePattern /> */}
          {/* <div className="space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>My Site</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:mx-auto md:max-w-lg md:text-4xl">
                Explore freely, experiment boldly, connect anytime.
              </h2>
            </GridWrapper>
          </div> */}

          {/* <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              <span className="col-span-1 h-[276px] sm:block md:hidden lg:block">
                <ChangelogBento />
              </span>
              <ContactBento />
              <CommunityWallBento />
            </div>
          </GridWrapper> */}
        </section>

        {/* Newsletter Section */}
        <section>
          <NewsletterSignUp />
        </section>
      </div>
    </section>
  );
}
