export function extractDate(date: Date): string {
  let daysArray = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  let day = daysArray[date.getDay()]
  return `${day} ${date.getDate()}`
}