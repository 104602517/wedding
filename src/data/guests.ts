export interface Person {
  name: string;
  // 桌次
  table: string;
  // 攜伴人數
  plusOne: number;
  // 是否證婚
  isWedding: boolean;
}

export interface Table {
  // 桌名
  name: string;
  // 桌次
  index: number;
  // 人
  people: Person[];
}


const TheBeatles: Table = {
  name: 'The Beatles',
  index: 1,
  people: [
    {
      name: '黃皓正',
      table: 'The Beatles',
      plusOne: 1,
      isWedding: true,
    },
    {
      name: '梁世祁',
      table: 'The Beatles',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '李慧如',
      table: 'The Beatles',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '徐植蓉',
      table: 'The Beatles',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '王友誠',
      table: 'The Beatles',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '梁文檳',
      table: 'The Beatles',
      plusOne: 1,
      isWedding: true,
    },
    {
      name: '徐植萱',
      table: 'The Beatles',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '徐植蔚',
      table: 'The Beatles',
      plusOne: 0,
      isWedding: false,
    },
    
  ],
};

const Steelheart: Table = {
  name: 'Steelheart',
  index: 2,
  people: [
    {
      name: '徐鍾藍',
      table: 'Steelheart',
      plusOne: 2,
      isWedding: false,
    },
    {
      name: '何麗玲',
      table: 'Steelheart',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '徐鍾雅',
      table: 'Steelheart',
      plusOne: 3,
      isWedding: false,
    },
    {
      name: '黃詩璇',
      table: 'Steelheart',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '黃子綺',
      table: 'Steelheart',
      plusOne: 1,
      isWedding: true,
    },
  ]
}

const LambOfGod: Table = {
  name: 'Lamb of God',
  index: 3,
  people: [
    {
      name: '龍台平',
      table: 'Lamb of God',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '張家碧',
      table: 'Lamb of God',
      plusOne: 0,
      isWedding: true,
    },{
      name: '陳立青',
      table: 'Lamb of God',
      plusOne: 0,
      isWedding: false,
    },{
      name: '邰餘生',
      table: 'Lamb of God',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '周小兔',
      table: 'Lamb of God',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '陳美玲',
      table: 'Lamb of God',
      plusOne: 1,
      isWedding: true,
    },
    {
      name: '周雯',
      table: 'Lamb of God',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '張路得',
      table: 'Lamb of God',
      plusOne: 0,
      isWedding: false,
    },
  ]
}

const Queen: Table = {
  name: 'Queen',
  index: 4,
  people: [
    {
      name: '巫麗香',
      table: 'Queen',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '徐慧玲',
      table: 'Queen',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '戴穎',
      table: 'Queen',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '陳慧真',
      table: 'Queen',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '黃惠玲',
      table: 'Queen',
      plusOne: 1,
      isWedding: false,
    },
  ]
}

const NoPartyForCaoDong: Table = {
  name: 'No Party For Cao Dong',
  index: 5,
  people: [
    {
      name: '曾奕璇',
      table: 'No Party For Cao Dong',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '洪莉涵',
      table: 'No Party For Cao Dong',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '習媁晴',
      table: 'No Party For Cao Dong',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '黃詩婷',
      table: 'No Party For Cao Dong',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '吳佩容',
      table: 'No Party For Cao Dong',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '陳諭萱',
      table: 'No Party For Cao Dong',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '蔡育俽',
      table: 'No Party For Cao Dong',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '蔡易培',
      table: 'No Party For Cao Dong',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '黃鈺婷',
      table: 'No Party For Cao Dong',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '黃郁凱',
      table: 'No Party For Cao Dong',
      plusOne: 0,
      isWedding: true,
    },
  ]
}

const KISS: Table = { 
  name: 'KISS',
  index: 6,
  people: [
    {
      name: '陳怡中',
      table: 'KISS',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '洪宇陞',
      table: 'KISS',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '蔡武男',
      table: 'KISS',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '陳尚謙',
      table: 'KISS',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '孫東容',
      table: 'KISS',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '黃安婕',
      table: 'KISS',
      plusOne: 1,
      isWedding: false,
    },
  ]
}
const Metallica: Table = { 
  name: 'Metallica',
  index: 7,
  people: [
    {
      name: '陳新翰',
      table: 'Metallica',
      plusOne: 0,
      isWedding: false,
    },
    // {
    //   name: '張智翔',
    //   table: 'Metallica',
    //   plusOne: 0,
    //   isWedding: false,
    // },
    {
      name: '陳青毅',
      table: 'Metallica',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '曾柏睿',
      table: 'Metallica',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '陳伯瑄',
      table: 'Metallica',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '吳振維',
      table: 'Metallica',
      plusOne: 1,
      isWedding: true,
    },
    {
      name: '李念瑩',
      table: 'Metallica',
      plusOne: 1,
      isWedding: true,
    },
    {
      name: '謝函諭',
      table: 'Metallica',
      plusOne: 1,
      isWedding: false,
    },
  ]
}

