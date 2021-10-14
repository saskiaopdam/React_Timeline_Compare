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

const Main = styled.main`
  padding: 20px;
`;

const Paragraph = styled.p`
  text-align: center;
`;

function TimelineC() {
  return (
    <Wrapper>
      <Header>
        <Title>Timeline C</Title>
      </Header>
      <Main>
        <Paragraph>Example of Timeline C</Paragraph>
      </Main>
    </Wrapper>
  );
}

export default TimelineC;
