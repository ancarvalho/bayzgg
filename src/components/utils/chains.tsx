export const GetChain = ({ chain }: { chain: string }): JSX.Element => {

  type chains = {
    [key: string]: JSX.Element;
  }

  const chains: chains = {
    "bsc": <abbr title="BSC"> <div className="lazy platformicon Binance loaded" data-loader="bgLoader"></div></abbr>,
    "eth": <abbr title="ETH"><div className="lazy platformicon Ethereum loaded" data-loader="bgLoader"></div></abbr>,
    "polygon": <abbr title="Polygon"><div className="lazy platformicon Polygon loaded" data-loader="bgLoader"></div></abbr>,
    "sol": <abbr title="Solana"><div className="lazy platformicon Solana loaded" data-loader="bgLoader"></div></abbr>,
    "ron": <abbr title="Ronin"><div className="lazy platformicon Ronin loaded" data-loader="bgLoader"></div></abbr>,
    "avax": <abbr title="Avalanche"><div className="lazy platformicon Avalanche loaded" data-loader="bgLoader"></div></abbr>,
    "wemix": <abbr title="Wemix"><div className="lazy platformicon Wemix loaded" data-loader="bgLoader"></div></abbr>,

  }

  if (chains[chain]) {
    return chains[chain]
  } else {
    return (<></>)
  }
}