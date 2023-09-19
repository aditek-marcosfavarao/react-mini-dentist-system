import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDate(date: Date, dateFormat: 'simple' | 'complete') {
  const dateExtension = {
    simple: "dd'/'MM'/'yyyy",
    complete: "dd 'de' MMMM 'de' yyyy",
  } as const

  const dateFormatted = format(
    date,
    `${dateExtension[dateFormat]} '-' HH:mm 'hrs'`,
    {
      locale: ptBR,
    },
  )

  return dateFormatted
}
