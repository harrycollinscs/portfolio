import React from "react";
import Page from "../../atoms/Page";
import Section from "../../atoms/Section";
import Vodafone3 from "../../../assets/images/vodafone3.svg";
import giffgaff2 from "../../../assets/images/giffgaff2.webp";
import Grid from "../../atoms/Grid";
import ImageCard from "../../molecules/ImageCard";
import styled, { withTheme } from "styled-components";

// const Container = styled.div`
//   // position: relative;
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   height: 100vh;
//   scroll-behavior: smooth;
//   overflow: auto;
//   white-space: nowrap;

//   section {
//     width: 100vw;
//     display: inline-block;

//     height: 100vh;
//     margin: 0 auto;
//     scroll-snap-align: start;
//   }
// `;

// const Headings = [
//   "Design Driven",
//   "User Driven",
//   "Full Stack",
//   "Passionate",
//   "4 Years In Industry",
//   "...and more",
// ];

const EmploymentContent = [
  {
    company: 'Vodafone',
    dates: 'Aug 2022 - Present',
    jobTitle: 'Software Engineer',
    image: Vodafone3,
    bullets: [
      "Designed architecture and led project to overhaul front end notification handling to be more reusable, and increase development speed of engineers.",
      "Built and deployed custom React components, reusable helper functions, etc.",
      "Liaised with backend engineers to formulate data structures for efficient cross-stack data handling.",
    ]
  },
  {
    company: 'giffgaff',
    dates: 'Sept 2019 - June 2022',
    jobTitle: 'Software Engineer',
    image: giffgaff2,
    bullets: [
      "Led implementation of 'Help and Search' section into giffgaff mobile application, featuring live chat (React Native,Typescript, Redux, GraphQL).",
      "Built and monitored NodeJS service to serve React components, utilising Hypernova (Javascript).",
      "Assisted in the building, improvement and technology-wide uptake of React component library (including Jest unit testing, Storybook).",
      "Communicated with and managed expectations of stakeholders while working in agile environment, and delivering iterative improvements to products.",
    ]
  }
]

const TitleArticle = styled.article`
  width: 50%;

`

const Resume = ({ theme }: { theme?: any }) => {
  
  return (
    <Page>
        <Section bgColor={theme.secondary} fullWidth>
          <Section>
            <Grid columns={{ desktop: 2, tablet: 2, smallTablet: 2, mobile: 1, smallMobile: 1 }}>
              <TitleArticle>
                <h1 style={{ textDecorationStyle: 'wavy', textDecorationLine: 'underline', color: theme.accent, paddingBottom: 20, textUnderlineOffset: 20, textDecorationThickness: 6 }}>
                  Profile
                </h1>
              </TitleArticle>

              <article>
              <p>
                Hard-working and creative software engineer currently employed in
                the telecoms industry.
                <br />
                4 years of professional experience, with focus in full-stack web
                development and mobile app development utilising React
                Native/React/NodeJS.
                <br />
                Bachelors degree in Computer Science.
              </p>
              </article>
            </Grid>
          </Section>
        </Section>
        <Section fullWidth>
          <Section>
            <Grid
              columns={{
                desktop: 2,
                tablet: 1,
                smallTablet: 1,
                mobile: 1,
                smallMobile: 1,
              }}
            >
              {
                EmploymentContent.map(({ company, dates, image, jobTitle, bullets }) => (
                  <ImageCard
                    image={{ src: image, alt: company }}
                    headerLeft={<h2>{company}</h2>}
                    headerRight={<small style={{ color: "grey" }}>{dates}</small>}
                    title={<h2>{jobTitle}</h2>}
                    paragraphs={bullets}
                    useDropdown
                    isList
                  />
                ))
              }
            </Grid>
          </Section>
        </Section>
    </Page>
  );
};

export default withTheme(Resume);
