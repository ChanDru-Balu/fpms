export interface asset {
    assetClass: assetClass ,
    amountInvested: number ,
    percentage: number
}

export enum assetClass  {
    EQUITIES = 'Equities',
    BONDS = 'Bonds',
    REALESTATE = 'Real Estate / REITs',
    CASH = 'Cash / Equivalents',
    COMMODITY = 'Commodities',
    CRYPTO = 'Cryptocurrency',
}