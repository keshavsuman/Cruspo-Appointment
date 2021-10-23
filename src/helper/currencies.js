const currencies = [{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbcf"
  },
  "symbol": "$",
  "fullName": "United States Dollar",
  "name": "USD",
  "country": "United States of America"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbd0"
  },
  "symbol": "€",
  "fullName": "European Euro",
  "name": "EUR",
  "country": "Europe"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbd1"
  },
  "symbol": "£",
  "fullName": "Pound Sterling",
  "name": "GBP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbd2"
  },
  "symbol": "S$",
  "fullName": "Singapore Dollar",
  "name": "SGD",
  "country": "Singapore"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbd3"
  },
  "symbol": "د.إ",
  "fullName": "United Arab Emirates Dirham",
  "name": "AED",
  "country": "United Arab Emirates"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbd4"
  },
  "symbol": "AU$",
  "fullName": "Australian Dollar",
  "name": "AUD",
  "country": "Australia"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbd5"
  },
  "symbol": "CA$",
  "fullName": "Canadian Dollar",
  "name": "CAD",
  "country": "Canada"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbd6"
  },
  "symbol": "¥",
  "fullName": "Chinese Yuan Renminbi",
  "name": "CNY",
  "country": "China"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbd7"
  },
  "symbol": "Skr",
  "fullName": "Swedish Krona",
  "name": "SEK",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbd8"
  },
  "symbol": "NZ$",
  "fullName": "New Zealand Dollar",
  "name": "NZD",
  "country": "New Zealand"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbd9"
  },
  "symbol": "MX$",
  "fullName": "Mexican Peso",
  "name": "MXN",
  "country": "Mexica"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbda"
  },
  "symbol": "HK$",
  "fullName": "Hong Kong Dollar",
  "name": "HKD",
  "country": "Hong Kong"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbdb"
  },
  "symbol": "Nkr",
  "fullName": "Norwegian Krone",
  "name": "NOK",
  "country": "Norway"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbdc"
  },
  "symbol": "₽",
  "fullName": "Russian Ruble",
  "name": "RUB",
  "country": "Russia"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbdd"
  },
  "symbol": "so'm",
  "fullName": "Uzbekistani Som",
  "name": "UZS",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbde"
  },
  "symbol": "$U",
  "fullName": "Uruguayan Peso",
  "name": "UYU",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbdf"
  },
  "symbol": "TSh",
  "fullName": "Tanzanian Shilling",
  "name": "TZS",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbe0"
  },
  "symbol": "YR",
  "fullName": "Yemeni Rial",
  "name": "YER",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbe1"
  },
  "symbol": "R",
  "fullName": "South African Rand",
  "name": "ZAR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbe2"
  },
  "symbol": "GH₵",
  "fullName": "Ghanaian Cedi",
  "name": "GHS",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbe3"
  },
  "symbol": "Lek",
  "fullName": "Albanian Lek",
  "name": "ALL",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbe4"
  },
  "symbol": "֏",
  "fullName": "Armenian Dram",
  "name": "AMD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbe5"
  },
  "symbol": "AR$",
  "fullName": "Argentine Peso",
  "name": "ARS",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbe6"
  },
  "symbol": "ƒ",
  "fullName": "Aruban Florin",
  "name": "AWG",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbe7"
  },
  "symbol": "Bds$",
  "fullName": "Barbadian Dollar",
  "name": "BBD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbe8"
  },
  "symbol": "Tk",
  "fullName": "Bangladeshi Taka",
  "name": "BDT",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbe9"
  },
  "symbol": "$",
  "fullName": "Bermudian Dollar",
  "name": "BMD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbea"
  },
  "symbol": "BN$",
  "fullName": "Brunei Dollar",
  "name": "BND",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbeb"
  },
  "symbol": "Bs",
  "fullName": "Bolivian Boliviano",
  "name": "BOB",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbec"
  },
  "symbol": "B$",
  "fullName": "Bahamian Dollar",
  "name": "BSD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbed"
  },
  "symbol": "PKRs",
  "fullName": "Botswana Pula",
  "name": "BWP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbee"
  },
  "symbol": "BZ$",
  "fullName": "Belize Dollar",
  "name": "BZD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbef"
  },
  "symbol": "CHF",
  "fullName": "Swiss Franc",
  "name": "CHF",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbf0"
  },
  "symbol": "CO$",
  "fullName": "Colombian Peso",
  "name": "COP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbf1"
  },
  "symbol": "₡",
  "fullName": "Costa Rican Colon",
  "name": "CRC",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbf2"
  },
  "symbol": "$",
  "fullName": "Cuban Peso",
  "name": "CUP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbf3"
  },
  "symbol": "Kč",
  "fullName": "Czech Koruna",
  "name": "CZK",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbf4"
  },
  "symbol": "Dkr",
  "fullName": "Danish Krone",
  "name": "DKK",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbf5"
  },
  "symbol": "RD$",
  "fullName": "Dominican Peso",
  "name": "DOP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbf6"
  },
  "symbol": "DA",
  "fullName": "Algerian Dinar",
  "name": "DZD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbf7"
  },
  "symbol": "EGP",
  "fullName": "Egyptian Pound",
  "name": "EGP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbf8"
  },
  "symbol": "Br",
  "fullName": "Ethiopian Birr",
  "name": "ETB",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbf9"
  },
  "symbol": "FJ$",
  "fullName": "Fijian Dollar",
  "name": "FJD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbfa"
  },
  "symbol": "£",
  "fullName": "Gibraltar Pound",
  "name": "GIP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbfb"
  },
  "symbol": "D",
  "fullName": "Gambian Dalasi",
  "name": "GMD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbfc"
  },
  "symbol": "GTQ",
  "fullName": "Guatemalan Quetzal",
  "name": "GTQ",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbfd"
  },
  "symbol": "G$",
  "fullName": "Guyanese Dollar",
  "name": "GYD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbfe"
  },
  "symbol": "HK$",
  "fullName": "Hong Kong Dollar",
  "name": "HKD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfbff"
  },
  "symbol": "HNL",
  "fullName": "Honduran Lempira",
  "name": "HNL",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc00"
  },
  "symbol": "kn",
  "fullName": "Croatian Kuna",
  "name": "HRK",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc01"
  },
  "symbol": "G",
  "fullName": "Haitian Gourde",
  "name": "HTG",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc02"
  },
  "symbol": "Ft",
  "fullName": "Hungarian Forint",
  "name": "HUF",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc03"
  },
  "symbol": "Rp",
  "fullName": "Indonesian Rupiah",
  "name": "IDR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc04"
  },
  "symbol": "₪",
  "fullName": "Israeli New Shekel",
  "name": "ILS",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc05"
  },
  "symbol": "₹",
  "fullName": "Indian Rupee",
  "name": "INR",
  "country": "India"
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc06"
  },
  "symbol": "J$",
  "fullName": "Jamaican Dollar",
  "name": "JMD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc07"
  },
  "symbol": "Ksh",
  "fullName": "Kenyan Shilling",
  "name": "KES",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc08"
  },
  "symbol": "Лв",
  "fullName": "Kyrgyzstani Som",
  "name": "KGS",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc09"
  },
  "symbol": "KHR",
  "fullName": "Cambodian Riel",
  "name": "KHR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc0a"
  },
  "symbol": "$",
  "fullName": "Cayman Islands Dollar",
  "name": "KYD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc0b"
  },
  "symbol": "KZT",
  "fullName": "Kazakhstani Tenge",
  "name": "KZT",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc0c"
  },
  "symbol": "₭",
  "fullName": "Lao Kip",
  "name": "LAK",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc0d"
  },
  "symbol": "LB£",
  "fullName": "Lebanese Pound",
  "name": "LBP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc0e"
  },
  "symbol": "SLRs",
  "fullName": "Sri Lankan Rupee",
  "name": "LKR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc0f"
  },
  "symbol": "L$",
  "fullName": "Liberian Dollar",
  "name": "LRD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc10"
  },
  "symbol": "L",
  "fullName": "Lesotho Loti",
  "name": "LSL",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc11"
  },
  "symbol": "MAD",
  "fullName": "Moroccan Dirham",
  "name": "MAD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc12"
  },
  "symbol": "MDL",
  "fullName": "Moldovan Leu",
  "name": "MDL",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc13"
  },
  "symbol": "MKD",
  "fullName": "Macedonian Denar",
  "name": "MKD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc14"
  },
  "symbol": "K",
  "fullName": "Myanmar Kyat",
  "name": "MMK",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc15"
  },
  "symbol": "₮",
  "fullName": "Mongolian Tugrik",
  "name": "MNT",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc16"
  },
  "symbol": "MOP$",
  "fullName": "Macanese Pataca",
  "name": "MOP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc17"
  },
  "symbol": "MURs",
  "fullName": "Mauritian Rupee",
  "name": "MUR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc18"
  },
  "symbol": "Rf",
  "fullName": "Maldivian Rufiyaa",
  "name": "MVR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc19"
  },
  "symbol": "MK",
  "fullName": "Malawian Kwacha",
  "name": "MWK",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc1a"
  },
  "symbol": "RM",
  "fullName": "Malaysian Ringgit",
  "name": "MYR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc1b"
  },
  "symbol": "N$",
  "fullName": "Namibian Dollar",
  "name": "NAD",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc1c"
  },
  "symbol": "₦",
  "fullName": "Nigerian Naira",
  "name": "NGN",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc1d"
  },
  "symbol": "C$",
  "fullName": "Nicaraguan Cordoba",
  "name": "NIO",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc1e"
  },
  "symbol": "Nkr",
  "fullName": "Norwegian Krone",
  "name": "NOK",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc1f"
  },
  "symbol": "NPRs",
  "fullName": "Nepalese Rupee",
  "name": "NPR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc20"
  },
  "symbol": "S/",
  "fullName": "Peruvian Sol",
  "name": "PEN",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc21"
  },
  "symbol": "K",
  "fullName": "Papua New Guinean Kina",
  "name": "PGK",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc22"
  },
  "symbol": "₱",
  "fullName": "Philippine Peso",
  "name": "PHP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc23"
  },
  "symbol": "PKRs",
  "fullName": "Pakistani Rupee",
  "name": "PKR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc24"
  },
  "symbol": "ر.ق",
  "fullName": "Qatari Riyal",
  "name": "QAR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc25"
  },
  "symbol": "SR",
  "fullName": "Saudi Arabian Riyal",
  "name": "SAR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc26"
  },
  "symbol": "SRe",
  "fullName": "Seychellois Rupee",
  "name": "SCR",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc27"
  },
  "symbol": "Le",
  "fullName": "Sierra Leonean Leone",
  "name": "SLL",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc28"
  },
  "symbol": "Ssh",
  "fullName": "Somali Shilling",
  "name": "SOS",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc29"
  },
  "symbol": "£",
  "fullName": "South Sudanese Pound",
  "name": "SSP",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc2a"
  },
  "symbol": "₡",
  "fullName": "Salvadoran Colón",
  "name": "SVC",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc2b"
  },
  "symbol": "L",
  "fullName": "Swazi Lilangeni",
  "name": "SZL",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc2c"
  },
  "symbol": "฿",
  "fullName": "Thai Baht",
  "name": "THB",
  "country": ""
},{
  "_id": {
    "$oid": "601e72eb12c841fbc38cfc2d"
  },
  "symbol": "TT$",
  "fullName": "Trinidad and Tobago Dollar",
  "name": "TTD",
  "country": ""
}];

export default currencies;