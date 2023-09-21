import { PopupWrapper } from './styles'

interface PopupProps {
  clicou: string
  handleChangeDisplayElement: () => void
}
export function Popup({ clicou = '', handleChangeDisplayElement }: PopupProps) {
  // console.log('props', clicou)

  return (
    <PopupWrapper>
      <div className="popupWrapper" style={{ display: clicou }}>
        <div className="popup" style={{ display: clicou }}>
          <div>
            <h2>hahaha</h2>
            <p>texto p</p>
            <a href="#" onClick={handleChangeDisplayElement}>
              Cancelar
            </a>
            <a href="#">Deletar</a>
          </div>
        </div>
      </div>
    </PopupWrapper>
  )
}
