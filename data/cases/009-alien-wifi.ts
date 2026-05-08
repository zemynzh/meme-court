import type { BilingualCase } from '../types'

const case009: BilingualCase = {
  id: '009',
  category: 'Space Nonsense',

  en: {
    title: 'The Great Wi-Fi Theft of 2024',
    defendant: 'Zyx-9, an extraterrestrial visitor',
    charge: 'Unauthorized use of Earth\'s global Wi-Fi infrastructure, resulting in a 340% increase in intergalactic data consumption and the inexplicable trending of a 2009 YouTube video',
    summary:
      "Zyx-9 arrived on Earth for what was described as a 'brief cultural survey' and immediately connected to every Wi-Fi network simultaneously. Over 72 hours, Zyx-9 consumed 847 petabytes of data, watched the entirety of human internet history, and left a Yelp review for Earth that said 'interesting concept, needs work, 3 stars.'",
    atmosphere: 'Cosmically bewildered and slightly offended',
    openingStatement:
      "The prosecution acknowledges this is the first interplanetary criminal case in human history. We are, frankly, unprepared. However, the data consumption logs are clear, the Yelp review is public, and Zyx-9 is currently connected to the courthouse Wi-Fi. We proceed.",
    evidenceCards: [
      {
        id: 'a',
        name: 'Global Data Consumption Report',
        description: "ISP logs from 47 countries showing a simultaneous 340% spike in data usage over 72 hours, all traced to a single MAC address that does not correspond to any known device manufacturer.",
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: "Zyx-9's Yelp Review",
        description: "A 3-star Yelp review for 'Earth (Planet)' reading: 'Interesting concept. Chaotic execution. The internet is simultaneously the best and worst thing here. The cats are a highlight. Needs more consensus. Would visit again.'",
        credibility: 8,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: 'The Trending Video Evidence',
        description: "A 2009 YouTube video of a man falling off a treadmill that inexplicably received 2.3 billion views in 72 hours. Zyx-9 watched it 847 million times. Zyx-9 says it is 'the most honest document of human experience.'",
        credibility: 7,
        tag: 'Weird',
      },
      {
        id: 'd',
        name: 'The Intergalactic Data Bill',
        description: "A bill from the Galactic Communications Authority for 847 petabytes of unauthorized data transfer, addressed to Earth. The bill is in a currency that does not exist. The amount is described as 'significant.'",
        credibility: 6,
        tag: 'Chaotic',
      },
      {
        id: 'e',
        name: "Zyx-9's Cultural Survey Notes",
        description: "47 pages of observations including: 'Humans have 4.2 billion cat videos. This seems disproportionate.' and 'The concept of a Monday appears to cause widespread suffering. Unclear why this continues.'",
        credibility: 5,
        tag: 'Useful',
      },
      {
        id: 'f',
        name: "Zyx-9's Physical Traces",
        description: "A forensic report documenting anomalies left at Zyx-9's last known location: a perfect circle of dead grass with a USB-C port embedded in the center, three vending machines that now dispense items for free but only in prime number quantities, and a sticky note on a telephone pole reading 'Your passwords are bad. Please fix. — Z.'",
        credibility: 7,
        tag: 'Questionable',
      },
    ],
    witnesses: [
      {
        name: 'Dr. James Okafor, Cybersecurity Expert',
        role: 'Technical Expert',
        testimony: "The MAC address doesn't exist in any database. The connection protocol is 40 years ahead of current technology. Whatever connected to our networks, it was not from here. Also it left a comment on my LinkedIn post. The comment was 'interesting perspective, but consider the galactic context.'",
        personality: 'Technically overwhelmed',
        rebuttal: "I've been trying to block the connection for three days. Every time I think I've succeeded, it sends me a notification that says 'nice try.' I don't know how to feel about this.",
      },
      {
        name: 'Ambassador Yuki Tanaka, UN First Contact Division',
        role: 'Diplomatic Representative',
        testimony: "Zyx-9 has been cooperative. It answered all our questions. It also answered questions we hadn't asked yet. It described our legal system as 'charmingly primitive but earnest.' I'm choosing to take that as a compliment.",
        personality: 'Diplomatically optimistic',
        rebuttal: "Zyx-9 did offer to upgrade our entire internet infrastructure in exchange for dropping the charges. I am not authorized to accept this. I want to accept this.",
      },
    ],
    judgeQuestion: "Counselor, Zyx-9 has just submitted a 'legal brief' that is 4,000 pages long and written in a language that doesn't exist yet. How does the defense respond?",
    verdictOptions: {
      guilty: 'GUILTY OF UNAUTHORIZED PLANETARY DATA CONSUMPTION',
      notGuilty: 'NOT GUILTY — INFORMATION WANTS TO BE FREE, ESPECIALLY ACROSS GALAXIES',
      partial: 'CASE DISMISSED — EARTH LACKS JURISDICTION OVER EXTRATERRESTRIAL VISITORS',
    },
    judgeComments: {
      S: "The defense successfully argued jurisdictional impossibility. Zyx-9 has upgraded the courthouse Wi-Fi as a gesture of goodwill. Speed is now 40 Gbps.",
      A: 'The cultural survey defense was genuinely compelling.',
      B: 'Adequate defense. The treadmill video evidence was not fully contextualized.',
      C: "Zyx-9's legal brief, despite being unreadable, was more thorough than the defense.",
      D: "Zyx-9 has already left. It gave Earth 3 stars. The defense got 2.",
    },
  },

  zh: {
    title: '2024年Wi-Fi大盗窃案',
    defendant: 'Zyx-9，一位外星访客',
    charge: '未经授权使用地球全球Wi-Fi基础设施，导致星际数据消耗增加340%，以及一个2009年YouTube视频莫名其妙地登上热搜',
    summary:
      'Zyx-9以"简短文化调查"为由抵达地球，并立即同时连接到所有Wi-Fi网络。在72小时内，Zyx-9消耗了847拍字节的数据，观看了人类互联网历史的全部内容，并在大众点评上给地球留下了一条评论："有趣的概念，需要改进，3星。"',
    atmosphere: '宇宙级困惑，略感冒犯',
    openingStatement:
      '检察方承认这是人类历史上第一起星际刑事案件。坦率地说，我们没有准备好。然而，数据消耗日志是清晰的，大众点评评论是公开的，Zyx-9目前正连接到法院的Wi-Fi。庭审继续。',
    evidenceCards: [
      {
        id: 'a',
        name: '全球数据消耗报告',
        description: '来自47个国家的ISP日志显示，72小时内数据使用量同时激增340%，所有数据都追溯到一个不对应任何已知设备制造商的MAC地址。',
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: 'Zyx-9的大众点评评论',
        description: '"地球（行星）"的3星评论："有趣的概念。混乱的执行。互联网同时是这里最好和最坏的东西。猫是亮点。需要更多共识。会再来。"',
        credibility: 8,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: '热搜视频证据',
        description: '一个2009年的YouTube视频，记录一名男子从跑步机上摔落，莫名其妙地在72小时内获得了23亿次观看。Zyx-9观看了8.47亿次。Zyx-9说这是"最诚实的人类经验文献"。',
        credibility: 7,
        tag: 'Weird',
      },
      {
        id: 'd',
        name: '星际数据账单',
        description: '来自银河通信局的账单，针对847拍字节的未授权数据传输，寄给地球。账单使用一种不存在的货币。金额被描述为"相当可观"。',
        credibility: 6,
        tag: 'Chaotic',
      },
      {
        id: 'e',
        name: 'Zyx-9的文化调查笔记',
        description: '47页观察记录，包括："人类有42亿个猫咪视频。这似乎不成比例。"以及"「周一」这个概念似乎造成了广泛的痛苦。不清楚为什么这种情况还在继续。"',
        credibility: 5,
        tag: 'Useful',
      },
      {
        id: 'f',
        name: 'Zyx-9留下的物理痕迹',
        description: '一份法证报告，记录了Zyx-9最后已知位置留下的异常：一个完美的枯草圆圈，中心嵌有一个USB-C接口；三台自动售货机现在免费出货，但只以质数数量分发；以及一根电线杆上的便利贴，写着"你们的密码太差了。请修改。——Z。"',
        credibility: 7,
        tag: 'Questionable',
      },
    ],
    witnesses: [
      {
        name: '网络安全专家詹姆斯·奥卡福博士',
        role: '技术专家',
        testimony: '这个MAC地址在任何数据库中都不存在。连接协议比当前技术先进40年。无论什么东西连接到我们的网络，它都不是来自这里的。另外它在我的领英帖子上留了评论。评论是"有趣的观点，但请考虑银河背景"。',
        personality: '技术上不堪重负',
        rebuttal: '我已经尝试屏蔽连接三天了。每次我以为成功了，它就发给我一条通知说"不错的尝试"。我不知道该如何看待这件事。',
      },
      {
        name: '联合国第一接触部门大使田中雪',
        role: '外交代表',
        testimony: 'Zyx-9一直很配合。它回答了我们所有的问题。它还回答了我们尚未提出的问题。它将我们的法律体系描述为"迷人地原始但真诚"。我选择将其视为赞美。',
        personality: '外交上乐观',
        rebuttal: 'Zyx-9确实提出以升级我们整个互联网基础设施来换取撤销指控。我没有权限接受这个提议。我想接受这个提议。',
      },
    ],
    judgeQuestion: '律师，Zyx-9刚刚提交了一份4000页的"法律简报"，用一种尚不存在的语言写成。辩护方如何回应？',
    verdictOptions: {
      guilty: '未经授权的行星数据消耗罪成立',
      notGuilty: '无罪——信息渴望自由，尤其是跨越星系时',
      partial: '案件驳回——地球对外星访客不具有管辖权',
    },
    judgeComments: {
      S: '辩护方成功论证了管辖权不可能性。Zyx-9出于善意升级了法院Wi-Fi。速度现在是40Gbps。',
      A: '文化调查辩护确实令人信服。',
      B: '辩护尚可。跑步机视频证据没有得到充分的背景说明。',
      C: 'Zyx-9的法律简报，尽管无法阅读，但比辩护方更全面。',
      D: 'Zyx-9已经离开了。它给地球打了3星。辩护方得了2星。',
    },
  },
}

export default case009
