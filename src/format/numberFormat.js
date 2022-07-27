export function numberFormat(number){
   return new Intl.NumberFormat(['ban', 'id']).format(number)
}