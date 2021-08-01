/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { createDividedCard } from "../divided_card_hoc/divided_card";
import { useStyleContext } from "../style_context/use_style_context";

export const Resume = createDividedCard(
  (props) => {
    const { t } = useTranslation("resume");
    const styleContext = useStyleContext();
    const style = css`
      label: resume;

      height: 100%;

      .title {
        color: ${styleContext.colors.cardBackground};
        font-size: ${styleContext.sizes.font.subHeadline};
        height: 100%;
        padding: 16px;
      }
    `;
    return (
      <div css={style}>
        <div className="top">
          <div className="title">{t("title")}</div>
        </div>
        <div className="bottom">world</div>
      </div>
    );
  },
  {
    cssLabel: "resume",
    topHeight: "10%",
  }
);
