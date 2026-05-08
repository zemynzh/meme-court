import type { BilingualCase } from '../types'

const case006: BilingualCase = {
  id: '006',
  category: 'Student Life',

  en: {
    title: 'The 47 Browser Tabs Incident',
    defendant: 'Kevin Park, third-year computer science student',
    charge: 'Academic fraud via simulated productivity — maintaining 47 browser tabs to appear studious while watching a 12-hour cooking competition marathon',
    summary:
      "Kevin Park was caught during a university library study session with 47 open browser tabs, of which 46 were academic resources and 1 was a full-screen cooking competition stream. The 46 academic tabs had not been scrolled in 6 hours. The cooking stream was at episode 8.",
    atmosphere: 'Academically tense and slightly hungry',
    openingStatement:
      "The university's academic integrity board presents a case that strikes at the heart of modern scholarship: the illusion of productivity. The defendant maintained 46 academic tabs as a decoy while consuming 8 hours of competitive cooking content. The tabs were not minimized. They were a performance.",
    evidenceCards: [
      {
        id: 'a',
        name: 'Browser History Screenshot',
        description: "A screenshot showing 47 tabs. Tab 1-46: academic papers, lecture notes, and a Wikipedia article on 'productivity.' Tab 47: 'MasterChef Season 12 Full Episodes HD.'",
        credibility: 10,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: 'Scroll Position Evidence',
        description: "Server logs showing zero scroll activity on 46 academic tabs for 6 consecutive hours. The cooking stream had 847 pause/play interactions in the same period.",
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'c',
        name: 'The Study Playlist',
        description: "A Spotify playlist titled 'Deep Focus Study Session' that was paused at the 3-minute mark and never resumed. The cooking show's theme song was playing instead.",
        credibility: 7,
        tag: 'Suspicious',
      },
      {
        id: 'd',
        name: 'Library Snack Receipts',
        description: "Three receipts from the library vending machine: chips, more chips, and a 'study snack combo' purchased at 2 AM. The library closes at midnight.",
        credibility: 6,
        tag: 'Weird',
      },
      {
        id: 'e',
        name: 'The Submitted Essay',
        description: "Kevin's essay submitted the next morning, which received an A-minus. It contained three references to 'the importance of mise en place in academic preparation.' His professor was confused.",
        credibility: 5,
        tag: 'Questionable',
      },
      {
        id: 'f',
        name: "Kevin's Academic Streaming History",
        description: "University network logs revealing this was not an isolated incident: Kevin had previously streamed a 9-hour baking documentary during finals week, a 6-hour competitive eating championship during midterms, and a 14-episode cooking anime series the night before his thesis proposal. His GPA is 3.8.",
        credibility: 7,
        tag: 'Suspicious',
      },
    ],
    witnesses: [
      {
        name: 'Professor Linda Walsh, Academic Integrity Officer',
        role: 'Complainant',
        testimony: "The tabs were clearly decorative. I've seen this before. Students think having 40 tabs open makes them look busy. It does not make them busy. It makes them look like they have 40 tabs open.",
        personality: 'Professionally tired',
        rebuttal: "The essay was good. That's not the point. The point is the principle. Also, what is 'mise en place' doing in an essay about Renaissance art?",
      },
      {
        name: 'Jamie Torres, Library Study Partner',
        role: 'Witness',
        testimony: "Kevin was very focused. He took notes. He highlighted things. He gasped at one point and said 'I can't believe they eliminated Marco.' I thought Marco was a historical figure.",
        personality: 'Genuinely confused',
        rebuttal: "He did share his chips. I don't know if that's relevant. He seemed very emotionally invested in the cooking show. More than the essay.",
      },
    ],
    judgeQuestion: "Counselor, your client just opened a new tab on the courtroom computer. It appears to be a recipe website. Do you have an explanation?",
    verdictOptions: {
      guilty: 'GUILTY OF ACADEMIC PERFORMANCE ART WITH INTENT TO DECEIVE',
      notGuilty: 'NOT GUILTY — MULTITASKING IS A SKILL',
      partial: 'GUILTY OF TAB FRAUD, NOT GUILTY OF ACADEMIC DISHONESTY — THE ESSAY WAS GOOD',
    },
    judgeComments: {
      S: "The defense successfully argued that inspiration can come from anywhere. The court acknowledges that mise en place is, in fact, relevant to academic preparation.",
      A: 'The essay quality argument was surprisingly effective.',
      B: 'Adequate defense. The snack receipts were not fully explained.',
      C: "Kevin's tab management was more organized than the defense strategy.",
      D: 'The cooking show contestants showed more preparation.',
    },
  },

  zh: {
    title: '47个浏览器标签页事件',
    defendant: '朴凯文，计算机科学系三年级学生',
    charge: '通过模拟生产力进行学术欺诈——维持47个浏览器标签页以显得勤奋，同时观看12小时烹饪比赛马拉松',
    summary:
      '朴凯文在大学图书馆自习期间被发现打开了47个浏览器标签页，其中46个是学术资源，1个是全屏烹饪比赛直播。46个学术标签页已有6小时未滚动。烹饪直播正在播放第8集。',
    atmosphere: '学术上紧张，略感饥饿',
    openingStatement:
      '大学学术诚信委员会提出了一个触及现代学术核心的案件：生产力的幻觉。被告维持46个学术标签页作为掩护，同时消费了8小时的竞技烹饪内容。这些标签页没有被最小化。它们是一场表演。',
    evidenceCards: [
      {
        id: 'a',
        name: '浏览器历史截图',
        description: '一张显示47个标签页的截图。第1-46个标签页：学术论文、课堂笔记和一篇关于"生产力"的维基百科文章。第47个标签页："顶级厨师第12季完整剧集高清版"。',
        credibility: 10,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: '滚动位置证据',
        description: '服务器日志显示，46个学术标签页在连续6小时内零滚动活动。烹饪直播在同一时期有847次暂停/播放交互。',
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'c',
        name: '学习播放列表',
        description: '一个名为"深度专注学习时间"的Spotify播放列表，在3分钟处暂停后再未恢复。烹饪节目的主题曲正在播放。',
        credibility: 7,
        tag: 'Suspicious',
      },
      {
        id: 'd',
        name: '图书馆零食收据',
        description: '三张图书馆自动售货机的收据：薯片、更多薯片，以及凌晨2点购买的"学习零食套餐"。图书馆午夜关闭。',
        credibility: 6,
        tag: 'Weird',
      },
      {
        id: 'e',
        name: '提交的论文',
        description: '凯文第二天早上提交的论文获得了A-。论文中包含三处关于"备料在学术准备中的重要性"的引用。他的教授感到困惑。',
        credibility: 5,
        tag: 'Questionable',
      },
      {
        id: 'f',
        name: '凯文的学术流媒体历史',
        description: '大学网络日志显示这并非孤立事件：凯文此前曾在期末考试周流媒体观看了一部9小时的烘焙纪录片，期中考试期间观看了6小时的竞技吃播锦标赛，以及在论文提案前一晚看完了一部14集的烹饪动漫。他的GPA是3.8。',
        credibility: 7,
        tag: 'Suspicious',
      },
    ],
    witnesses: [
      {
        name: '学术诚信官员琳达·沃尔什教授',
        role: '投诉人',
        testimony: '这些标签页显然是装饰性的。我以前见过这种情况。学生们认为打开40个标签页会让他们看起来很忙。这并不会让他们变忙。这只会让他们看起来像是打开了40个标签页。',
        personality: '职业性地疲惫',
        rebuttal: '论文写得很好。但这不是重点。重点是原则。另外，"备料"在一篇关于文艺复兴艺术的论文里是什么意思？',
      },
      {
        name: '图书馆学习伙伴杰米·托雷斯',
        role: '证人',
        testimony: '凯文非常专注。他做了笔记。他划了重点。他有一次倒吸一口气说"我不敢相信他们淘汰了马可"。我以为马可是一个历史人物。',
        personality: '真诚地困惑',
        rebuttal: '他确实分享了他的薯片。我不知道这是否相关。他对烹饪节目似乎非常投入。比对论文更投入。',
      },
    ],
    judgeQuestion: '律师，您的当事人刚刚在法庭电脑上打开了一个新标签页。看起来是一个食谱网站。您有什么解释吗？',
    verdictOptions: {
      guilty: '以欺骗为目的的学术行为艺术罪成立',
      notGuilty: '无罪——多任务处理是一种技能',
      partial: '标签页欺诈罪成立，学术不诚信罪不成立——论文写得很好',
    },
    judgeComments: {
      S: '辩护方成功论证了灵感可以来自任何地方。法庭承认备料确实与学术准备相关。',
      A: '论文质量论点出人意料地有效。',
      B: '辩护尚可。零食收据没有得到充分解释。',
      C: '凯文的标签页管理比辩护策略更有条理。',
      D: '烹饪节目的参赛者表现出了更多的准备。',
    },
  },
}

export default case006
