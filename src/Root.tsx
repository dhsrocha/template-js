import { Style } from "@src/Style";
import * as React from "react";

type Props = Record<string, unknown>;

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
export const Root: React.FC<Props> = () => (
  <>
    <Style>
      <h1>Root</h1>
    </Style>
  </>
);