const AcDc: Table = { 
  name: 'AC/DC',
  index: 8,
  people: [
    {
      name: '梁世泓',
      table: 'AC/DC',
      plusOne: 3,
      isWedding: true,
    },
    {
      name: '梁世昀',
      table: 'AC/DC',
      plusOne: 2,
      isWedding: true,
    },
    {
      name: '舅婆婆',
      table: 'AC/DC',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '阿信',
      table: 'AC/DC',
      plusOne: 1,
      isWedding: true,
    },
  ]
}

const DreamTheater: Table = { 
  name: 'Dream theater',
  index: 9,
  people: [
    {
      name: '張鈞喻',
      table: 'Dream theater',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '張耀夫',
      table: 'Dream theater',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '劉亮昇',
      table: 'Dream theater',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '薛朝輝',
      table: 'Dream theater',
      plusOne: 2,
      isWedding: false,
    },
    {
      name: '索如璇',
      table: 'Dream theater',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '賴煦陽',
      table: 'Dream theater',
      plusOne: 0,
      isWedding: false,
    },
  ]
}

const BonJovi: Table = { 
  name: 'Bon Jovi',
  index: 10,
  people: [
    {
      name: '李惠娜',
      table: 'Bon Jovi',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '黃靖珊',
      table: 'Bon Jovi',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '黃珮宸',
      table: 'Bon Jovi',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '黃慧貞',
      table: 'Bon Jovi',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '林沛均',
      table: 'Bon Jovi',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '譚懋仲',
      table: 'Bon Jovi',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '蔣明德',
      table: 'Bon Jovi',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '黃文雄',
      table: 'Bon Jovi',
      plusOne: 1,
      isWedding: false,
    },
   
  ]
}
const Muse: Table = { 
  name: 'Muse',
  index: 11,
  people: [
    {
      name: '王哲文',
      table: 'Muse',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '張致華',
      table: 'Muse',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '施純碩',
      table: 'Muse',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '王思涵',
      table: 'Muse',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '鄭麗卿',
      table: 'Muse',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '邱馨緯',
      table: 'Muse',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '周大傑',
      table: 'Muse',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '羅君瀚',
      table: 'Muse',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '劉維仁',
      table: 'Muse',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '黃文祥',
      table: 'Muse',
      plusOne: 0,
      isWedding: false,
    },
  ]
}

const RHCP: Table = { 
  name: 'RHCP',
  index: 12,
  people: [
    {
      name: '吳子科',
      table: 'RHCP',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '朱孟儒',
      table: 'RHCP',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '盧志昇',
      table: 'RHCP',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '呂岳樺',
      table: 'RHCP',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '蔡侑恬',
      table: 'RHCP',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '碧鄉',
      table: 'RHCP',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '何君豪',
      table: 'RHCP',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '鄭若芃',
      table: 'RHCP',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '陳秀鳳',
      table: 'RHCP',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '郭子寧',
      table: 'RHCP',
      plusOne: 0,
      isWedding: true,
    },
  ]
}

const GunsNRoses: Table = { 
  name: "Guns N' Roses",
  index: 13,
  people: [
    {
      name: '陳昶憲',
      table: "Guns N' Roses",
      plusOne: 2,
      isWedding: true,
    },
    {
      name: '裘士弘',
      table: "Guns N' Roses",
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '袁立恆',
      table: "Guns N' Roses",
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '李承恩',
      table: "Guns N' Roses",
      plusOne: 1,
      isWedding: true,
    },
    {
      name: '鄭友涵',
      table: "Guns N' Roses",
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '黃冠勳',
      table: "Guns N' Roses",
      plusOne: 1,
      isWedding: false,
    },
  ]
}

const Eagles: Table = { 
  name: 'Eagles',
  index: 14,
  people: [
    {
      name: '蔡明暉',
      table: 'Eagles',
      plusOne: 4,
      isWedding: false,
    },
    {
      name: '連文賢',
      table: 'Eagles',
      plusOne: 2,
      isWedding: false,
    },
    {
      name: '連雅玲',
      table: 'Eagles',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '謝寬',
      table: 'Eagles',
      plusOne: 0,
      isWedding: true,
    },
  ]
}

