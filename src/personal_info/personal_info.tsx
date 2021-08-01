/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useTranslation } from "react-i18next";
import Particles from "react-particles-js";
import { useStyleContext } from "../style_context/use_style_context";

export function PersonalInfo(): JSX.Element {
  const style = useStyleContext();
  const { t } = useTranslation("personalInfo");
  return (
    <div
      css={css`
        label: personal-info;

        color: ${style.colors.highlight};

        flex: 12 0 0;

        .top {
          height: calc(61.8% - 2 * 16px);
        }

        .bottom {
          height: 38.2%;
        }

        .background-wrapper {
          height: 100%;
        }

        #tsparticles {
          height: 100%;
        }
      `}
    >
      <div className="top">
        <div className="background-wrapper">
          <Particles
            height={"100%"}
            params={{
              particles: { move: { enable: true, speed: 0.3 } },
              background: {
                color: { value: style.colors.highlight },
              },
            }}
          />
        </div>
        <div className="foreground-wrapper">
          <span>Dominik Reinert</span>
          <span>{t("jobTitle")}</span>
          <div>Social media buttons</div>
        </div>
      </div>
      <div className="bottom">details</div>
    </div>
  );
}
