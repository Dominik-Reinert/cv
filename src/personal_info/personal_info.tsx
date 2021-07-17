/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useStyleContext } from "../style_context/use_style_context";

export function PersonalInfo(): JSX.Element {
  const style = useStyleContext();
  return (
    <div
      css={css`
        label: personal-info;

        color: ${style.colors.highlight};
      `}
    >
      Hello, personal info!
    </div>
  );
}
