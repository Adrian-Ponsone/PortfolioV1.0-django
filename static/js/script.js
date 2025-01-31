const table_ratios = new gridjs.Grid({
    search: true,
    sort: true,
    resizable: true,
    pagination: {
        limit: 15
    },

    style: {
        th: {
            'background-color': '#b8b8b8',
            'color': 'white',
            'text-align': 'center',
        },

        td: {
            'text-align': 'center',
        },

    },

    columns: ["Ticker", "Descripcion", "Sector", "Ratio"],
    data: [ 
            ["MMM", "3M CO", "Industrial", "10:1"],
            ["ABT", "ABBOTT LABORATORIES", "Consumer, Non-cyclical", "4:1"],
            ["ABBV", "ABBVIE INC", "Consumer, Non-cyclical", "10:1"],
            ["ANF", "ABERCROMBIE & FITCH CO-CL A", "Consumer, Cyclical", "1:1"],
            ["ACN", "ACCENTURE PLC", "Technology", "75:1"],
            ["AGRO", "ADECOAGRO SA", "Consumer, Non-cyclical", "1:1"],
            ["ADS", "ADIDAS AG", "Consumer, Cyclical", "22:1"],
            ["ADBE", "ADOBE INC", "Industrial", "10:1"],
            ["AAP", "ADVANCED AUTO PARTS INC", "Financial", "14:1"],
            ["AMD", "ADVANCED MICRO DEVICES", "Technology", "10:1"],
            ["AEG", "AEGON LTD NPV", "Financial", "1:1"],
            ["AEM", "AGNICO EAGLE MINES LTD", "Basic Materials", "6:1"],
            ["BABA", "ALIBABA GROUP HOLDING-SP ADR", "Communications", "9:1"],
            ["GOOGL", "ALPHABET INC-CL A", "Communications", "58:1"],
            ["MO", "ALTRIA GROUP INC", "Consumer, Non-cyclical", "4:1"],
            ["AOCA", "ALUMINUM CORP OF CHINA-ADR", "Basic Materials", "1:1"],
            ["AMZN", "AMAZON.COM INC", "Communications", "144:1"],
            ["ABEV", "AMBEV SA-ADR", "Consumer, Non-cyclical", "1:3"],
            ["AMX", "AMERICA MOVIL-SPN ADR", "Communications", "1:1"],
            ["AAL", "AMERICAN AIRLINES GROUP INC", "Consumer, Cyclical", "2:1"],
            ["AXP", "AMERICAN EXPRESS CO", "Financial", "15:1"],
            ["AIG", "AMERICAN INTERNATIONAL GROUP", "Financial", "5:1"],
            ["AMGN", "AMGEN INC", "Consumer, Non-cyclical", "30:1"],
            ["ADI", "ANALOG DEVICES INC", "Technology", "15:1"],
            ["AAPL", "APPLE INC", "Technology", "20:1"],
            ["AMAT", "APPLIED MATERIALS INC", "Technology", "5:1"],
            ["ARCO", "ARCOS DORADOS HOLDINGS INC-A", "Consumer, Cyclical", "1:2"],
            ["AZN", "ASTRAZENECA", "Consumer, Non-cyclical", "2:1"],
            ["T", "AT&T INC", "Communications", "3:1"],
            ["ADP", "AUTOMATIC DATA PROCESSING", "Consumer, Non-cyclical", "6:1"],
            ["AVY", "AVERY DENNISON CORP", "Consumer, Non-cyclical", "18:1"],
            ["CAR", "AVIS BUDGET GROUP INC", "Consumer, Non-cyclical", "26:1"],
            ["BIDU", "BAIDU INC - SPON ADR", "Communications", "11:1"],
            ["BBVA", "BANCO BILBAO VIZCAYA-SP ADR", "Financial", "1:1"],
            ["BBD", "BANCO BRADESCO-ADR", "Financial", "1:1"],
            ["BSBR", "BANCO SANTANDER BRASIL-ADS", "Financial", "1:1"],
            ["SAN", "BANCO SANTANDER SA-SPON ADR", "Financial", "1:4"],
            ["BAC", "BANK OF AMERICA CORP", "Financial", "4:1"],
            ["BK", "BANK OF NEW YORK MELLON CORP", "Financial", "2:1"],
            ["BCS", "BARCLAYS PLC-SPONS ADR", "Financial", "1:1"],
            ["GOLD", "BARRICK GOLD CORP", "Basic Materials", "2:1"],
            ["BAS GR", "BASF SE", "Basic Materials", "2:1"],
            ["BAY GR", "BAYER AG-REG", "Consumer, Non-cyclical", "3:1"],
            ["BRK.B", "BERKSHIRE HATHAWAY INC-CL B", "Financial", "22:1"],
            ["BHP", "BHP GROUP LTD-SPON ADR", "Basic Materials", "2:1"],
            ["BIOX", "BIOCERES CROP SOLUTIONS CORP", "Consumer, Non-cyclical", "1:1"],
            ["BIIB", "BIOGEN INC", "Consumer, Non-cyclical", "13:1"],
            ["BB", "BLACKBERRY LTD", "Technology", "3:1"],
            ["SQ", "BLOCK INC", "Consumer, Non-cyclical", "20:1"],
            ["BA", "BOEING CO/THE", "Industrial", "24:1"],
            ["BKNG", "BOOKING HOLDINGS INC.", "Communications", "700:1"],
            ["BP", "BP PLC-SPONS ADR", "Energy", "5:1"],
            ["LND", "BRASILAGRO - CO BRASILEIRA DE PROPRIEDADES AGRICOLAS", "Consumer, Non-cyclical", "1:1"],
            ["BAK", "BRASKEM SA", "Basic Materials", "2:1"],
            ["BRFS", "BRF SA-ADR", "Consumer, Non-cyclical", "1:3"],
            ["BMY", "BRISTOL-MYERS SQUIBB CO", "Consumer, Non-cyclical", "3:1"],
            ["AVGO", "BROADCOM INC", "Technology", "39:1"],
            ["BG", "BUNGE GLOBAL SA NPV", "Consumer, Non-cyclical", "5:1"],
            ["CAH", "CARDINAL HEALTH INC", "Consumer, Non-cyclical", "3:1"],
            ["CCL", "CARNIVAL CORP.", "Consumer, Cyclical", "3:1"],
            ["CAT", "CATERPILLAR INC", "Industrial", "20:1"],
            ["CX", "CEMEX SAB-SPONS ADR PART CER", "Industrial", "1:1"],
            ["EBR", "CENTRAIS ELETRICAS BR-SP ADR", "Utilities", "1:4"],
            ["SCHW", "CHARLES SCHWAB CORP.", "Financial", "20:1"],
            ["CVX", "CHEVRON CORP", "Energy", "16:1"],
            ["CBD", "CIA BRASILEIRA DE DIS- ADR", "Consumer, Non-cyclical", "1:1"],
            ["SBS", "CIA SANEAMENTO BASICO DE-ADR", "Utilities", "1:2"],
            ["SID", "CIA SIDERURGICA NACL-SP ADR", "Basic Materials", "1:8"],
            ["CSCO", "CISCO SYSTEMS INC", "Communications", "5:1"],
            ["C", "CITIGROUP INC", "Financial", "3:1"],
            ["KO", "COCA-COLA CO", "Industrial", "20:1"],
            ["CDE", "COEUR MINING INC", "Basic Materials", "1:1"],
            ["COIN", "COINBASE GLOBAL INC", "Financial", "27:1"],
            ["CL", "COLGATE-PALMOLIVE CO", "Consumer, Non-cyclical", "3:1"],
            ["ELP", "COMPANHIA PARANAENSE DE ENERGIA-COPEL - PREF.", "Utilities", "1:3"],
            ["GLW", "CORNING INC", "Communications", "4:1"],
            ["CAAP", "CORP AMERICA AIRPORTS SA", "Consumer, Non-cyclical", "1:4"],
            ["COST", "COSTCO WHOLESALE CORP", "Consumer, Cyclical", "48:1"],
            ["CVS", "CVS HEALTH CORP.", "Consumer, Non-cyclical", "15:1"],
            ["BSN GR", "DANONE", "Consumer, Non-cyclical", "20:1"],
            ["DE", "DEERE & CO", "Industrial", "40:1"],
            ["DAL", "DELTA AIR LINES INC.", "Consumer, Cyclical", "8:1"],
            ["DESP", "DESPEGAR.COM CORP", "Communications", "1:1"],
            ["DTEA GR", "DEUTSCHE TELEKOM AG-SPON ADR", "Communications", "3:1"],
            ["DEO", "DIAGEO PLC-SPONSORED ADR", "Consumer, Non-cyclical", "6:1"],
            ["DOCU", "DOCUSIGN INC", "Technology", "22:1"],
            ["DOW", "DOW INC", "Basic Materials", "6:1"],
            ["DD", "DUPONT DE NEMOURS INC", "Basic Materials", "5:1"],
            ["EOAN GR", "E.ON SE", "Utilities", "6:1"],
            ["EBAY", "EBAY INC", "Communications", "2:1"],
            ["EA", "ELECTRONIC ARTS INC", "Technology", "14:1"],
            ["LLY", "ELI LILLY & CO", "Consumer, Non-cyclical", "56:1"],
            ["AKO.B", "EMBOTELLADORA ANDINA S.A.", "Consumer, Non-cyclical", "1:1"],
            ["ERJ", "EMBRAER SA-SPON ADR", "Industrial", "1:1"],
            ["E", "ENI SPA-SPONSORED ADR", "Energy", "4:1"],
            ["EFX", "EQUIFAX INC", "Consumer, Non-cyclical", "16:1"],
            ["ERIC", "ERICSSON (LM) TEL-SP ADR", "Communications", "2:1"],
            ["ETSY", "ETSY INC", "Communications", "16:1"],
            ["XOM", "EXXON MOBIL CORP", "Energy", "10:1"],
            ["FNMA", "FANNIE MAE", "Financial", "1:1"],
            ["FDX", "FEDEX CORP", "Industrial", "10:1"],
            ["RACE", "FERRARI NV", "Consumer, Cyclical", "83:1"],
            ["FSLR", "FIRST SOLAR INC", "Energy", "18:1"],
            ["FMX", "FOMENTO ECONOMICO MEX-SP ADR", "Consumer, Non-cyclical", "6:1"],
            ["FMCC", "FREDDIE MAC", "Financial", "1:1"],
            ["FCX", "FREEPORT-MCMORAN INC", "Basic Materials", "3:1"],
            ["GRMN", "GARMIN LTD", "Industrial", "3:1"],
            ["OGZPY", "GAZPROM PJSC-SPON ADR", "Industrial", "20:1"],
            ["GE", "GE AEROSPACE", "Industrial", "8:1"],
            ["GM", "GENERAL MOTORS CO", "Consumer, Cyclical", "6:1"],
            ["GPRK", "GEOPARK LTD", "Energy", "1:1"],
            ["GGB", "GERDAU SA -SPON ADR", "Basic Materials", "1:4"],
            ["GILD", "GILEAD SCIENCES INC", "Consumer, Non-cyclical", "4:1"],
            ["GLOB", "GLOBANT SA", "Technology", "18:1"],
            ["GFI", "GOLD FIELDS LTD-SPONS ADR", "Basic Materials", "1:1"],
            ["GS", "GOLDMAN SACHS GROUP INC", "Financial", "13:1"],
            ["PAC", "GRUPO AEROPORTUARIO PAC-ADR", "Industrial", "16:1"],
            ["ASR", "GRUPO AEROPORTUARIO SUR-ADR", "Industrial", "20:1"],
            ["TV", "GRUPO TELEVISA SA-SPON ADR", "Communications", "3:1"],
            ["GSK", "GSK PLC", "Consumer, Non-cyclical", "4:1"],
            ["HAL", "HALLIBURTON CO", "Energy", "2:1"],
            ["HOG", "HARLEY-DAVIDSON INC", "Consumer, Cyclical", "3:1"],
            ["HMY", "HARMONY GOLD MNG-SPON ADR", "Basic Materials", "1:1"],
            ["HDB", "HDFC BANK LTD-ADR", "Financial", "2:1"],
            ["HL", "HECLA MINING CO", "Basic Materials", "1:1"],
            ["HSY", "HERSHEY CO", "Consumer, Non-cyclical", "21:1"],
            ["HD", "HOME DEPOT INC", "Consumer, Cyclical", "32:1"],
            ["HNHPF", "HON HAI PRECISION-GDR REG S", "Industrial", "2:1"],
            ["HMC", "HONDA MOTOR CO LTD-SPONS ADR", "Consumer, Cyclical", "1:1"],
            ["HON", "HONEYWELL INTERNATIONAL INC", "Industrial", "8:1"],
            ["HWM", "HOWMET AEROSPACE INC", "Industrial", "1:1"],
            ["HPQ", "HP INC", "Technology", "1:1"],
            ["HSBC", "HSBC HOLDINGS PLC-SPONS ADR", "Financial", "2:1"],
            ["IBN", "ICICI BANK LTD-SPON ADR", "Financial", "1:1"],
            ["INFY", "INFOSYS LTD-SP ADR", "Technology", "1:1"],
            ["ING", "ING GROEP N.V.-SPONSORED ADR", "Financial", "3:1"],
            ["INTC", "INTEL CORP", "Technology", "5:1"],
            ["IP", "INTERNATIONAL PAPER CO", "Basic Materials", "4:1"],
            ["IBM", "INTL BUSINESS MACHINES CORP", "Technology", "15:1"],
            ["IFF", "INTL FLAVORS & FRAGRANCES", "Basic Materials", "12:1"],
            ["ITUB", "ITAU UNIBANCO H-SPON PRF ADR", "Financial", "1:1"],
            ["JD", "JD.COM INC-ADR", "Communications", "4:1"],
            ["JNJ", "JOHNSON & JOHNSON", "Consumer, Non-cyclical", "15:1"],
            ["JCI", "JOHNSON CONTROLS INTERNATION", "Industrial", "2:1"],
            ["YY", "JOYY INC", "Communications", "5:1"],
            ["JPM", "JPMORGAN CHASE & CO", "Financial", "15:1"],
            ["KB", "KB FINANCIAL GROUP INC-ADR", "Financial", "2:1"],
            ["KMB", "KIMBERLY-CLARK CORP", "Consumer, Non-cyclical", "6:1"],
            ["KGC", "KINROSS GOLD CORP", "Basic Materials", "1:1"],
            ["PHG", "KONINKLIJKE PHILIPS NVR- NY", "Consumer, Non-cyclical", "5:1"],
            ["KEP", "KOREA ELEC POWER CORP-SP ADR", "Utilities", "1:1"],
            ["LRCX", "LAM RESEARCH CORP", "Technology", "56:1"],
            ["LVS", "LAS VEGAS SANDS CORP", "Consumer, Cyclical", "2:1"],
            ["LAC", "LITHIUM AMERICAS CORP", "Technology", "1:1"],
            ["LYG", "LLOYDS BANKING GROUP PLC-ADR", "Financial", "2:1"],
            ["LMT", "LOCKHEED MARTIN CORP", "Industrial", "20:1"],
            ["LUKOY", "LUKOIL PJSC-SPON ADR", "Energy", "4:1"],
            ["MMC", "MARSH & MCLENNAN COS", "Financial", "16:1"],
            ["MRVL", "MARVELL TECHNOLOGY INC", "Basic Materials", "14:1"],
            ["MA", "MASTERCARD INC - A", "Financial", "33:1"],
            ["MCD", "MCDONALD'S CORP", "Consumer, Cyclical", "24:1"],
            ["MUX", "MCEWEN MINING INC", "Basic Materials", "2:1"],
            ["MDT", "MEDTRONIC PLC", "Consumer, Non-cyclical", "4:1"],
            ["MELI", "MERCADOLIBRE INC", "Communications", "120:1"],
            ["MBG GR", "MERCEDES-BENZ GROUP AG", "Consumer, Cyclical", "4:1"],
            ["MRK", "MERCK & CO. INC.", "Consumer, Non-cyclical", "5:1"],
            ["META", "META PLATFORMS INC.", "Communications", "24:1"],
            ["MSFT", "MICROSOFT CORP", "Technology", "30:1"],
            ["MUFG", "MITSUBISHI UFJ FINL-SPON ADR", "Financial", "1:1"],
            ["MFG", "MIZUHO FINANCIAL GROUP-ADR", "Financial", "1:1"],
            ["MBT", "MOBILE TELESYSTEMS-SP ADR", "Communications", "2:1"],
            ["MRNA", "MODERNA INC.", "Consumer, Non-cyclical", "19:1"],
            ["MDLZ", "MONDELEZ INTERNATIONAL, INC.", "Consumer, Non-cyclical", "15:1"],
            ["MSI", "MOTOROLA SOLUTIONS INC", "Communications", "20:1"],
            ["NGG", "NATIONAL GRID PLC-SP ADR", "Utilities", "2:1"],
            ["NTCOY", "NATURA &CO HOLDING-ADR", "Consumer, Non-cyclical", "1:1"],
            ["NEC1 GR", "NEC CORP", "Technology", "1:3"],
            ["NTES", "NETEASE INC-ADR", "Technology", "14:1"],
            ["NFLX", "NETFLIX INC", "Communications", "48:1"],
            ["NEM", "NEWMONT CORP", "Basic Materials", "3:1"],
            ["NKE", "NIKE", "Consumer, Cyclical", "12:1"],
            ["NIO", "NIO INC.", "Consumer, Cyclical", "4:1"],
            ["NSANY", "NISSAN MOTOR CO LTD-SPON ADR", "Consumer, Cyclical", "1:1"],
            ["NOK", "NOKIA", "Communications", "1:1"],
            ["NMR", "NOMURA HOLDINGS", "Financial", "1:1"],
            ["NG", "NOVAGOLD RESOURCES", "Basic Materials", "1:4"],
            ["NVS", "NOVARTIS AG-SPONSORED ADR", "Consumer, Non-cyclical", "4:1"],
            ["NLMK", "NOVOLIPETSK STEEL", "Basic Materials", "2:1"],
            ["NU", "NU HOLDINGS", "Consumer, Cyclical", "2:1"],
            ["NUE", "NUCOR CORP", "Basic Materials", "16:1"],
            ["NVDA", "NVIDIA CORP", "Technology", "24:1"],
            ["ORCL", "ORACLE CORP", "Technology", "3:1"],
            ["ORAN", "ORANGE-SPON ADR", "Communications", "1:1"],
            ["PCAR", "PACCAR INC", "Consumer, Cyclical", "3:1"],
            ["PAGS", "PAGSEGURO DIGITAL LTD", "Technology", "3:1"],
            ["PLTR", "PALANTIR TECHNOLOGIES INC", "Technology", "3:1"],
            ["PAAS", "PAYPAL HOLDINGS INC", "Consumer, Non-cyclical", "8:1"],
            ["PYPL", "CATERPILLAR INC", "Industrial", "20:1"],
            ["PSO", "PEARSON PLC-SPONSORED", "Communications", "1:1"],
            ["PEP", "PEPSICO INC", "Consumer, Non-cyclical", "18:1"],
            ["PBR", "PETROLEO BRASILEIRO", "Energy", "1:1"],
            ["PFE", "PFIZER", "Consumer, Non-cyclical", "4:1"],
            ["PM", "PHILIP MORRIS INTERNATIONAL", "Consumer, Non-cyclical", "18:1"],
            ["PSX", "PHILLIPS 66", "Energy", "6:1"],
            ["PINS", "PINTEREST INC.", "Communications", "7:1"],
            ["PBI", "PITNEY BOWES INC", "Technology", "1:1"],
            ["PKX", "POSCO HONDINGS INC", "Basic Materials", "3:1"],
            ["PG", "PROCTER & GAMBLE CO/THE", "Consumer, Non-cyclical", "15:1"],
            ["QCOM", "QUALCOMM INC", "Technology", "11:1"],
            ["RIO", "RIO TINTO", "Basic Materials", "8:1"],
            ["RIOT", "RIOT PLATFORMS INC.", "Consumer, Non-cyclical", "3:1"],
            ["ROKU", "ROKU INC.", "Communications", "13:1"],
            ["ROST", "ROSS STORES INC", "Consumer, Non-cyclical", "4:1"],
            ["RTX", "RTX CORPORATION", "Industrial", "5:1"],
            ["CRM", "SALESFORCE INC", "Technology", "18:1"],
            ["SMSN LI", "SAMSUNG ELECTR-GDR REG S", "Technology", "14:1"],
            ["SAP", "SAP SE-SPONSORED ADR", "Consumer, Non-cyclical", "18:1"],
            ["SLB", "SCHLUMBERGER LTD", "Energy", "3:1"],
            ["SE", "SEA LTD.", "Communications", "32:1"],
            ["SHPW", "SHAPEWAYS HOLDINGS INC", "Communications", "1:2"],
            ["SHEL", "SHELL", "Energy", "2:1"],
            ["SHOP", "SHOPIFY INC", "Communications", "107:1"],
            ["SIEGY", "SIEMENS AG-SPONS ADR", "Industrial", "3:1"],
            ["SWKS", "SKYWORKS SOLUTIONS INC.", "Technology", "21:1"],
            ["SNAP", "SNAP INC - A", "Communications", "1:1"],
            ["SNA", "SNAP-ON INC", "Industrial", "6:1"],
            ["SNOW", "SNOWFLAKE INC-CLASS A", "Technology", "30:1"],
            ["SONY", "SONY CORP-SPONSORED ADR", "Consumer, Cyclical", "8:1"],
            ["SCCO", "SOUTHERN COPPER CORP", "Basic Materials", "2:1"],
            ["SPOT", "SPOTIFY TECHNOLOGY SA", "Communications", "28:1"],
            ["SPGI", "S&P GLOBAL INC", "Consumer, Non-cyclical", "45:1"],
            ["SBUX", "STARBUCKS CORP", "Consumer, Cyclical", "12:1"],
            ["STLA", "STELLANTIS NV", "Consumer, Cyclical", "5:1"],
            ["STNE", "STONECO LTD", "Financial", "3:1"],
            ["SDA", "SUNCAR TECHNOLOGY GROUP INC", "Consumer, Non-cyclical", "2:1"],
            ["SUZ", "SUZANO SA - SPON ADR", "Basic Materials", "1:1"],
            ["SYY", "SYSCO CORP", "Consumer, Non-cyclical", "8:1"],
            ["TMUS", "T-MOBILE US INC.", "Communications", "33:1"],
            ["TSM", "TAIWAN SEMICONDUCTOR", "Technology", "9:1"],
            ["TGT", "TARGET CORP", "Consumer, Cyclical", "24:1"],
            ["OAOFY", "TATNEFT PAO-SPONSORED ADR", "Energy", "4:1"],
            ["TIIAY", "TELECOM ITALIA SPA-SPON ADR", "Communications", "1:1"],
            ["VIV", "TELEFONICA BRASIL-ADR", "Communications", "1:1"],
            ["TEF", "TELEFONICA SA-SPON ADR", "Communications", "8:1"],
            ["TS", "TENARIS SA-ADR", "Industrial", "1:1"],
            ["TX", "TERNIUM SA-SPONSORED ADR", "Basic Materials", "4:1"],
            ["TSLA", "TESLA INC", "Consumer, Cyclical", "15:1"],
            ["TXN", "TEXAS INSTRUMENTS INC", "Technology", "5:1"],
            ["TMO", "THERMO FISHER SCIENTIFIC INC", "Consumer, Non-cyclical", "22:1"],
            ["TIMB", "TIM SA-ADR", "Communications", "1:1"],
            ["TTE", "TOTALENERGIES SE - ADR", "Energy", "3:1"],
            ["TM", "TOYOTA MOTOR CORP -SPON ADR", "Consumer, Cyclical", "15:1"],
            ["TRV", "TRAVELERS COS INC/THE", "Financial", "6:1"],
            ["TCOM", "TRIP.COM GROUP LTD-ADR", "Communications", "2:1"],
            ["TRIP", "TRIPADVISOR INC", "Communications", "2:1"],
            ["TWLO", "TWILIO INC", "Technology", "36:1"],
            ["UGP", "ULTRAPAR PARTICPAC-SPON ADR", "Energy", "1:1"],
            ["UL", "UNILEVER", "Consumer, Non-cyclical", "3:1"],
            ["UNP", "UNION PACIFIC CORP", "Industrial", "20:1"],
            ["X", "UNITED STATES STEEL CORP", "Basic Materials", "3:1"],
            ["UNH", "UNITEDHEALTH GROUP INC", "Consumer, Non-cyclical", "33:1"],
            ["URBN", "URBAN OUTFITTERS INC", "Consumer, Cyclical", "2:1"],
            ["USB", "US BANCORP", "Financial", "5:1"],
            ["VALE", "VALE SA", "Basic Materials", "2:1"],
            ["VRSN", "VERISIGN INC", "Communications", "6:1"],
            ["VZ", "VERIZON COMMUNICATIONS INC", "Communications", "4:1"],
            ["SPCE", "VIRGIN GALACTIC HOLDINGS INC.", "Consumer, Cyclical", "1:2"],
            ["V", "VISA INC", "Financial", "18:1"],
            ["VIST US", "VISTA ENERGY S.A.B. de C.V", "Energy", "3:1"],
            ["VOD", "VODAFONE GROUP PLC-SP ADR", "Communications", "1:1"],
            ["WBA", "WALGREENS BOOTS ALLIANCE INC", "Consumer, Cyclical", "3:1"],
            ["WMT", "WALMART INC", "Consumer, Cyclical", "18:1"],
            ["DIS", "WALT DISNEY CO/THE", "Communications", "12:1"],
            ["WB", "WEIBO CORP-SPON ADR", "Communications", "6:1"],
            ["WFC", "WELLS FARGO & CO", "Financial", "5:1"],
            ["XRX", "XEROX HOLDINGS CORP", "Technology", "1:1"],
            ["XP", "XP INC", "Financial", "4:1"],
            ["YZCAY", "YANKUANG ENERGY GROUP CO. LTD.", "Energy", "2:1"],
            ["YELP", "YELP INC", "Communications", "2:1"],
            ["ZM", "ZOOM VIDEO COMMUNICATIONS-A", "Technology", "47:1"],
            ["SPY","S&P 500","Index","1:20"],
    ]
}).render(document.getElementById("table_ratios"))