import styled from "styled-components/macro";

import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";

const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#262626",
  borderDotColor: "#d0cdc4",
  titleColor: "#405b73",
  subtitleColor: "#bf9765",
  textColor: "#262626",
};

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

function TimelineB() {
  return (
    <Wrapper>
      <Header>
        <Title>Timeline B</Title>
        <SubTitle>vertical-timeline-component-react</SubTitle>
      </Header>
      <Main>
        <Paragraph>Example of Timeline B</Paragraph>
        <Timeline theme={customTheme} dateFormat="ll">
          <Container>
            <YearContent startDate="2020/07/01" currentYear />
            <BodyContent>
              <Section title="Website">
                <Description
                  variant="subtitle"
                  text="First Winc Academy front-end assignment"
                />
                <Description
                  text="I learned how to make a website using a mobile-first approach and
          semantic HTML, and received useful feedback on how to apply the right
          indentation and to neatly organise all files. The website had to cover
          a clearly outlined topic and to contain multiple pages, images and a
          form. We had to demonstrate understanding of the box-model and use
          flexbox or grid for positioning."
                />
                <Description text="Stack: HTML, CSS" />
              </Section>

              <Section title="Another title">
                <Description text="Description" />
                <Description text="Another description" />
              </Section>
            </BodyContent>
          </Container>
        </Timeline>
      </Main>
    </Wrapper>
  );
}

export default TimelineB;
