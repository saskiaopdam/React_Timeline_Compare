import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import styled from "styled-components/macro";

import Timeline0 from "./Timeline0";
import TimelineA from "./TimelineA";
import TimelineB from "./TimelineB";
import TimelineC from "./TimelineC";
import TimelineD from "./TimelineD";

const Wrapper = styled.main`
  flex-grow: 1;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: darkgray;
  color: white;
`;

const Li = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

function Main() {
  return (
    <Wrapper>
      <Router>
        <Nav>
          <Li>
            <StyledLink to="/0">Timeline 0</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/A">Timeline A</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/B">Timeline B</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/C">Timeline C</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/D">Timeline D</StyledLink>
          </Li>
        </Nav>

        <Switch>
          <Route path="/0" component={Timeline0}></Route>
          <Route path="/A" component={TimelineA}></Route>
          <Route path="/B" component={TimelineB}></Route>
          <Route path="/C" component={TimelineC}></Route>
          <Route path="/D" component={TimelineD}></Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default Main;
