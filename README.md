This is a Crypto Dashboard app called Crypto Dash. You can this [`link`]('google.com')

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Improvements

There are some improvements that can be made in the future, such as:

- Use the correct logo link for each crypto. Right now I use bitcoin logo url for all of the cypto coin listed because the logo url from binance api return error.
- Get market cap data from another api because binance does not provide market cap information for each coin.
- Create better semantic html elements for ResponsiveTable component for better human- and machine-readable output.
- Better API which accepts page count and data limit so that FE don't need to handle the pagination data on the client.
