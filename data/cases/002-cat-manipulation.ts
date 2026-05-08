import type { BilingualCase } from '../types'

const case002: BilingualCase = {
  id: '002',
  category: 'Pet Drama',

  en: {
    title: 'The Emotional Manipulation Incident',
    defendant: 'Chairman Whiskers, a tabby cat',
    charge: 'Emotional manipulation of three household members using strategic purring and calculated eye contact',
    summary:
      'The prosecution alleges Chairman Whiskers deployed calculated cuteness to extract premium tuna on 47 separate occasions. Witnesses report the defendant would stare directly into their souls until compliance was achieved. The defense maintains this is simply called being a cat.',
    atmosphere: 'Emotionally charged and slightly judgmental',
    openingStatement:
      'This court has seen many crimes, but few as psychologically sophisticated as this one. The defendant — a tabby cat of approximately four years — allegedly weaponized affection itself. We will prove that purring can, in fact, be premeditated.',
    evidenceCards: [
      {
        id: 'a',
        name: 'Tuna Purchase Receipts',
        description: '47 receipts for premium tuna, all timestamped within 10 minutes of "the stare" being reported by household members.',
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: 'Witness Therapy Bills',
        description: 'Three therapy invoices citing "feline-induced decision fatigue" as the primary diagnosis. Total cost: $2,400.',
        credibility: 7,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: 'The Purr Recording',
        description: 'An audio recording of a purr that three independent experts described as "unreasonably persuasive" and "borderline hypnotic."',
        credibility: 8,
        tag: 'Weird',
      },
      {
        id: 'd',
        name: 'Slow Blink Footage',
        description: 'Security camera footage showing the defendant performing 23 consecutive slow blinks at the primary victim over a 4-minute period.',
        credibility: 6,
        tag: 'Suspicious',
      },
      {
        id: 'e',
        name: 'The Empty Tuna Cabinet',
        description: 'Photographic evidence of a cabinet that once held 50 cans of premium tuna, now completely empty. Paw prints on the door handle.',
        credibility: 8,
        tag: 'Damning',
      },
      {
        id: 'f',
        name: "Chairman Whiskers' Toy Collection",
        description: "An inventory of the defendant's toy basket revealing 23 untouched cat toys, a crinkle ball still in its packaging, and one feather wand with a handwritten tag reading 'for emergencies.' Experts note the toys were never used — the defendant preferred psychological tools.",
        credibility: 5,
        tag: 'Useful',
      },
    ],
    witnesses: [
      {
        name: 'Dave, the Primary Victim',
        role: 'Household Member',
        testimony: "I just wanted to watch TV. He sat on the remote and looked at me. I bought tuna. I don't know how it keeps happening. I've spent $800 this month alone.",
        personality: 'Defeated and slightly ashamed',
        rebuttal: "I'm not weak. The cat is just... very good at what he does. It's not manipulation if you don't realize it's happening, right?",
      },
      {
        name: 'Dr. Felicia Paws, Animal Behaviorist',
        role: 'Expert Witness',
        testimony: 'In my 20 years of studying feline behavior, Chairman Whiskers displays what I call "apex manipulation syndrome." The slow blink alone could destabilize a small government.',
        personality: 'Academically alarmed',
        rebuttal: 'I have the data. The purr frequency is calibrated to trigger human oxytocin release. This is not accidental. This cat has a strategy.',
      },
    ],
    judgeQuestion: 'Counselor, your client is currently sitting on my gavel. Should I be concerned?',
    verdictOptions: {
      guilty: 'GUILTY OF EMOTIONAL MANIPULATION WITH INTENT TO OBTAIN TUNA',
      notGuilty: 'NOT GUILTY — LOVE CANNOT BE CRIMINALIZED',
      partial: 'GUILTY OF CUTENESS IN THE FIRST DEGREE, NOT GUILTY OF MANIPULATION',
    },
    judgeComments: {
      S: 'The defense successfully argued that love is not a crime. The court is moved. And slightly hungry.',
      A: 'Strong performance. The purr recording rebuttal was particularly effective.',
      B: 'Adequate defense. The tuna receipts were not fully addressed.',
      C: 'The cat looked more confident than the defense attorney.',
      D: 'Chairman Whiskers has already won. The court acknowledges this.',
    },
  },

  zh: {
    title: '情绪操控事件',
    defendant: '主席胡须，一只虎斑猫',
    charge: '利用策略性呼噜声和精心计算的眼神接触对三名家庭成员进行情绪操控',
    summary:
      '检察官指控主席胡须利用精心计算的可爱行为，在47次不同场合索取高级金枪鱼。目击者报告称，被告会直视他们的灵魂深处，直到获得服从。辩护方坚持认为这只是猫的本性。',
    atmosphere: '情绪激动，略带评判性',
    openingStatement:
      '本庭见过许多罪行，但很少有像这起案件这样心理上如此复杂的。被告——一只大约四岁的虎斑猫——据称将情感本身武器化。我们将证明，呼噜声实际上可以是蓄意为之的。',
    evidenceCards: [
      {
        id: 'a',
        name: '金枪鱼购买收据',
        description: '47张高级金枪鱼的收据，所有收据的时间戳都在家庭成员报告"被凝视"后10分钟内。',
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: '目击者心理治疗账单',
        description: '三张心理治疗发票，主要诊断为"猫科动物引发的决策疲劳"。总费用：2400美元。',
        credibility: 7,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: '呼噜声录音',
        description: '一段呼噜声录音，三位独立专家将其描述为"不合理地具有说服力"和"近乎催眠"。',
        credibility: 8,
        tag: 'Weird',
      },
      {
        id: 'd',
        name: '慢眨眼录像',
        description: '安保摄像头录像显示，被告在4分钟内对主要受害者连续进行了23次慢眨眼。',
        credibility: 6,
        tag: 'Suspicious',
      },
      {
        id: 'e',
        name: '空金枪鱼柜',
        description: '照片证据显示，一个曾存放50罐高级金枪鱼的柜子现在完全空了。门把手上有爪印。',
        credibility: 8,
        tag: 'Damning',
      },
      {
        id: 'f',
        name: '主席胡须的玩具收藏',
        description: '被告玩具篮的清单显示，23件猫咪玩具从未被碰过，一个沙沙球仍在包装中，还有一根羽毛逗猫棒，上面贴着手写标签"紧急情况备用"。专家指出，这些玩具从未被使用——被告更偏爱心理工具。',
        credibility: 5,
        tag: 'Useful',
      },
    ],
    witnesses: [
      {
        name: '主要受害者戴夫',
        role: '家庭成员',
        testimony: '我只是想看电视。他坐在遥控器上看着我。我就去买了金枪鱼。我不知道这是怎么一直发生的。光这个月我就花了800美元。',
        personality: '沮丧且略感羞愧',
        rebuttal: '我不是软弱。只是那只猫……非常擅长它所做的事。如果你没意识到这是操控，那就不算操控，对吧？',
      },
      {
        name: '动物行为学家菲利西亚·爪博士',
        role: '专家证人',
        testimony: '在我20年的猫科动物行为研究中，主席胡须表现出我所称的"顶级操控综合症"。仅凭慢眨眼一项就足以动摇一个小型政府。',
        personality: '学术上感到震惊',
        rebuttal: '我有数据。呼噜声频率经过校准，可以触发人类催产素释放。这不是偶然的。这只猫有策略。',
      },
    ],
    judgeQuestion: '律师，您的当事人目前正坐在我的法槌上。我应该担心吗？',
    verdictOptions: {
      guilty: '以获取金枪鱼为目的的情绪操控罪成立',
      notGuilty: '无罪——爱不能被定罪',
      partial: '一级可爱罪成立，操控罪不成立',
    },
    judgeComments: {
      S: '辩护方成功论证了爱不是犯罪。法庭深受感动。而且略感饥饿。',
      A: '表现出色。对呼噜声录音的反驳尤为有效。',
      B: '辩护尚可。金枪鱼收据问题没有得到充分解决。',
      C: '那只猫看起来比辩护律师更有自信。',
      D: '主席胡须已经赢了。法庭承认这一点。',
    },
  },
}

export default case002
