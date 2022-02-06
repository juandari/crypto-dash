export function distinctArrayOfStrings(arr: any[], field: string): string[] {
  const result: string[] = []
  arr.forEach((item: any) => {
    item[field].forEach((val: string) => result.push(val))
  })
  return [...new Set(result)]
}
