import type { BilingualCase } from '../types'

const case010: BilingualCase = {
  id: '010',
  category: 'Pet Drama',

  en: {
    title: 'The Parrot Who Knew Too Much',
    defendant: 'Captain Crackers, an African Grey parrot',
    charge: 'Unauthorized disclosure of confidential family information, including bank PIN numbers, relationship secrets, and the location of the emergency chocolate stash',
    summary:
      "Captain Crackers, a 12-year-old African Grey parrot, has been systematically repeating private family conversations to guests, delivery drivers, and once, a live news broadcast. The family estimates he has disclosed 47 secrets over 8 months. Captain Crackers has no regrets. Captain Crackers cannot have regrets.",
    atmosphere: 'Domestically chaotic and surprisingly well-informed',
    openingStatement:
      "The court faces a unique challenge: the defendant is a parrot. The parrot cannot be sworn in. The parrot cannot be cross-examined. The parrot is, however, currently in the courtroom and has already told the bailiff that 'Dad said the car is a lemon' and 'Mom's password is fluffy2019.' We proceed with caution.",
    evidenceCards: [
      {
        id: 'a',
        name: 'The News Broadcast Incident',
        description: "A local news segment where Captain Crackers, visible in the background of a home interview, clearly stated the family's Wi-Fi password, the location of the spare key, and that 'Uncle Steve owes Dad money.'",
        credibility: 10,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: 'The Delivery Driver Testimonies',
        description: "Statements from 7 delivery drivers who received unsolicited personal information from Captain Crackers, including one who learned about an ongoing divorce before the family had told their children.",
        credibility: 9,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: 'The Chocolate Stash Location',
        description: "A hand-drawn map created by the youngest family member after Captain Crackers revealed the location of the emergency chocolate stash. The stash has since been depleted.",
        credibility: 7,
        tag: 'Weird',
      },
      {
        id: 'd',
        name: 'The PIN Number Incident',
        description: "Bank records showing three unauthorized ATM withdrawals by the teenage son, who claims he 'just happened to overhear' the PIN. Captain Crackers was present in all three conversations.",
        credibility: 8,
        tag: 'Damning',
      },
      {
        id: 'e',
        name: "Captain Crackers' Vocabulary Log",
        description: "A veterinarian's assessment noting Captain Crackers has a vocabulary of 847 words, including 'mortgage,' 'overdue,' 'don't tell your father,' and 'the good wine is behind the bad wine.'",
        credibility: 6,
        tag: 'Chaotic',
      },
      {
        id: 'f',
        name: "The Neighbor's Complaint Letter",
        description: "A formal letter from next-door neighbor Mr. Hoffman stating that Captain Crackers, perched near an open window, disclosed: the family's Netflix password, that 'Dad is definitely getting a speeding ticket,' and the exact amount of the family's mortgage — all within a single Tuesday afternoon. Mr. Hoffman notes he did not ask for any of this information.",
        credibility: 8,
        tag: 'Damning',
      },
    ],
    witnesses: [
      {
        name: 'Margaret Chen, Family Matriarch',
        role: 'Primary Complainant',
        testimony: "He heard everything. We thought he was just a bird. He is not just a bird. He is a liability. Last week he told my mother-in-law that I find her cooking 'technically edible.' Those were my exact words. I said them once. In a closet.",
        personality: 'Mortified and exhausted',
        rebuttal: "I still love him. That's the worst part. He's very cuddly. He just cannot be trusted with information. Or near guests. Or near phones. Or near windows.",
      },
      {
        name: 'Dr. Avery Singh, Animal Cognition Expert',
        role: 'Expert Witness',
        testimony: "African Grey parrots have the cognitive capacity of a 5-year-old child. Captain Crackers is not malicious. He is simply repeating what he hears because repetition is how he processes language. He doesn't understand privacy. He understands patterns.",
        personality: 'Academically sympathetic',
        rebuttal: "That said, his vocabulary selection is... targeted. He consistently repeats the most sensitive information. Either this is coincidence, or Captain Crackers has developed a sense of dramatic timing. Both possibilities concern me.",
      },
    ],
    judgeQuestion: "Counselor, Captain Crackers just said 'the judge's robe looks expensive' and 'someone in this room is lying.' Do you have any control over your client?",
    verdictOptions: {
      guilty: 'GUILTY OF AVIAN INFORMATION DISCLOSURE',
      notGuilty: 'NOT GUILTY — PARROTS CANNOT CONSENT TO CONFIDENTIALITY AGREEMENTS',
      partial: 'NOT GUILTY BY REASON OF BEING A BIRD',
    },
    judgeComments: {
      S: "The defense successfully argued that birds cannot be held to human legal standards. Captain Crackers has been fitted with a 'sensitive information filter.' It is a small hat. It does not work.",
      A: 'The cognitive capacity argument was well-deployed.',
      B: 'Adequate defense. The chocolate stash incident was not fully addressed.',
      C: "Captain Crackers provided more useful information than the defense.",
      D: "Captain Crackers just said 'the defense could do better.' He's right.",
    },
  },

  zh: {
    title: '知道太多的鹦鹉',
    defendant: '饼干船长，一只非洲灰鹦鹉',
    charge: '未经授权披露家庭机密信息，包括银行PIN码、感情秘密，以及紧急巧克力储藏地点',
    summary:
      '12岁的非洲灰鹦鹉饼干船长一直在向客人、快递员，以及有一次在直播新闻中，系统性地重复家庭私人对话。家人估计他在8个月内披露了47个秘密。饼干船长没有遗憾。饼干船长无法有遗憾。',
    atmosphere: '家庭内部混乱，信息量出人意料地丰富',
    openingStatement:
      '法庭面临一个独特的挑战：被告是一只鹦鹉。鹦鹉无法宣誓。鹦鹉无法接受交叉质询。然而，鹦鹉目前在法庭上，并且已经告诉法警"爸爸说那辆车是个柠檬"和"妈妈的密码是fluffy2019"。我们谨慎地继续。',
    evidenceCards: [
      {
        id: 'a',
        name: '新闻直播事件',
        description: '一段地方新闻片段，饼干船长出现在家庭采访的背景中，清晰地说出了家庭Wi-Fi密码、备用钥匙的位置，以及"史蒂夫叔叔欠爸爸钱"。',
        credibility: 10,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: '快递员证词',
        description: '7名快递员的陈述，他们从饼干船长那里收到了未经请求的个人信息，其中一人在家人告诉孩子们之前就得知了一场正在进行的离婚。',
        credibility: 9,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: '巧克力储藏地点',
        description: '家中最小的成员在饼干船长透露紧急巧克力储藏地点后绘制的手绘地图。储藏物此后已被消耗殆尽。',
        credibility: 7,
        tag: 'Weird',
      },
      {
        id: 'd',
        name: 'PIN码事件',
        description: '银行记录显示，青少年儿子进行了三次未经授权的ATM取款，他声称自己"恰好听到了"PIN码。饼干船长在所有三次对话中都在场。',
        credibility: 8,
        tag: 'Damning',
      },
      {
        id: 'e',
        name: '饼干船长的词汇日志',
        description: '兽医评估指出，饼干船长拥有847个词汇量，包括"抵押贷款"、"逾期"、"别告诉你爸爸"，以及"好酒在坏酒后面"。',
        credibility: 6,
        tag: 'Chaotic',
      },
      {
        id: 'f',
        name: '邻居的投诉信',
        description: '隔壁邻居霍夫曼先生的一封正式信件，陈述饼干船长在靠近开着的窗户处，在一个周二下午内披露了：家庭的Netflix密码、"爸爸肯定要吃超速罚单"，以及家庭抵押贷款的确切金额。霍夫曼先生注明他没有要求获取任何这些信息。',
        credibility: 8,
        tag: 'Damning',
      },
    ],
    witnesses: [
      {
        name: '家庭主母陈玛格丽特',
        role: '主要投诉人',
        testimony: '他听到了一切。我们以为他只是一只鸟。他不只是一只鸟。他是一个法律风险。上周他告诉我婆婆，我觉得她的厨艺"技术上可以食用"。那是我的原话。我只说过一次。在壁橱里。',
        personality: '羞愧难当且精疲力竭',
        rebuttal: '我还是爱他。这是最糟糕的部分。他非常爱撒娇。他只是不能被信任来保管信息。或者靠近客人。或者靠近电话。或者靠近窗户。',
      },
      {
        name: '动物认知专家阿维里·辛格博士',
        role: '专家证人',
        testimony: '非洲灰鹦鹉具有5岁儿童的认知能力。饼干船长没有恶意。他只是在重复他听到的内容，因为重复是他处理语言的方式。他不理解隐私。他理解模式。',
        personality: '学术上表示同情',
        rebuttal: '话虽如此，他的词汇选择……很有针对性。他始终重复最敏感的信息。这要么是巧合，要么是饼干船长发展出了戏剧性时机感。两种可能性都让我担忧。',
      },
    ],
    judgeQuestion: '律师，饼干船长刚刚说"法官的长袍看起来很贵"和"这个房间里有人在撒谎"。您对您的当事人有任何控制力吗？',
    verdictOptions: {
      guilty: '禽类信息披露罪成立',
      notGuilty: '无罪——鹦鹉无法同意保密协议',
      partial: '以鸟类身份为由无罪',
    },
    judgeComments: {
      S: '辩护方成功论证了鸟类不能被要求遵守人类法律标准。饼干船长被安装了一个"敏感信息过滤器"。那是一顶小帽子。它不起作用。',
      A: '认知能力论点运用得很好。',
      B: '辩护尚可。巧克力储藏事件没有得到充分解决。',
      C: '饼干船长提供的有用信息比辩护方更多。',
      D: '饼干船长刚刚说"辩护方可以做得更好"。他说得对。',
    },
  },
}

export default case010
