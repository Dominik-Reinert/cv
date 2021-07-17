/** @jsx jsx */
import { css } from "@emotion/react";
import { useStyleContext } from "../style_context/use_style_context";

export function PersonalInfo(): JSX.Element {
  const style = useStyleContext();
  const cssClass = css`
    label: personal-info;

    color: ${style.colors.highlight};
  `;
  return <div css={cssClass}>Hello, personal info!</div>;
}
