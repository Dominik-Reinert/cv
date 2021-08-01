/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useStyleContext } from "../style_context/use_style_context";

interface DividedCardProps {
    cssLabel: string;
    topHeight: string;
}

export function createDividedCard<P>(Component: (props: P) => JSX.Element, dividedCardProps: DividedCardProps): (props:P) =>  JSX.Element {
    return (props: P ) =>{
    const styleContext = useStyleContext();
    const style = css`
        label: ${dividedCardProps.cssLabel}-divided;
        
        width: 100%;

        .top {
            width: 100%;
            height: ${dividedCardProps.topHeight};
            background-color: ${styleContext.colors.highlight};
        }

        .bottom {
            width: 100%;
            height: calc(100% - ${dividedCardProps.topHeight});
            background-color: ${styleContext.colors.cardBackground};
        }
        `
        return<div css={style}><Component {...props} /></div>}
}