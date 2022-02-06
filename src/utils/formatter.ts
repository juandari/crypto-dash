export const formatCurrency = (num: number, digits: number = 2): string => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
  ]

  var item = lookup.reverse().find(function (item) {
    return num >= item.value
  })

  if (item?.symbol === 'k') {
    return `${'$'}${num.toFixed(digits).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
  }

  return item
    ? `${'$'}${(num / item.value).toFixed(digits)}` + item.symbol
    : '$0'
}
