import React from "react";
import Page from "../../atoms/Page";
import Section from "../../atoms/Section";
import Vodafone3 from "../../../assets/images/vodafone3.svg";
import giffgaff2 from "../../../assets/images/giffgaff2.webp";
import Grid from "../../atoms/Grid";
import ImageCard from "../../molecules/ImageCard";
import styled, { withTheme } from "styled-components";
import Header from "../../atoms/Header";
import GridCard from "../../atoms/GridCard";

// const Headings = [
//   "Design Driven",
//   "User Driven",
//   "Full Stack",
//   "Passionate",
//   "4 Years In Industry",
//   "...and more",
// ];

const Pill = styled.p`
  background-color: ${({ theme }) => theme.secondary};
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  white-space: nowrap;
  margin: 10px 0px;
`;

const EmploymentContent = [
  {
    company: "Vodafone",
    dates: "Aug 2022 - Present",
    jobTitle: "Software Engineer",
    image: Vodafone3,
    bullets: [
      "Designed architecture and led project to overhaul front end notification handling to be more reusable, and increase development speed of engineers.",
      "Built and deployed custom React components, reusable helper functions, etc.",
      "Liaised with backend engineers to formulate data structures for efficient cross-stack data handling.",
    ],
  },
  {
    company: "giffgaff",
    dates: "Sept 2019 - June 2022",
    jobTitle: "Software Engineer",
    image: giffgaff2,
    bullets: [
      "Led implementation of 'Help and Search' section into giffgaff mobile application, featuring live chat (React Native,Typescript, Redux, GraphQL).",
      "Built and monitored NodeJS service to serve React components, utilising Hypernova (Javascript).",
      "Assisted in the building, improvement and technology-wide uptake of React component library (including Jest unit testing, Storybook).",
      "Communicated with and managed expectations of stakeholders while working in agile environment, and delivering iterative improvements to products.",
    ],
  },
];

const Resume = ({ theme }: { theme?: any }) => {
  return (
    <Page>
      <Header title="Resume" bgColor={theme.body} />

      <Section>
        {/* <Grid columns={{ desktop: 2, tablet: 2, smallTablet: 2, mobile: 1, smallMobile: 1 }}> */}
        {/* <h1>Hey, I'm Harry!</h1> */}
        <p style={{ textAlign: "center" }}>
          Design and user-driven software engineer with a focus in full-stack
          web and mobile development. <br />
          Passionate about leveraging my skill-set to deliver solutions at
          scale.
          <br />4 years of professional experience.
        </p>
        {/* <br/> */}
        {/* <Button text='Contact me' href='#footer'/> */}

        {/* </Grid> */}
      </Section>

      <Section bgColor={theme.secondary} fullWidth>
        <Section>
          <article>
            <h1
              style={{
                textDecorationStyle: "wavy",
                textDecorationLine: "underline",
                color: theme.accent,
                paddingBottom: 20,
                textUnderlineOffset: 20,
                textDecorationThickness: 6,
              }}
            >
              Experience
            </h1>
          </article>
        </Section>
      </Section>

      <Section fullWidth>
        <Section column>
          <Grid
            columns={{
              desktop: 2,
              tablet: 1,
              smallTablet: 1,
              mobile: 1,
              smallMobile: 1,
            }}
          >
            {EmploymentContent.map(
              ({ company, dates, image, jobTitle, bullets }) => (
                <div>
                  <ImageCard
                    image={{ src: image, alt: company }}
                    headerLeft={<p>{company}</p>}
                    headerRight={
                      <small style={{ color: "grey" }}>{dates}</small>
                    }
                    title={<h2>{jobTitle}</h2>}
                    paragraphs={bullets}
                    isList
                  />
                </div>
              )
            )}
          </Grid>
        </Section>
      </Section>

      <Section bgColor={theme.secondary} fullWidth>
        <Section>
          <article>
            <h1
              style={{
                textDecorationStyle: "wavy",
                textDecorationLine: "underline",
                color: theme.accent,
                paddingBottom: 20,
                textUnderlineOffset: 20,
                textDecorationThickness: 6,
              }}
            >
              Education
            </h1>
          </article>
        </Section>
      </Section>

      <Section>
        <Grid
          columns={{
            desktop: 2,
            tablet: 2,
            smallTablet: 2,
            mobile: 1,
            smallMobile: 1,
          }}
        >
          <GridCard raisedCard>
            <h2>
              Loughborough University <br />
              <small>BSc Computer Science</small>
            </h2>
            <br />
            <p>
              Graduated from Loughborough University with a Bachelors degree in
              Computer Science; Classification 2:1.
            </p>
          </GridCard>

          <GridCard raisedCard>
            <h2>
              St. Mary's Secondary <br />
              <small>A-Levels</small>
            </h2>
            <br />
            <Pill>Mathematics • A</Pill>
            <Pill>Physics • A</Pill>
            <Pill>Biology • B</Pill>
          </GridCard>
        </Grid>
      </Section>
    </Page>
  );
};

export default withTheme(Resume);
