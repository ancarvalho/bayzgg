export function extractMonth(date: Date): string {
  let monthsArray = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
  let day = monthsArray[date.getMonth()]
  return `${day} ${date.getDate()}`
}