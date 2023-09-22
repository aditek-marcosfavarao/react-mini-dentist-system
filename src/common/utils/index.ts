import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDate(
  date: Date = new Date(),
  dateFormat: 'simple' | 'complete' | 'verySimple' = 'simple',
) {
  const dateExtension = {
    simple: "dd'/'MM'/'yyyy",
    complete: "dd 'de' MMMM 'de' yyyy",
    verySimple: "dd'/'MM'/'yyyy",
  } as const

  if (dateFormat !== 'verySimple') {
    return format(date, `${dateExtension[dateFormat]} '-' HH:mm 'hrs'`, {
      locale: ptBR,
    })
  } else {
    return format(date, dateExtension[dateFormat], {
      locale: ptBR,
    })
  }
}
