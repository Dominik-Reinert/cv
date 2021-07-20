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

        flex: 12 0 0;

        .top {
          background-color: red;
          padding: 16px;
          height: calc(61.8% - 2 * 16px);
        }

        .bottom {
          height: 38.2%;
        }
      `}
    >
      <div className="top">top</div>
      <div className="bottom">details</div>
    </div>
  );
}
