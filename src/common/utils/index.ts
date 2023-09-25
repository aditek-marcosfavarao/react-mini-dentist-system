import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type DateFormat = 'simple' | 'complete'

export function formatDate(
  date: Date = new Date(),
  dateFormat: DateFormat = 'simple',
  dateHours = false,
) {
  const dateExtension = {
    simple: "dd'/'MM'/'yyyy",
    complete: "dd 'de' MMMM 'de' yyyy",
  } as const

  return format(
    date,
    `${dateExtension[dateFormat]} ${dateHours ? "'-' HH:mm 'hrs'" : ''}`,
    {
      locale: ptBR,
    },
  )
}
