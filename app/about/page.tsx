import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import React from "react";
import { CurrentlyPlayingBento } from "@/app/components/CurrentlyPlayingBento";
import { ConnectionsBento } from "@/app/components/ConnectionsBento";
import { ScrapbookBento } from "@/app/components/ScrapbookBento";
import { ShadowBox } from "@/app/components/ShadowBox";
import { Resume } from "app/components/Resume";
import { StatsBento } from "@/app/components/StatsBento";
import { CurrentlyReadingBento } from "@/app/components/CurrentlyReadingBento";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AboutTrackPattern } from "@/app/components/AboutTrackPattern";
import { Photo } from "@/app/components/Photo";

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative mt-14">
      <title>About | Teja Chakilam</title>
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>{timeOfDayGreeting}</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                I&apos;m Teja, a creative Data Scientist
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center shadow-lg">
                      <div className="text-white text-center">
                        <div className="text-2xl mb-1">📊</div>
                        <div className="text-xs font-semibold">Data Viz</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={140}
                      height={140}
                      src="/your-image.jpg"
                      alt="Teja chakilam"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-br from-green-500 via-teal-600 to-cyan-700 flex items-center justify-center shadow-lg">
                      <div className="text-white text-center">
                        <div className="text-2xl mb-1">🤖</div>
                        <div className="text-xs font-semibold">AI/ML</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Here&apos;s a quick intro about me and what I love to do
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <div className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg shadow bg-gradient-to-br from-slate-800 via-gray-900 to-black flex flex-col justify-center items-center text-white p-4">
                      <div className="text-4xl mb-4">💻</div>
                      <div className="text-center">
                        <div className="text-sm font-bold mb-2">Data Science</div>
                        <div className="text-xs opacity-80">Python • SQL • ML</div>
                        <div className="mt-4 space-y-1">
                          <div className="h-1 bg-blue-400 rounded w-full"></div>
                          <div className="h-1 bg-green-400 rounded w-3/4"></div>
                          <div className="h-1 bg-purple-400 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  My Data Science Origins
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  When I first explored how AI could transform business decisions,
                  I knew I had found my purpose. I started experimenting with data
                  models while working in analytics soon I was building intelligent
                  systems that learned, adapted, and solved real-world problems.
                  My first few projects in Generative AI and MLOps ignited that
                  spark and I’ve been hooked on innovation ever since.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <div className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg shadow bg-gradient-to-br from-slate-800 via-gray-900 to-black flex flex-col justify-center items-center text-white p-4">
                    <div className="text-4xl mb-4">💻</div>
                    <div className="text-center">
                      <div className="text-sm font-bold mb-2">Data Science</div>
                      <div className="text-xs opacity-80">Python • SQL • ML</div>
                      <div className="mt-4 space-y-1">
                        <div className="h-1 bg-blue-400 rounded w-full"></div>
                        <div className="h-1 bg-green-400 rounded w-3/4"></div>
                        <div className="h-1 bg-purple-400 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-8 py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <div className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg shadow bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 flex flex-col justify-center items-center text-white p-4">
                      <div className="text-4xl mb-4">🧠</div>
                      <div className="text-center">
                        <div className="text-sm font-bold mb-2">Machine Learning</div>
                        <div className="text-xs opacity-80">Neural Networks</div>
                        <div className="mt-4 grid grid-cols-3 gap-1">
                          <div className="h-2 w-2 bg-white rounded-full opacity-60"></div>
                          <div className="h-2 w-2 bg-white rounded-full opacity-80"></div>
                          <div className="h-2 w-2 bg-white rounded-full opacity-60"></div>
                          <div className="h-2 w-2 bg-white rounded-full opacity-40"></div>
                          <div className="h-2 w-2 bg-white rounded-full opacity-100"></div>
                          <div className="h-2 w-2 bg-white rounded-full opacity-40"></div>
                          <div className="h-2 w-2 bg-white rounded-full opacity-60"></div>
                          <div className="h-2 w-2 bg-white rounded-full opacity-80"></div>
                          <div className="h-2 w-2 bg-white rounded-full opacity-60"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  My Journey Into the World of AI
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Despite starting my journey in business and analytics,
                  the world of AI kept calling my name. With my curiosity
                  for data and innovation, machine learning became my perfect
                  playground. I dove deep into Python, SQL, and neural networks
                  discovering Generative AI as my true game-changer. Since then,
                  I’ve been building intelligent systems and never looked back.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <div className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg shadow bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 flex flex-col justify-center items-center text-white p-4">
                    <div className="text-4xl mb-4">🧠</div>
                    <div className="text-center">
                      <div className="text-sm font-bold mb-2">Machine Learning</div>
                      <div className="text-xs opacity-80">Neural Networks</div>
                      <div className="mt-4 grid grid-cols-3 gap-1">
                        <div className="h-2 w-2 bg-white rounded-full opacity-60"></div>
                        <div className="h-2 w-2 bg-white rounded-full opacity-80"></div>
                        <div className="h-2 w-2 bg-white rounded-full opacity-60"></div>
                        <div className="h-2 w-2 bg-white rounded-full opacity-40"></div>
                        <div className="h-2 w-2 bg-white rounded-full opacity-100"></div>
                        <div className="h-2 w-2 bg-white rounded-full opacity-40"></div>
                        <div className="h-2 w-2 bg-white rounded-full opacity-60"></div>
                        <div className="h-2 w-2 bg-white rounded-full opacity-80"></div>
                        <div className="h-2 w-2 bg-white rounded-full opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-24">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <div className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg shadow bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-800 flex flex-col justify-center items-center text-white p-4">
                      <div className="text-4xl mb-4">📈</div>
                      <div className="text-center">
                        <div className="text-sm font-bold mb-2">Data Analytics</div>
                        <div className="text-xs opacity-80">Insights & Patterns</div>
                        <div className="mt-4 flex justify-center space-x-1">
                          <div className="w-1 bg-white rounded-full" style={{ height: '20px' }}></div>
                          <div className="w-1 bg-white rounded-full" style={{ height: '35px' }}></div>
                          <div className="w-1 bg-white rounded-full" style={{ height: '15px' }}></div>
                          <div className="w-1 bg-white rounded-full" style={{ height: '40px' }}></div>
                          <div className="w-1 bg-white rounded-full" style={{ height: '25px' }}></div>
                          <div className="w-1 bg-white rounded-full" style={{ height: '45px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Life Beyond Data
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  When I discovered the world of Data Science, I realized I’d
                  found my true passion. Every dataset tells a story, and
                  uncovering hidden patterns became my way of understanding
                  how the world works.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Outside of analytics and algorithms, I’m constantly learning
                  and exploring new ways AI can create real-world impact.
                  From mentoring aspiring data professionals to working on
                  social data projects, I’ve learned that growth happens
                  when knowledge is shared.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <div className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg shadow bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-800 flex flex-col justify-center items-center text-white p-4">
                    <div className="text-4xl mb-4">📈</div>
                    <div className="text-center">
                      <div className="text-sm font-bold mb-2">Data Analytics</div>
                      <div className="text-xs opacity-80">Insights & Patterns</div>
                      <div className="mt-4 flex justify-center space-x-1">
                        <div className="w-1 bg-white rounded-full" style={{ height: '20px' }}></div>
                        <div className="w-1 bg-white rounded-full" style={{ height: '35px' }}></div>
                        <div className="w-1 bg-white rounded-full" style={{ height: '15px' }}></div>
                        <div className="w-1 bg-white rounded-full" style={{ height: '40px' }}></div>
                        <div className="w-1 bg-white rounded-full" style={{ height: '25px' }}></div>
                        <div className="w-1 bg-white rounded-full" style={{ height: '45px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <div className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg shadow bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 flex flex-col justify-center items-center text-white p-4">
                      <div className="text-4xl mb-4">⚡</div>
                      <div className="text-center">
                        <div className="text-sm font-bold mb-2">AI Innovation</div>
                        <div className="text-xs opacity-80">Future Tech</div>
                        <div className="mt-4 space-y-2">
                          <div className="flex space-x-1">
                            <div className="h-1 w-4 bg-white rounded opacity-80"></div>
                            <div className="h-1 w-2 bg-white rounded opacity-60"></div>
                            <div className="h-1 w-6 bg-white rounded opacity-90"></div>
                          </div>
                          <div className="flex space-x-1">
                            <div className="h-1 w-3 bg-white rounded opacity-70"></div>
                            <div className="h-1 w-5 bg-white rounded opacity-85"></div>
                            <div className="h-1 w-2 bg-white rounded opacity-60"></div>
                          </div>
                          <div className="flex space-x-1">
                            <div className="h-1 w-6 bg-white rounded opacity-90"></div>
                            <div className="h-1 w-3 bg-white rounded opacity-70"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  These Days
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Currently, I’m leading AI initiatives as a Senior
                  Data Scientist,building intelligent, data-driven
                  systems that power real-world solutions. Exploring
                  Generative AI and MLOps has become an exciting part of my journey!
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  When I’m not diving into AI experiments, you’ll
                  find me exploring creative coding projects, writing
                  about emerging tech, or brainstorming new ideas over
                  a cup of coffee always learning, always building.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <div className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg shadow bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 flex flex-col justify-center items-center text-white p-4">
                    <div className="text-4xl mb-4">⚡</div>
                    <div className="text-center">
                      <div className="text-sm font-bold mb-2">AI Innovation</div>
                      <div className="text-xs opacity-80">Future Tech</div>
                      <div className="mt-4 space-y-2">
                        <div className="flex space-x-1">
                          <div className="h-1 w-4 bg-white rounded opacity-80"></div>
                          <div className="h-1 w-2 bg-white rounded opacity-60"></div>
                          <div className="h-1 w-6 bg-white rounded opacity-90"></div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="h-1 w-3 bg-white rounded opacity-70"></div>
                          <div className="h-1 w-5 bg-white rounded opacity-85"></div>
                          <div className="h-1 w-2 bg-white rounded opacity-60"></div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="h-1 w-6 bg-white rounded opacity-90"></div>
                          <div className="h-1 w-3 bg-white rounded opacity-70"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                My work history and achievements timeline.
              </h2>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-16">
          <GridWrapper>
            <Resume />
          </GridWrapper>
          {/* <div className="flex justify-center">
            <Button variant="secondary">Download Resume</Button>
          </div> */}
        </div>



        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
