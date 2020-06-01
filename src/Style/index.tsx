import { createGlobalStyle } from "styled-components";
import * as PropTypes from "prop-types";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
  *, *:after, *:before {
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
export const Style: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

Style.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
