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

function TimelineA() {
  return (
    <Wrapper>
      <Header>
        <Title>Timeline A</Title>
      </Header>
      <Main>
        <Paragraph>Example of Timeline A</Paragraph>
        <h3>1. Website</h3>
        <p>April 2021</p>
        <p>First Winc Academy front-end assignment.</p>
        <p>
          I learned how to make a web site using a mobile-first approach and
          semantic HTML, and received useful feedback on how to apply the right
          indentation and to neatly organise all files. The web site had to
          cover a clearly outlined topic and to contain multiple pages, images
          and a form. We had to demonstrate understanding of the box-model and
          use flexbox or grid for positioning.
        </p>
        <p>Stack: HTML, CSS</p>
        <a href="https://vibrant-bohr-d9a9ff.netlify.app" target="_blank">
          Site on Netlify
        </a>
        <a
          href="https://github.com/saskiaopdam/Winc_Assignment_1_Website"
          target="_blank"
        >
          Code on GitHub
        </a>

        <h3>2A. Testimonial</h3>
        <p>April 2021</p>
        <p>Second Winc Academy front-end assignment - level 1.</p>
        <p>
          Code to design, applying Sass and BEM principle. The challenge with
          the testimonial was to position the image correctly and approach the
          styling of the example as much as possible.
        </p>
        <p>Stack: HTML, CSS, SCSS</p>
        <a
          href="https://amazing-cori-c6ed26.netlify.app"
          target="_blank"
          target="_blank"
        >
          Site on Netlify
        </a>
        <a
          href="https://github.com/saskiaopdam/Winc_Assignment_2A_Testimonial"
          target="_blank"
        >
          Code on GitHub
        </a>

        <h3>2B. Portfolio grid</h3>
        <p>April 2021</p>
        <p>Second Winc Academy front-end assignment - level 2.</p>
        <p>
          Code to design, applying Sass and BEM principle. The challenge with
          the portfolio grid was to apply a hover effect and make the grid
          responsive with 1, 2 and 3 columns respectively for mobile, tablet and
          desktop.
        </p>
        <p>Stack: HTML, CSS, SCSS</p>
        <a
          href="https://upbeat-goodall-bb4ec2.netlify.app"
          target="_blank"
          target="_blank"
        >
          Site on Netlify
        </a>
        <a
          href="https://github.com/saskiaopdam/Winc_Assignment_2B_Portfolio_Grid"
          target="_blank"
        >
          Code on GitHub
        </a>

        <h3>2C. Social media buttons</h3>
        <p>April 2021</p>
        <p>Second Winc Academy front-end assignment - level 3.</p>
        <p>
          Code to design, applying Sass and BEM principle. The challenge with
          the social media buttons was to make them slide inside the browser
          window when hovered.
        </p>
        <p>Stack: HTML, CSS, SCSS</p>
        <a
          href="https://pensive-ptolemy-d5c4c6.netlify.app"
          target="_blank"
          target="_blank"
        >
          Site on Netlify
        </a>
        <a
          href="https://github.com/saskiaopdam/Winc_Assignment_2C_Social_Media_Buttons"
          target="_blank"
        >
          Code on GitHub
        </a>
      </Main>
    </Wrapper>
  );
}

export default TimelineA;
