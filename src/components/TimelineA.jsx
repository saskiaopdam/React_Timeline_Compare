import styled from "styled-components/macro";

import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const Wrapper = styled.div`
  padding: 40px;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

const Main = styled.main`
  padding: 20px;
`;

const Paragraph = styled.p`
  text-align: center;
`;

const ProjectTitle = styled.h3`
  color: red;
`;

function TimelineA() {
  return (
    <Wrapper>
      <Header>
        <Title>Timeline A</Title>
        <SubTitle>vertical-timeline-component-for-react</SubTitle>
      </Header>
      <Main>
        <Paragraph>Example of Timeline A</Paragraph>

        <Timeline lineColor={"#ddd"}>
          <TimelineItem
            key="001"
            dateText="April 2021"
            style={{ color: "#e86971" }}
          >
            <ProjectTitle>Website</ProjectTitle>
            <h4>First Winc Academy front-end assignment</h4>
            <p>
              I learned how to make a website using a mobile-first approach and
              semantic HTML, and received useful feedback on how to apply the
              right indentation and to neatly organise all files. The website
              had to cover a clearly outlined topic and to contain multiple
              pages, images and a form. We had to demonstrate understanding of
              the box-model and use flexbox or grid for positioning.
            </p>
            <p>Stack: HTML, CSS</p>
            <a
              href="https://vibrant-bohr-d9a9ff.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Site on Netlify
            </a>
            <br />
            <a
              href="https://github.com/saskiaopdam/Winc_Assignment_1_Website"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </a>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="04/2009 – 11/2010"
            dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
            bodyContainerStyle={{
              background: "#ddd",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3 style={{ color: "#61b8ff" }}>Title, Company</h3>
            <h4 style={{ color: "#61b8ff" }}>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateComponent={
              <div
                style={{
                  display: "block",
                  float: "left",
                  padding: "10px",
                  background: "rgb(150, 150, 150)",
                  color: "#fff",
                }}
              >
                11/2008 – 04/2009
              </div>
            }
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="08/2008 – 11/2008"
            dateInnerStyle={{ background: "#76bb7f" }}
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
        </Timeline>
      </Main>
    </Wrapper>
  );
}

export default TimelineA;