const TheRollingStones: Table = { 
  name: 'The Rolling stones',
  index: 15,
  people: [
    {
      name: '法蘭克',
      table: 'The Rolling stones',
      plusOne: 2,
      isWedding: false,
    },
    {
      name: '溫振華',
      table: 'The Rolling stones',
      plusOne: 2,
      isWedding: true,
    },
    {
      name: '陳建帆',
      table: 'The Rolling stones',
      plusOne: 2,
      isWedding: false,
    },
    {
      name: '張文俐',
      table: 'The Rolling stones',
      plusOne: 2,
      isWedding: true,
    },
  ]
}

const MrBig: Table = { 
  name: 'Mr. Big',
  index: 16,
  people: [
    {
      name: '吳彥霆',
      table: 'Mr. Big',
      plusOne: 0,
      isWedding: true,
    },
    {
    name: '施少雍',
      table: 'Mr. Big',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '馮劭熙',
      table: 'Mr. Big',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '馮翾',
      table: 'Mr. Big',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '謝汶芯',
      table: 'Mr. Big',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '彭執瑈',
      table: 'Mr. Big',
      plusOne: 0,
      isWedding: false,
    },
    // {
    //   name: '林薏珊',
    //   table: 'Mr. Big',
    //   plusOne: 0,
    //   isWedding: false,
    // },
    {
      name: '王重真',
      table: 'Mr. Big',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '黃雅慈',
      table: 'Mr. Big',
      plusOne: 0,
      isWedding: false,
    },
    // {
    //   name: '張心念',
    //   table: 'Mr. Big',
    //   plusOne: 0,
    //   isWedding: false,
    // },
    {
      name: '江育慈',
      table: 'Mr. Big',
      plusOne: 0,
      isWedding: false,
    },
  ]
}

const Oasis: Table = { 
  name: 'Oasis',
  index: 17,
  people: [
    {
      name: '張芷寧',
      table: 'Oasis',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '王巍勳',
      table: 'Oasis',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '王奕維',
      table: 'Oasis',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '巫仲庭',
      table: 'Oasis',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '黃揚清',
      table: 'Oasis',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '張邦容',
      table: 'Oasis',
      plusOne:0,
      isWedding: false,
    },
    {
      name: '王玟雅',
      table: 'Oasis',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '林家偉',
      table: 'Oasis',
      plusOne: 0,
      isWedding: false,
    },
  ]
}

const Nirvana: Table = { 
  name: 'Nirvana',
  index: 18,
  people: [
    {
      name: '連敏卿',
      table: 'Nirvana',
      plusOne: 3,
      isWedding: false,
    },
    {
      name: '連文彬',
      table: 'Nirvana',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '連德劭',
      table: 'Nirvana',
      plusOne: 1,
      isWedding: false,
    },
    {
      name: '陳淑娟',
      table: 'Nirvana',
      plusOne: 1,
      isWedding: false,
    },
  ]
}

const LedZeppelin: Table = { 
  name: 'Led Zeppelin',
  index: 19,
  people: [
    {
      name: '卜允婷',
      table: 'Led Zeppelin',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '小智',
      table: 'Led Zeppelin',
      plusOne: 0,
      isWedding: true,
    },
    {
      name:'邵玉貴',
      table: 'Led Zeppelin',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '溫淑蕙',
      table: 'Led Zeppelin',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '馬明誠',
      table: 'Led Zeppelin',
      plusOne: 1,
      isWedding: true,
    },
    {
      name: '沈雅慧',
      table: 'Led Zeppelin',
      plusOne: 1,
      isWedding: true,
    },
    {
      name: '蘇翊銘',
      table: 'Led Zeppelin',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '黃郁葳',
      table: 'Led Zeppelin',
      plusOne: 1,
      isWedding: true,
    },
  ]
}

const Radiohead: Table = { 
  name: 'Radiohead',
  index: 20,
  people: [
    {
      name: '吳泓毅',
      table: 'Radiohead',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '張晉',
      table: 'Radiohead',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '郭晉誠',
      table: 'Radiohead',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '林佳妤',
      table: 'Radiohead',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '蘇柔安',
      table: 'Radiohead',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '楊甯翔',
      table: 'Radiohead',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '洪璿晴',
      table: 'Radiohead',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '林君憶',
      table: 'Radiohead',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '林祈安',
      table: 'Radiohead',
      plusOne: 0,
      isWedding: false,
    },
    {
      name: '凌子璿',
      table: 'Radiohead',
      plusOne: 0,
      isWedding: false,
    },
  ]
}
export default [
  MrBig,
  Steelheart,
  TheRollingStones,
  TheBeatles,
  LambOfGod,
  Queen,
  NoPartyForCaoDong,
  KISS,
  Metallica,
  AcDc,
  DreamTheater,
  BonJovi,
  Muse,
  RHCP,
  GunsNRoses,
  Eagles,
  MrBig,
  Oasis,
  Nirvana,
  LedZeppelin,
  Radiohead,
]

