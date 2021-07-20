/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useStyleContext } from "../style_context/use_style_context";

interface CardProps {
  children: React.ReactElement;
}

export function Card(props: CardProps): JSX.Element {
  const styleContext = useStyleContext();
  return (
    <div
      css={css`
        label: card;

        width: ${styleContext.sizes.width.content};
        min-height: 80%;
        margin: auto;
        background-color: ${styleContext.colors.cardBackground};

        border-radius: 20px;
        padding: 16px;
        box-shadow: 2px 5px 5px 2px ${styleContext.shades.boxShadow};
      `}
    >
      {props.children}
    </div>
  );
}
