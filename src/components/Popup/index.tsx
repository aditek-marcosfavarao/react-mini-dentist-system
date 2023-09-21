import { VariantColor, CustomButton, PopupWrapper } from './styles'

interface PopupProps {
  title: string
  nameButton: string
  buttonColorVariant: VariantColor
  onClose: () => void
  id: string
  children: React.ReactNode
}
export function Popup({
  title,
  nameButton,
  buttonColorVariant,
  onClose,
  id = 'modal',
  children,
}: PopupProps) {
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === id) onClose()
  }

  return (
    <PopupWrapper>
      <div id={id} className="popupWrapper" onClick={handleOutsideClick}>
        <div className="popup">
          <div>
            <h2>{title}</h2>
            <div className="content">{children}</div>
            <div className="buttons">
              <button className="buttonCancel" onClick={onClose}>
                Cancelar
              </button>
              <CustomButton variant={buttonColorVariant}>
                {nameButton}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </PopupWrapper>
  )
}
