import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Huntington National Bank",
      period: "Jan 2023 – May 2025",
      positions: [
        {
          title: "Generative AI Engineer",
          description: [
            "I led AI-driven projects focusing on Generative AI models for financial data processing and automation. My role included developing intelligent systems leveraging NLP and LLMs, optimizing data pipelines, and integrating AI solutions into existing enterprise frameworks to enhance decision-making and customer experience.",
          ],
        },
        // {
        //   title: "Frontend Developer II",
        //   description: [
        //     "I joined LogicGate and immediately took charge of feature development on my team while also assisting other frontend developers in the organization.",
        //   ],
        // },
      ],
    },
    {
      company: "Evernorth Health Services",
      period: "Mar 2022 – Dec 2022",
      positions: [
        {
          title: "Data Scientist",
          description: [
            "I developed predictive models and machine learning algorithms for healthcare analytics, focusing on patient outcomes, claims data, and operational optimization. I collaborated with cross-functional teams to design data solutions that improved performance and accuracy, utilizing technologies such as Python, SQL, and AWS for end-to-end ML deployment.",
          ],
        },
      ],
    },
    {
      company: "HDFC Life",
      period: "Jan 2020 – Jul 2021",
      positions: [
        {
          title: "Data Scientist",
          description: [
            "I built and deployed data-driven models to enhance customer insights and automate policy-related analytics. My work involved analyzing large-scale datasets, identifying business trends, and supporting strategic decisions through AI and statistical techniques. I collaborated with business teams to implement data pipelines and model monitoring workflows.",
          ],
        },
      ],
    },
    {
      company: "Flipkart",
      period: "Jun 2019 – Dec 2019",
      positions: [
        {
          title: "Python Developerr",
          description: [
            "I contributed to the development of backend data processing modules using Python and AWS. I focused on automating data ingestion workflows and optimizing the scalability of internal systems. Collaborated closely with the analytics team to support business intelligence and reporting initiatives.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/braydon_headshot_1.jpeg",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
