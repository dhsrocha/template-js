import { FC } from "react";
import styled from "styled-components";

type Props = {};

// Just for example. Should be removed.
const Styled = styled.h1`
  text-align: center;
`;

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
export const Root: FC<Props> = () => <Styled>Root</Styled>;
