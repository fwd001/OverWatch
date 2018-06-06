var heroesArr = [{
    img: 'url(image/fwd-portrait.png)',
    name: '末日铁拳',
    bigImg: 'url(image/fwd-overlay%2Fdoomfist.png)',
    desc: '一位利用个人头脑、魅力和蛮力来创建一个更强大世界的战术家。',
    type: 0,
    h_img: 'image/heroes-img/fwd-heroes%2Flist%2Fdoomfist.png'
  },
  {
    img: 'url(image/fwd-icon-portrait.png)',
    name: '源氏',
    bigImg: 'url(image/fwd-overlay%2Fgenji.png)',
    desc: '一名致命的半机械忍者，通过他的机械躯体寻得了身心的和谐。',
    type: 0,
    h_img: 'image/heroes-img/fwd-genji.png'
  },
  {
    img: 'url(image/fwd-mccree-icon-portrait.png)',
    name: '麦克雷',
    bigImg: 'url(image/fwd-overlay%2Fmccree.png)',
    desc: '一名亡命天涯的神枪手，以自己的方式伸张正义。',
    type: 0,
    h_img: 'image/heroes-img/fwd-mccree.png'
  },
  {
    img: 'url(image/fwd-pharah-icon-portrait.png)',
    name: '法老之鹰',
    bigImg: 'url(image/fwd-overlay%2Fpharah.png)',
    desc: '一名恪守岗位的战士，用实验性的“猛禽”作战服确保天空的安全。',
    type: 0,
    h_img: 'image/heroes-img/fwd-pharah.png'
  },
  {
    img: 'url(image/fwd-reaper-icon-portrait.png)',
    name: '死神',
    bigImg: 'url(image/fwd-overlay%2Freaper.png)',
    desc: '一名无情的杀手，一直在追杀前守望先锋的特工们。',
    type: 0,
    h_img: 'image/heroes-img/fwd-reaper.png'
  },
  {
    img: 'url(image/fwd-soldier-76%2Ficon-portrait.png)',
    name: '士兵：76',
    bigImg: 'url(image/fwd-overlay%2Fsoldier-76.png)',
    desc: '一名试图自己将守望先锋敌人绳之于法的独行侠。',
    type: 0,
    h_img: 'image/heroes-img/fwd-soldier-76.png'
  },
  {
    img: 'url(image/fwd-sombra%2Ficon-portrait.png)',
    name: '黑影',
    bigImg: 'url(image/fwd-overlay%2Fsombra.png)',
    desc: '臭名昭著的黑客，沉迷于揭秘——及其带来的权力。',
    type: 0,
    h_img: 'image/heroes-img/fwd-sombra.png'
  },
  {
    img: 'url(image/fwd-tracer%2Ficon-portrait.png)',
    name: '猎空',
    bigImg: 'url(image/fwd-overlay%2Ftracer.png)',
    desc: '一名前守望先锋特工，同时也是可以穿梭时间的充满正义的冒险家。',
    type: 0,
    h_img: 'image/heroes-img/fwd-tracer.png'
  },
  {
    img: 'url(image/fwd-bastion%2Ficon-portrait.png)',
    name: '堡垒',
    bigImg: 'url(image/fwd-overlay%2Fbastion.png)',
    desc: '一名可以切换形态的机器人，为自然着迷而探索世界，同时也对人类保持着戒心。',
    type: 1,
    h_img: 'image/heroes-img/fwd-bastion.png'
  },
  {
    img: 'url(image/fwd-hanzo%2Ficon-portrait.png)',
    name: '半藏',
    bigImg: 'url(image/fwd-overlay%2Fhanzo.png)',
    desc: '一名强大而致命的弓箭大师。',
    type: 1,
    h_img: 'image/heroes-img/fwd-hanzo.png'
  },
  {
    img: 'url(image/fwd-junkrat%2Ficon-portrait.png)',
    name: '狂鼠',
    bigImg: 'url(image/fwd-overlay%2Fjunkrat.png)',
    desc: '一名满脑子都是爆炸的变态疯子，只为了混乱和破坏而活。',
    type: 1,
    h_img: 'image/heroes-img/fwd-junkrat.png'
  },
  {
    img: 'url(image/fwd-frost%2Ficon-portrait.png)',
    name: '美',
    bigImg: 'url(image/fwd-overlay%2Fmei.png)',
    desc: '一名能够操控天气，为了保护环境而选择战斗的科学家。',
    type: 1,
    h_img: 'image/heroes-img/fwd-mei.png'
  },
  {
    img: 'url(image/fwd-torbjorn%2Ficon-portrait.png)',
    name: '托比昂',
    bigImg: 'url(image/fwd-overlay%2Ftorbjorn.png)',
    desc: '一名天才工程师，可以在战场上打造武器系统。',
    type: 1,
    h_img: 'image/heroes-img/fwd-torbjorn.png'
  },
  {
    img: 'url(image/fwd-widowmaker%2Ficon-portrait.png)',
    name: '黑百合',
    bigImg: 'url(image/fwd-overlay%2Fwidowmaker.png)',
    desc: '一名完美的杀手：耐心、果断、无情。没有任何情感且事后毫无悔意。',
    type: 1,
    h_img: 'image/heroes-img/fwd-widowmaker.png'
  },
  {
    img: 'url(image/fwd-dva%2Ficon-portrait.png)',
    name: 'D.va',
    bigImg: 'url(image/fwd-overlay%2Fdva.png)',
    desc: '一名前职业玩家，而现在则利用自己的技巧驾驶一台尖端机甲保卫国家。',
    type: 2,
    h_img: 'image/heroes-img/fwd-dva.png'
  },
  {
    img: 'url(image/fwd-orisa%2Ficon-portrait.png)',
    name: '奥丽莎',
    bigImg: 'url(image/fwd-overlay%2Forisa.png)',
    desc: '维护努巴尼秩序并保护努巴尼人民的维和机器人。',
    type: 2,
    h_img: 'image/heroes-img/fwd-orisa.png'
  },
  {
    img: 'url(image/fwd-reinhardt%2Ficon-portrait.png)',
    name: '拉因哈特',
    bigImg: 'url(image/fwd-overlay%2Freinhardt.png)',
    desc: '一名属于过去的勇士，时刻铭记着骑士的信条：无畏、公正、勇敢。',
    type: 2,
    h_img: 'image/heroes-img/fwd-reinhardt.png'
  },
  {
    img: 'url(image/fwd-roadhog%2Ficon-portrait.png)',
    name: '路霸',
    bigImg: 'url(image/fwd-overlay%2Froadhog.png)',
    desc: '一名残暴的杀手，因残忍和肆意破坏而臭名昭著。',
    type: 2,
    h_img: 'image/heroes-img/fwd-roadhog.png'
  },
  {
    img: 'url(image/fwd-winston%2Ficon-portrait.png)',
    name: '温斯顿',
    bigImg: 'url(image/fwd-overlay%2Fwinston.png)',
    desc: '一只经过基因改造，拥有高等智慧的大猩猩，也是一位出色的科学家和代表着人类潜力的勇士。',
    type: 2,
    h_img: 'image/heroes-img/fwd-winston.png'
  },
  {
    img: 'url(image/fwd-zarya%2Ficon-portrait.png)',
    name: '查莉娅',
    bigImg: 'url(image/fwd-overlay%2Fzarya.png)',
    desc: '世界上最强壮的女性之一。为了保卫祖国，毅然放弃了个人荣誉。',
    type: 2,
    h_img: 'image/heroes-img/fwd-zarya.png'
  },
  {
    img: 'url(image/fwd-ana%2Ficon-portrait.png)',
    name: '安娜',
    bigImg: 'url(image/fwd-overlay%2Fana.png)',
    desc: '守望先锋的创始成员之一，“起死回生”重返战场保护亲人和朋友。',
    type: 3,
    h_img: 'image/heroes-img/fwd-ana.png'
  },
  {
    img: 'url(image/fwd-brigitte%2Ficon-portrait.png)',
    name: '布里吉塔',
    bigImg: 'url(image/fwd-brigitte.png)',
    desc: '一位渴望冒险，希望惩强扶弱的重装战士。',
    type: 3,
    h_img: 'image/heroes-img/fwd-brigitte.png'
  },
  {
    img: 'url(image/fwd-lucio%2Ficon-portrait.png)',
    name: '卢西奥',
    bigImg: 'url(image/fwd-overlay%2Flucio.png)',
    desc: '一位国际名人，通过音乐和巡演激发社会正能量。',
    type: 3,
    h_img: 'image/heroes-img/fwd-lucio.png'
  },
  {
    img: 'url(image/fwd-mercy%2Ficon-portrait.png)',
    name: '天使',
    bigImg: 'url(image/fwd-overlay%2Fmercy.png)',
    desc: '一名集顶尖的治疗者、出色的科学家和坚定的和平主义者于一身的守护天使。',
    type: 3,
    h_img: 'image/heroes-img/fwd-mercy.png'
  },
  {
    img: 'url(image/fwd-moira%2Ficon-portrait.png)',
    name: '莫伊拉',
    bigImg: 'url(image/fwd-overlay%2Fmoira-full-portrait.png)',
    desc: '一位天才基因科学家，无视道德的束缚，一心追求科学发现。',
    type: 3,
    h_img: 'image/heroes-img/fwd-moira.png'
  },
  {
    img: 'url(image/fwd-symmetra%2Ficon-portrait.png)',
    name: '秩序之光',
    bigImg: 'url(image/fwd-overlay%2Fsymmetra.png)',
    desc: '一名通过控制高强度光束，将世界改造成她心目中完美、有序的模样的光子建筑师。',
    type: 3,
    h_img: 'image/heroes-img/fwd-symmetra.png'
  },
  {
    img: 'url(image/fwd-zenyatta%2Ficon-portrait.png)',
    name: '禅雅塔',
    bigImg: 'url(image/fwd-overlay%2Fzenyatta.png)',
    desc: '一位游走于世界寻找灵魂升华之道的机械僧侣',
    type: 3,
    h_img: 'image/heroes-img/fwd-zenyatta.png'
  }
]