import styled from "styled-components/macro";

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

function TimelineD() {
  return (
    <Wrapper>
      <Header>
        <Title>Timeline D</Title>
        <SubTitle>react-vertical-timeline-component</SubTitle>
      </Header>
      <Main>
        <Paragraph>Example of Timeline D</Paragraph>
      </Main>
    </Wrapper>
  );
}

export default TimelineD;
