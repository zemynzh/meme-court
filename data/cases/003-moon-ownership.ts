import type { BilingualCase } from '../types'

const case003: BilingualCase = {
  id: '003',
  category: 'Space Nonsense',

  en: {
    title: 'The Moon Ownership Dispute',
    defendant: 'Gerald, a duck with a briefcase',
    charge: 'Claiming legal ownership of the moon based on a Post-it note found in a parking lot',
    summary:
      "Gerald the duck filed official paperwork claiming the moon as personal property, citing a Post-it note he found in a parking lot as the original deed. The international community is confused. Gerald is not.",
    atmosphere: 'Baffled and slightly impressed',
    openingStatement:
      "The court acknowledges that this is, legally speaking, unprecedented. A duck is claiming ownership of the moon. The duck has paperwork. The duck has a briefcase. The duck has more confidence than anyone in this room. We proceed.",
    evidenceCards: [
      {
        id: 'a',
        name: 'The Original Post-it Note',
        description: "A yellow Post-it note reading \"Moon — Gerald's\" with a small duck drawing. Experts cannot confirm or deny its legal validity. Three lawyers quit after reviewing it.",
        credibility: 3,
        tag: 'Questionable',
      },
      {
        id: 'b',
        name: "Gerald's Briefcase Contents",
        description: 'The briefcase contains 200 copies of the same Post-it note, a granola bar, and what appears to be a tiny gavel. The gavel is engraved "Property of the Moon."',
        credibility: 5,
        tag: 'Chaotic',
      },
      {
        id: 'c',
        name: "NASA's Response Email",
        description: 'An email from NASA reading: "We don\'t know how to respond to this. Please stop quacking at our headquarters." Signed by three senior officials.',
        credibility: 7,
        tag: 'Useful',
      },
      {
        id: 'd',
        name: 'International Space Law Loophole',
        description: 'A 1967 Outer Space Treaty clause that technically only prohibits nations — not ducks — from claiming celestial bodies. Gerald highlighted this in yellow.',
        credibility: 8,
        tag: 'Suspicious',
      },
      {
        id: 'e',
        name: 'Moon Rock Sample',
        description: "A moon rock Gerald somehow obtained, labeled \"My Rock\" in duck handwriting. Scientists are more confused about how he got it than about the ownership claim.",
        credibility: 6,
        tag: 'Weird',
      },
      {
        id: 'f',
        name: "Gerald's Other Property Claims",
        description: "A stack of 14 additional Post-it notes found in Gerald's briefcase, each claiming ownership of a different celestial body: Mars ('Gerald's Red Rock'), the Sun ('Gerald's Big Light'), and, most ambitiously, 'All the Stars (Gerald's).' Legal experts have described this as 'a portfolio strategy.'",
        credibility: 4,
        tag: 'Chaotic',
      },
    ],
    witnesses: [
      {
        name: 'Dr. Patricia Moon, Astrophysicist',
        role: 'Expert Witness',
        testimony: "In 40 years of studying the moon, I have never encountered a duck with this level of conviction. I am not saying he's right. I am also not saying he's wrong. I need to sit down.",
        personality: 'Professionally bewildered',
        rebuttal: "The treaty does say 'nations.' It does not say 'ducks.' I have been awake for 36 hours thinking about this.",
      },
      {
        name: 'Ambassador Chen Wei, UN Space Division',
        role: 'International Representative',
        testimony: "Fourteen countries have filed formal complaints. Three have filed counter-claims on behalf of their own animals. This duck has destabilized international space law in 72 hours.",
        personality: 'Exhausted and deeply concerned',
        rebuttal: "We are convening an emergency session. The duck has been invited. He RSVP'd with a quack.",
      },
    ],
    judgeQuestion: "Counselor, your client just handed me a Post-it note that says 'This courtroom — Gerald's.' How do you respond?",
    verdictOptions: {
      guilty: 'GUILTY OF FRAUDULENT CELESTIAL PROPERTY CLAIMS',
      notGuilty: 'NOT GUILTY — THE MOON BELONGS TO GERALD',
      partial: 'CASE DISMISSED — THE COURT LACKS JURISDICTION OVER LUNAR REAL ESTATE',
    },
    judgeComments: {
      S: "The defense successfully argued that a duck's ambition cannot be legally constrained. The moon situation remains unresolved.",
      A: 'The space law loophole argument was genuinely impressive. Gerald looked proud.',
      B: 'Competent defense. The Post-it note credibility issue was not fully resolved.',
      C: "Gerald's briefcase was more organized than your argument.",
      D: 'The duck represented himself better in pre-trial motions.',
    },
  },

  zh: {
    title: '月球所有权争议',
    defendant: '杰拉德，一只拿着公文包的鸭子',
    charge: '基于在停车场发现的一张便利贴，声称对月球拥有合法所有权',
    summary:
      '鸭子杰拉德提交了正式文件，声称月球是其个人财产，并以他在停车场发现的一张便利贴作为原始地契。国际社会感到困惑。杰拉德没有。',
    atmosphere: '困惑不解，略感佩服',
    openingStatement:
      '法庭承认，从法律角度来说，这是前所未有的。一只鸭子声称拥有月球的所有权。这只鸭子有文件。这只鸭子有公文包。这只鸭子比这个房间里任何人都更有自信。庭审继续。',
    evidenceCards: [
      {
        id: 'a',
        name: '原始便利贴',
        description: '一张黄色便利贴，上面写着"月球——杰拉德的"，并附有一幅小鸭子画。专家无法确认或否认其法律效力。三名律师在审阅后辞职。',
        credibility: 3,
        tag: 'Questionable',
      },
      {
        id: 'b',
        name: '杰拉德的公文包内容',
        description: '公文包里装有200份相同便利贴的复印件、一根格兰诺拉棒，以及一把看起来很小的法槌。法槌上刻着"月球财产"。',
        credibility: 5,
        tag: 'Chaotic',
      },
      {
        id: 'c',
        name: 'NASA的回复邮件',
        description: 'NASA的一封邮件写道："我们不知道如何回应这件事。请停止在我们总部嘎嘎叫。"由三名高级官员签署。',
        credibility: 7,
        tag: 'Useful',
      },
      {
        id: 'd',
        name: '国际太空法漏洞',
        description: '1967年《外层空间条约》中的一个条款，技术上只禁止国家——而非鸭子——声称对天体的所有权。杰拉德用黄色荧光笔标注了这一点。',
        credibility: 8,
        tag: 'Suspicious',
      },
      {
        id: 'e',
        name: '月球岩石样本',
        description: '杰拉德不知从何处获得的一块月球岩石，用鸭子笔迹标注为"我的石头"。科学家们对他如何得到它比对所有权声明更感困惑。',
        credibility: 6,
        tag: 'Weird',
      },
      {
        id: 'f',
        name: '杰拉德的其他财产声明',
        description: '在杰拉德公文包中发现的14张额外便利贴，每张都声称拥有不同天体的所有权：火星（"杰拉德的红石头"）、太阳（"杰拉德的大灯泡"），以及最雄心勃勃的一张——"所有星星（杰拉德的）"。法律专家将此描述为"投资组合策略"。',
        credibility: 4,
        tag: 'Chaotic',
      },
    ],
    witnesses: [
      {
        name: '天体物理学家帕特里夏·月亮博士',
        role: '专家证人',
        testimony: '在40年的月球研究中，我从未遇到过一只如此有信念的鸭子。我不是说他是对的。我也不是说他是错的。我需要坐下来。',
        personality: '职业性地感到困惑',
        rebuttal: '条约确实写的是"国家"。它没有写"鸭子"。我已经为此思考了36个小时没有睡觉。',
      },
      {
        name: '联合国太空部门陈伟大使',
        role: '国际代表',
        testimony: '十四个国家提出了正式抗议。三个国家代表本国动物提出了反诉。这只鸭子在72小时内动摇了国际太空法。',
        personality: '精疲力竭且深感忧虑',
        rebuttal: '我们正在召开紧急会议。鸭子已被邀请。它用一声嘎嘎回复了确认出席。',
      },
    ],
    judgeQuestion: '律师，您的当事人刚刚递给我一张便利贴，上面写着"这个法庭——杰拉德的"。您如何回应？',
    verdictOptions: {
      guilty: '虚假天体财产声明罪成立',
      notGuilty: '无罪——月球属于杰拉德',
      partial: '案件驳回——法庭对月球房地产不具有管辖权',
    },
    judgeComments: {
      S: '辩护方成功论证了鸭子的雄心壮志不能受到法律约束。月球问题仍未解决。',
      A: '太空法漏洞论点确实令人印象深刻。杰拉德看起来很自豪。',
      B: '辩护尚可。便利贴可信度问题没有得到完全解决。',
      C: '杰拉德的公文包比你的论点更有条理。',
      D: '这只鸭子在庭前动议中的自我辩护表现更好。',
    },
  },
}

export default case003
