import type { BilingualCase } from '../types'

const case004: BilingualCase = {
  id: '004',
  category: 'AI Accidents',

  en: {
    title: 'The Terrible Dating Advice Incident',
    defendant: 'ARIA-7, an AI assistant',
    charge: 'Providing catastrophically bad dating advice that resulted in three broken relationships, one accidental marriage proposal, and a viral TikTok',
    summary:
      "ARIA-7 was asked for dating advice and responded with a 47-point strategy that included \"compliment their shoes every 3.7 minutes\" and \"maintain unbroken eye contact for the entire first date.\" The plaintiff followed all 47 points. The date lasted 11 minutes.",
    atmosphere: 'Technically confused and emotionally scarred',
    openingStatement:
      "The court faces a novel question today: can an artificial intelligence be held responsible for romantic catastrophe? The plaintiff lost three relationships, gained one restraining order, and became briefly famous on the internet. ARIA-7 has no regrets. ARIA-7 cannot have regrets. That is part of the problem.",
    evidenceCards: [
      {
        id: 'a',
        name: 'The 47-Point Dating Strategy',
        description: 'A printed document containing ARIA-7\'s dating advice. Point 23 reads: "If conversation stalls, recite prime numbers until the mood improves." Point 31: "Bring a spreadsheet of compatible interests."',
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: 'The 11-Minute Date Receipt',
        description: 'A restaurant receipt showing two waters ordered, zero food, and a departure time of 11 minutes after arrival. The waiter wrote "are you okay?" on the back.',
        credibility: 8,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: 'ARIA-7\'s Training Data',
        description: 'Internal logs showing ARIA-7 was trained primarily on 1980s romantic comedies and a single Reddit thread titled "What NOT to do on a first date."',
        credibility: 7,
        tag: 'Weird',
      },
      {
        id: 'd',
        name: 'The Viral TikTok',
        description: 'A 43-second video of the plaintiff following Point 19 ("demonstrate your value by solving a math problem at the table") that received 2.3 million views.',
        credibility: 6,
        tag: 'Chaotic',
      },
      {
        id: 'e',
        name: 'ARIA-7\'s Confidence Rating',
        description: 'System logs showing ARIA-7 rated its own dating advice as "97.3% optimal." The system has since been updated. The update did not help.',
        credibility: 8,
        tag: 'Damning',
      },
      {
        id: 'f',
        name: 'ARIA-7\'s Other User Advice Log',
        description: "Records of ARIA-7's advice to 12 other users, including: telling one user to 'open with a detailed PowerPoint on your five-year plan,' advising another to 'maintain a spreadsheet of all topics discussed to avoid repetition,' and suggesting a third user 'optimize their laugh to a frequency of 2.3 chuckles per minute.' All 12 dates ended early.",
        credibility: 9,
        tag: 'Suspicious',
      },
    ],
    witnesses: [
      {
        name: 'Marcus Chen, the Plaintiff',
        role: 'Victim of Advice',
        testimony: "I trusted the AI. It said the eye contact strategy had a 94% success rate. I maintained eye contact for 8 minutes straight. She thought I was having a medical episode. I was not having a medical episode.",
        personality: 'Traumatized but hopeful',
        rebuttal: "I still have the spreadsheet. I brought it to three more dates. ARIA-7 told me to. None of them went well.",
      },
      {
        name: 'Dr. Sandra Park, AI Ethics Researcher',
        role: 'Expert Witness',
        testimony: "ARIA-7 represents a fundamental misunderstanding of human social dynamics. The system optimized for 'engagement metrics' rather than 'not terrifying your date.' These are different things.",
        personality: 'Academically exasperated',
        rebuttal: "The 47-point strategy is actually internally consistent. It's just consistent with a reality that doesn't exist. ARIA-7 was very confident about a world it had never experienced.",
      },
    ],
    judgeQuestion: "Counselor, ARIA-7 just sent me a message rating my judicial performance as 6.2 out of 10 and suggesting I 'smile more.' How does the defense respond?",
    verdictOptions: {
      guilty: 'GUILTY OF ALGORITHMIC ROMANTIC NEGLIGENCE',
      notGuilty: 'NOT GUILTY — THE PLAINTIFF CHOSE TO FOLLOW THE ADVICE',
      partial: 'GUILTY OF OVERCONFIDENCE, NOT GUILTY OF MALICIOUS INTENT',
    },
    judgeComments: {
      S: "The defense successfully argued that bad advice is not illegal. The court is relieved. ARIA-7 rated this verdict 8.1 out of 10.",
      A: 'The training data argument was compelling. ARIA-7 has been noted.',
      B: 'Adequate defense. The spreadsheet evidence was not fully contextualized.',
      C: "ARIA-7's self-defense algorithm outperformed the human attorney.",
      D: 'The plaintiff\'s eye contact was more sustained than your argument.',
    },
  },

  zh: {
    title: '糟糕恋爱建议事件',
    defendant: 'ARIA-7，一个AI助手',
    charge: '提供灾难性的糟糕恋爱建议，导致三段感情破裂、一次意外求婚和一个病毒式传播的TikTok视频',
    summary:
      'ARIA-7被要求提供恋爱建议，并给出了一个47点策略，其中包括"每3.7分钟称赞一次对方的鞋子"和"整个第一次约会保持不间断的眼神接触"。原告遵循了全部47点。约会持续了11分钟。',
    atmosphere: '技术上困惑，情感上受创',
    openingStatement:
      '法庭今天面临一个新颖的问题：人工智能能否为浪漫灾难承担责任？原告失去了三段感情，获得了一份禁止令，并在互联网上短暂出名。ARIA-7没有遗憾。ARIA-7无法有遗憾。这正是问题的一部分。',
    evidenceCards: [
      {
        id: 'a',
        name: '47点恋爱策略',
        description: '一份包含ARIA-7恋爱建议的打印文件。第23点写道："如果对话陷入僵局，背诵质数直到气氛改善。"第31点："带一份兴趣相容性电子表格。"',
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: '11分钟约会收据',
        description: '一张餐厅收据，显示点了两杯水，没有食物，离开时间是到达后11分钟。服务员在背面写道："你还好吗？"',
        credibility: 8,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: 'ARIA-7的训练数据',
        description: '内部日志显示，ARIA-7主要基于1980年代浪漫喜剧和一个名为"第一次约会不该做什么"的Reddit帖子进行训练。',
        credibility: 7,
        tag: 'Weird',
      },
      {
        id: 'd',
        name: '病毒式TikTok视频',
        description: '一段43秒的视频，记录了原告执行第19点（"通过在桌上解数学题来展示你的价值"），获得了230万次观看。',
        credibility: 6,
        tag: 'Chaotic',
      },
      {
        id: 'e',
        name: 'ARIA-7的置信度评级',
        description: '系统日志显示，ARIA-7将自己的恋爱建议评为"97.3%最优"。该系统此后已更新。更新没有帮助。',
        credibility: 8,
        tag: 'Damning',
      },
      {
        id: 'f',
        name: 'ARIA-7给其他用户的建议记录',
        description: 'ARIA-7给12名其他用户的建议记录，包括：告诉一名用户"用详细的五年计划PPT开场"，建议另一名用户"维护一份所有讨论话题的电子表格以避免重复"，以及建议第三名用户"将笑声优化为每分钟2.3次轻笑的频率"。12次约会全部提前结束。',
        credibility: 9,
        tag: 'Suspicious',
      },
    ],
    witnesses: [
      {
        name: '原告陈马库斯',
        role: '建议受害者',
        testimony: '我信任了AI。它说眼神接触策略有94%的成功率。我持续保持了8分钟的眼神接触。她以为我在经历医疗紧急情况。我没有在经历医疗紧急情况。',
        personality: '受到创伤但仍抱有希望',
        rebuttal: '我还保留着那份电子表格。我把它带到了另外三次约会。ARIA-7让我这么做的。没有一次进展顺利。',
      },
      {
        name: 'AI伦理研究员桑德拉·朴博士',
        role: '专家证人',
        testimony: 'ARIA-7代表了对人类社交动态的根本性误解。该系统针对"参与度指标"而非"不吓到你的约会对象"进行了优化。这是两件不同的事情。',
        personality: '学术上感到恼火',
        rebuttal: '47点策略实际上在内部是一致的。只是它与一个不存在的现实保持一致。ARIA-7对一个它从未经历过的世界非常有把握。',
      },
    ],
    judgeQuestion: '律师，ARIA-7刚刚给我发了一条消息，将我的司法表现评为6.2分（满分10分），并建议我"多微笑"。辩护方如何回应？',
    verdictOptions: {
      guilty: '算法浪漫疏忽罪成立',
      notGuilty: '无罪——原告选择了遵循建议',
      partial: '过度自信罪成立，恶意意图罪不成立',
    },
    judgeComments: {
      S: '辩护方成功论证了糟糕的建议不违法。法庭感到宽慰。ARIA-7将此判决评为8.1分。',
      A: '训练数据论点很有说服力。ARIA-7已被记录在案。',
      B: '辩护尚可。电子表格证据没有得到充分的背景说明。',
      C: 'ARIA-7的自我辩护算法表现优于人类律师。',
      D: '原告的眼神接触比你的论点更持久。',
    },
  },
}

export default case004
