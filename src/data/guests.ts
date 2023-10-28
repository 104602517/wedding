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

const Mr_Big: Table = {
  name: 'Mr.Big',
  index: 1,
  people: [
    {
      name: '馮劭熙',
      table: 'Mr.Big',
      plusOne: 0,
      isWedding: true,
    },
    {
      name: '施少庸',
      table: 'Mr.Big',
      plusOne: 0,
      isWedding: true,
    }
  ],
};

const Steelheart: Table = {
  name: 'Steelheart',
  index: 2,
  people: [
    {
      name: '黃郁葳',
      table: 'Steelheart',
      plusOne: 0,
      isWedding: true,
    },
  ]
}

const TheRollingStones: Table = {
  name: 'The Rolling stones',
  index: 3,
  people: [
    {
      name: '沈慕牧',
      table: 'The Rolling stones',
      plusOne: 1,
      isWedding: true,
    },
  ]
}

export default [
  Mr_Big,
  Steelheart,
  TheRollingStones,
]

