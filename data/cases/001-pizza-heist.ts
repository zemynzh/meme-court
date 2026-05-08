import type { BilingualCase } from '../types'

const case001: BilingualCase = {
  id: '001',
  category: 'Food Crimes',

  en: {
    title: 'The Great Pizza Heist',
    defendant: 'Mr. Nibbles, a raccoon wearing sunglasses',
    charge: "Stealing the mayor's ceremonial pizza during a live-streamed town meeting",
    summary:
      'The prosecution claims Mr. Nibbles acted with premeditated snack intent. Security footage shows a masked figure moving with suspicious confidence toward the pizza table. The defense argues he was simply following the smell of destiny.',
    atmosphere: 'Tense and extremely cheesy',
    openingStatement:
      'Order in the court! Today we address one of the most brazen acts of culinary theft this city has ever witnessed. The defendant — a raccoon in sunglasses — allegedly stole the mayor\'s ceremonial pizza in front of 40,000 live viewers. The prosecution is ready.',
    evidenceCards: [
      {
        id: 'a',
        name: 'Blurry Security Photo',
        description:
          'A security camera image showing something that might be a raccoon, or possibly a very suspicious backpack with eyes. Experts are divided.',
        credibility: 6,
        tag: 'Weird',
      },
      {
        id: 'b',
        name: 'Half-Eaten Pizza Crust',
        description:
          'A pizza crust found near the crime scene with tiny paw prints and what appears to be sunscreen residue. DNA testing is pending.',
        credibility: 8,
        tag: 'Damning',
      },
      {
        id: 'c',
        name: 'Mysterious Text Message',
        description:
          'A text message reading: "Operation Mozzarella starts at midnight." The sender is listed as "Not Mr. Nibbles."',
        credibility: 7,
        tag: 'Suspicious',
      },
      {
        id: 'd',
        name: 'Sunglasses Receipt',
        description:
          'A receipt from a local shop for one pair of aviator sunglasses, purchased the morning of the incident. Signed with a paw print.',
        credibility: 5,
        tag: 'Questionable',
      },
      {
        id: 'e',
        name: 'Witness Selfie',
        description:
          'A bystander\'s selfie accidentally captured a raccoon in the background holding what appears to be an entire pizza box.',
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'f',
        name: 'Prior Arrest Record',
        description:
          'A police file documenting Mr. Nibbles\' three previous encounters with law enforcement, all food-related: a 2021 taco incident, a 2022 hot dog cart altercation, and a 2023 "misunderstanding" involving a churro stand. The file is annotated with the note "repeat offender, escalating ambition."',
        credibility: 7,
        tag: 'Chaotic',
      },
    ],
    witnesses: [
      {
        name: 'Gary the Pizza Delivery Guy',
        role: 'Eyewitness',
        testimony:
          'I saw a small masked creature near the crime scene. It moved with purpose, confidence, and possibly hunger. It also winked at me, which I found unprofessional.',
        personality: 'Nervous and slightly offended',
        rebuttal:
          'I know what I saw. That raccoon had a plan. Animals don\'t just wink. That was intentional.',
      },
      {
        name: 'Mayor Patricia Goldstein',
        role: 'Victim',
        testimony:
          'That pizza was ceremonial. It was blessed by the city council. It was not meant to be eaten by a raccoon. I am devastated and also slightly impressed by the audacity.',
        personality: 'Outraged but secretly amused',
        rebuttal:
          'The pizza had my name on it. Literally. It said "Mayor\'s Pizza." There is no ambiguity here.',
      },
    ],
    judgeQuestion:
      'Counselor, if your client was merely "following the smell of destiny," can you explain why he was wearing sunglasses indoors at night?',
    verdictOptions: {
      guilty: 'GUILTY OF FIRST-DEGREE PIZZA THEFT WITH INTENT TO SNACK',
      notGuilty: 'NOT GUILTY — THE PIZZA WAS CLEARLY ABANDONED',
      partial: 'GUILTY OF TRESPASSING, NOT GUILTY OF THEFT — THE PIZZA WAS A GIFT FROM THE UNIVERSE',
    },
    judgeComments: {
      S: 'The defense was so compelling I almost forgot this was about a raccoon. Almost.',
      A: 'Solid argument. The pizza crust evidence was handled masterfully.',
      B: 'Decent effort. The sunglasses angle was underexplored.',
      C: 'The court has seen better. The raccoon looked more prepared than you.',
      D: 'Mr. Nibbles could have defended himself more effectively.',
    },
  },

  zh: {
    title: '披萨大劫案',
    defendant: '尼布尔斯先生，一只戴着太阳镜的浣熊',
    charge: '在市政会议直播期间偷走市长的仪式披萨',
    summary:
      '检察官声称尼布尔斯先生蓄意实施了这次零食犯罪。安保录像显示一个戴面具的身影以令人可疑的自信向披萨桌走去。辩护方认为他只是在追随命运的气味。',
    atmosphere: '紧张而极其俗气',
    openingStatement:
      '法庭肃静！今天我们要审理这座城市有史以来最厚颜无耻的美食盗窃案。被告——一只戴太阳镜的浣熊——据称在4万名直播观众面前偷走了市长的仪式披萨。检察方已准备就绪。',
    evidenceCards: [
      {
        id: 'a',
        name: '模糊的安保照片',
        description:
          '一张安保摄像头拍摄的图像，显示的可能是一只浣熊，也可能是一个非常可疑的、长着眼睛的背包。专家们意见不一。',
        credibility: 6,
        tag: 'Weird',
      },
      {
        id: 'b',
        name: '半块披萨饼皮',
        description:
          '在犯罪现场附近发现的披萨饼皮，上面有微小的爪印，以及疑似防晒霜的残留物。DNA检测正在进行中。',
        credibility: 8,
        tag: 'Damning',
      },
      {
        id: 'c',
        name: '神秘短信',
        description:
          '一条短信写道："马苏里拉行动午夜开始。"发件人显示为"不是尼布尔斯"。',
        credibility: 7,
        tag: 'Suspicious',
      },
      {
        id: 'd',
        name: '太阳镜购买收据',
        description:
          '一张当地商店的收据，显示事发当天早上购买了一副飞行员太阳镜。收据上盖有爪印签名。',
        credibility: 5,
        tag: 'Questionable',
      },
      {
        id: 'e',
        name: '目击者自拍照',
        description:
          '一名旁观者的自拍照意外拍到了背景中一只浣熊，它似乎抱着一整个披萨盒。',
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'f',
        name: '前科记录',
        description:
          '一份警方档案，记录了尼布尔斯先生与执法部门的三次前科，全部与食物有关：2021年的玉米卷事件、2022年的热狗摊冲突，以及2023年涉及吉事果摊位的"误会"。档案上附注："惯犯，野心不断升级。"',
        credibility: 7,
        tag: 'Chaotic',
      },
    ],
    witnesses: [
      {
        name: '外卖员加里',
        role: '目击证人',
        testimony:
          '我在犯罪现场附近看到了一个戴面具的小生物。它行动果断、自信，可能还很饥饿。它还向我眨了眨眼，我觉得这很不专业。',
        personality: '紧张且略感冒犯',
        rebuttal:
          '我知道我看到了什么。那只浣熊是有计划的。动物不会随便眨眼。那是故意的。',
      },
      {
        name: '市长帕特里夏·戈德斯坦',
        role: '受害者',
        testimony:
          '那块披萨是仪式用的。它经过了市议会的祝福。它不是用来被浣熊吃掉的。我既感到震惊，又对这种厚颜无耻略感佩服。',
        personality: '愤怒但暗自好笑',
        rebuttal:
          '披萨上写着我的名字。字面意思。上面写着"市长的披萨"。这没有任何歧义。',
      },
    ],
    judgeQuestion:
      '律师，如果您的当事人只是在"追随命运的气味"，您能解释一下为什么他在夜间室内戴着太阳镜吗？',
    verdictOptions: {
      guilty: '一级披萨盗窃罪成立，蓄意零食犯罪',
      notGuilty: '无罪——披萨显然是被遗弃的',
      partial: '非法侵入罪成立，盗窃罪不成立——披萨是宇宙的馈赠',
    },
    judgeComments: {
      S: '辩护如此有力，我几乎忘记这是关于一只浣熊的案子。几乎。',
      A: '论点扎实。对披萨饼皮证据的处理堪称精妙。',
      B: '还算不错。太阳镜这个角度没有充分发挥。',
      C: '本庭见过更好的表现。那只浣熊看起来比你准备得更充分。',
      D: '尼布尔斯先生自我辩护可能会更有效。',
    },
  },
}

export default case001
