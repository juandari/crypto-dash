export const innerJoin = (
  xs: any[] | undefined,
  ys: any[] | undefined,
  primary: string,
  foreign: string,
  sel: any
) => {
  const ix = xs?.reduce((ix, row) => ix.set(row[primary], row), new Map())
  return ys?.map((row) => sel(ix.get(row[foreign]), row))
}
