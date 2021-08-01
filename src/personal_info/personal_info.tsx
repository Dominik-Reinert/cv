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

        color: ${style.colors.cardBackground};

        flex: 12 0 0;

        .top {
          height: calc(61.8% - 2 * 16px);
          position: relative;
        }

        .background-wrapper {
          height: 100%;
        }

        .foreground-wrapper {
          position: absolute;

          top: 0;
          left: 0;

          display: flex;

          height: 100%;
          width: 100%;

          .left {
            flex: 6 0 0;

            height: 100%;
            display: flex;
            margin-left: 60px;

            .profile-pic-wrapper {
              border-radius: 50%;
              overflow: hidden;
              border: 4px solid ${style.colors.cardBackground};
              height: 240px;
              width: 240px;
              margin: auto;

              img {
                height: 100%;
                width: 100%;
              }
            }
          }

          .right {
            flex: 12 0 0;

            display: flex;
            flex-direction: column;
            text-align: center;

            margin-right: 60px;
            height: 100%;

            justify-content: center;

            .name {
              font-size: ${style.sizes.font.headline};
              margin: 4px 0;
            }

            .job-title {
              font-size: ${style.sizes.font.subHeadline};
              margin: 4px 0;
            }
          }
        }

        .bottom {
          height: 38.2%;
          color: ${style.shades.text};
          font-size: ${style.sizes.font.text};
          margin: 16px;
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
          <div className="left">
            <div className="profile-pic-wrapper">
              <img src="profile.jpg" />
            </div>
          </div>
          <div className="right">
            <span className="name">Dominik Reinert</span>
            <span className="job-title">{t("jobTitle")}</span>
            <div className="social-media">{t("details")}</div>
          </div>
        </div>
      </div>
      <div className="bottom">details</div>
    </div>
  );
}
