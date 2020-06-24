import { Style } from "@src/Style";
import { default as styled } from "styled-components";

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
export const Root: React.FC<Record<string, unknown>> = () => (
  <>
    <Style>
      <Label>Root</Label>
    </Style>
  </>
);

const Label = styled.h1`
  user-select: none;
`;