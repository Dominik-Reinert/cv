/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useStyleContext } from "../style_context/use_style_context";

export function Navbar(): JSX.Element {
  const styleContext = useStyleContext();
  return (
    <div
      css={css`
        label: navbar;

        display: flex;
        padding: ${styleContext.padding.navbar};

        .name-wrapper {
          flex: 12 0 0;
          font-size: ${styleContext.sizes.font.subHeadline};
        }

        .link-wrapper {
          display: flex;
          flex: 1 0 400px;
          font-size: ${styleContext.sizes.font.text};
        }

        .first-name {
          margin-right: 8px;
          color: ${styleContext.shades.selectedText};
        }

        .last-name {
          color: ${styleContext.colors.highlight};
        }

        .link {
          height: 100%;
          flex: 1 0 0;
          display: inline-flex;
          align-items: center;
        }
      `}
    >
      <div className="name-wrapper">
        <span className="first-name">Dominik</span>
        <span className="last-name">Reinert</span>
      </div>
      <div className="link-wrapper">
        <span className="link">Home</span>
        <span className="link">Resume</span>
        <span className="link">Contact</span>
      </div>
    </div>
  );
}
