import styled, { css } from 'styled-components'

const SIZE_AVATAR = {
  small: '5rem',
  mid: '6rem',
  large: '17rem',
} as const

const FONTSIZE_AVATAR = {
  small: '2rem',
  large: '5rem',
} as const

const COLORS_AVATAR = {
  gray: 'gray',
  white: 'white',
  green: 'green-500',
} as const

export type VariantSize = keyof typeof SIZE_AVATAR
export type VariantFontSize = keyof typeof FONTSIZE_AVATAR
export type VariantColor = keyof typeof COLORS_AVATAR

interface LetterProps {
  hasMargin: boolean
  contentLetter: string
  variantSize: VariantSize
  variantFontSize: VariantFontSize
  variantColorBackground: VariantColor
  variantColorBorder: VariantColor
  variantColorLetter: VariantColor
}

export const AvatarContainer = styled.div<LetterProps>`
  z-index: 1;
  background-color: ${(props) =>
    props.theme[COLORS_AVATAR[props.variantColorBackground]]};
  width: ${(props) => SIZE_AVATAR[props.variantSize]};
  height: ${(props) => SIZE_AVATAR[props.variantSize]};
  border-radius: 100%;
  position: relative;
  outline: ${(props) => props.theme[COLORS_AVATAR[props.variantColorBorder]]}
    2px solid;

  ${(props) =>
    props.hasMargin &&
    css`
      margin: 0.5rem 0;
    `}

  &::after {
    content: '${(props) => props.contentLetter}';

    color: ${(props) => props.theme[COLORS_AVATAR[props.variantColorLetter]]};

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    font-size: ${(props) => FONTSIZE_AVATAR[props.variantFontSize]};
    font-weight: 700;
    line-height: 1.6;
  }
  @media (max-width: 480px) {
    background-color: ${(props) =>
      props.theme[COLORS_AVATAR[props.variantColorBackground]]};
    width: ${(props) => props.variantSize === 'large' && '7rem'};
    height: ${(props) => props.variantSize === 'large' && '7rem'};
    border-radius: 100%;
    position: relative;
    outline: ${(props) => props.theme[COLORS_AVATAR[props.variantColorBorder]]}
      2px solid;

    ${(props) =>
      props.hasMargin &&
      css`
        margin: 0.5rem 0;
      `}

    ${(props) =>
      props.variantSize === 'large' &&
      css`
        margin: 0.5rem 0.5rem;
      `}
    &::after {
      content: '${(props) => props.contentLetter}';

      color: ${(props) => props.theme[COLORS_AVATAR[props.variantColorLetter]]};

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      font-size: ${(props) => props.variantSize === 'large' && '3.5rem'};
      font-weight: 700;
      line-height: 1.6;
    }
  }
`
