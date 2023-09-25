import {
  AvatarContainer,
  VariantSize,
  VariantFontSize,
  VariantColor,
} from './styles'

interface AvatarProps {
  hasMargin: boolean
  contentLetter: string
  variantSize: VariantSize
  variantFontSize: VariantFontSize
  variantColorBackground: VariantColor
  variantColorBorder: VariantColor
  variantColorLetter: VariantColor
}

export function Avatar({
  hasMargin,
  contentLetter,
  variantSize,
  variantFontSize,
  variantColorBackground,
  variantColorBorder,
  variantColorLetter,
}: AvatarProps) {
  return (
    <AvatarContainer
      contentLetter={contentLetter}
      hasMargin={hasMargin}
      variantSize={variantSize}
      variantFontSize={variantFontSize}
      variantColorBackground={variantColorBackground}
      variantColorBorder={variantColorBorder}
      variantColorLetter={variantColorLetter}
    />
  )
}
