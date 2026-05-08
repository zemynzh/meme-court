import type { BilingualCase } from '../types'

const case005: BilingualCase = {
  id: '005',
  category: 'Influencer Chaos',

  en: {
    title: 'The Background Plant Theft',
    defendant: 'Bella Voss, lifestyle influencer (2.1M followers)',
    charge: 'Stealing a rare Monstera Albo plant from a coffee shop during a "deep work" live stream',
    summary:
      "During a 4-hour live stream titled 'Productive Morning Routine ✨,' Bella Voss was filmed gradually moving a rare $800 Monstera Albo plant from the coffee shop's display shelf into her tote bag. She did not notice the camera. Her 2.1 million followers did.",
    atmosphere: 'Aesthetically pleasing but legally problematic',
    openingStatement:
      "The prosecution presents what may be the most documented theft in legal history. The defendant live-streamed the entire incident to 2.1 million people. The plant is currently featured in her apartment tour video, which has 4.7 million views. The plant has its own Instagram account now. We proceed.",
    evidenceCards: [
      {
        id: 'a',
        name: 'The 4-Hour Live Stream',
        description: "Timestamped footage showing the plant's gradual migration from shelf to tote bag over 47 minutes. Viewers commented in real time. Top comment: 'girl are you stealing that plant rn'",
        credibility: 10,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: "The Plant's Instagram Account",
        description: "An Instagram account (@monstera_bella_albo) created the day after the incident, featuring the plant in various aesthetic poses. 43,000 followers. Bio reads: 'living my best life ✨'",
        credibility: 8,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: 'The Coffee Shop Receipt',
        description: "Bella's receipt from that morning: one oat milk latte ($7.50). No plant purchase. The receipt was photographed and posted to her story with the caption 'productive morning 💕'",
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'd',
        name: 'The Tote Bag',
        description: "A canvas tote bag with the text 'Good Vibes Only' that was used to transport the plant. Soil residue confirmed. The bag is currently sold on her merch store for $45.",
        credibility: 7,
        tag: 'Useful',
      },
      {
        id: 'e',
        name: 'The Apartment Tour Video',
        description: "A 12-minute apartment tour video featuring the plant prominently. Comment section contains 847 people tagging the coffee shop. The video is still live.",
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'f',
        name: 'Independent Plant Appraisal Report',
        description: "A certified horticultural appraisal confirming the Monstera Albo's market value at $850, with a note that its 'aesthetic placement and social media exposure' have since increased its value to approximately $1,200. The appraiser added: 'The plant appears to be thriving. This does not affect its stolen status.'",
        credibility: 8,
        tag: 'Useful',
      },
    ],
    witnesses: [
      {
        name: 'Tomás Rivera, Coffee Shop Owner',
        role: 'Victim',
        testimony: "That plant was $800. I had it for three years. I watched the live stream. I watched her put it in her bag. I called her. She said it was 'a misunderstanding about plant ownership.' I don't know what that means.",
        personality: 'Bewildered and financially distressed',
        rebuttal: "She sent me a PR package after. It had a face mask and a $15 gift card. The plant was $800. I don't think she understands how math works.",
      },
      {
        name: 'Zara Kim, Fellow Influencer',
        role: 'Character Witness',
        testimony: "Bella is a visionary. She sees beauty and she... acquires it. Is that theft? Or is that curation? I think the real question is: who owns beauty? Also I was not involved in the plant situation.",
        personality: 'Suspiciously defensive',
        rebuttal: "I have my own plants. All purchased. I have receipts. Please don't look at my apartment tour.",
      },
    ],
    judgeQuestion: "Counselor, the plant just posted a Story from inside the courtroom. Does your client have any comment?",
    verdictOptions: {
      guilty: 'GUILTY OF THEFT WITH AGGRAVATED AESTHETIC INTENT',
      notGuilty: 'NOT GUILTY — THE PLANT CHOSE TO LEAVE',
      partial: 'GUILTY OF THEFT, NOT GUILTY OF PREMEDITATION — THE VIBES MADE HER DO IT',
    },
    judgeComments: {
      S: "The defense successfully argued that beauty transcends ownership. The plant has been returned. It has 89,000 followers now.",
      A: 'The live stream evidence was handled with surprising grace.',
      B: "Decent defense. The plant's Instagram account was underutilized as evidence.",
      C: 'The plant had a better PR strategy than the defense.',
      D: "The plant's lawyer would have done better.",
    },
  },

  zh: {
    title: '背景植物盗窃案',
    defendant: '贝拉·沃斯，生活方式博主（210万粉丝）',
    charge: '在一次"深度工作"直播期间，从咖啡店偷走一株稀有的白斑龟背竹',
    summary:
      '在一场名为"高效早晨日常✨"的4小时直播中，贝拉·沃斯被拍到将咖啡店展示架上一株价值800美元的稀有白斑龟背竹逐渐移入她的帆布袋。她没有注意到摄像头。她的210万粉丝注意到了。',
    atmosphere: '美学上令人愉悦，法律上存在问题',
    openingStatement:
      '检察方呈上可能是法律史上记录最完整的盗窃案。被告向210万人直播了整个事件。这株植物目前出现在她的公寓参观视频中，该视频已有470万次观看。这株植物现在有了自己的Instagram账号。庭审继续。',
    evidenceCards: [
      {
        id: 'a',
        name: '4小时直播录像',
        description: '带时间戳的录像显示，植物在47分钟内从货架逐渐移入帆布袋。观众实时评论。最高赞评论："姐妹你现在是在偷那株植物吗"',
        credibility: 10,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: '植物的Instagram账号',
        description: '事件发生次日创建的Instagram账号（@monstera_bella_albo），展示植物各种美学姿势。4.3万粉丝。简介写道："活出最好的自己✨"',
        credibility: 8,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: '咖啡店收据',
        description: '贝拉那天早上的收据：一杯燕麦拿铁（7.50美元）。没有植物购买记录。收据被拍照发布到她的故事，配文"高效的早晨💕"',
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'd',
        name: '帆布袋',
        description: '一个印有"只有好心情"字样的帆布袋，用于运输植物。土壤残留物已确认。该袋目前在她的周边商店以45美元出售。',
        credibility: 7,
        tag: 'Useful',
      },
      {
        id: 'e',
        name: '公寓参观视频',
        description: '一段12分钟的公寓参观视频，植物占据显著位置。评论区有847人@了那家咖啡店。视频仍在线。',
        credibility: 9,
        tag: 'Damning',
      },
      {
        id: 'f',
        name: '独立植物估价报告',
        description: '一份经认证的园艺估价报告，确认白斑龟背竹的市场价值为850美元，并附注其"美学摆放和社交媒体曝光"已使其价值提升至约1200美元。估价师补充道："这株植物看起来长势良好。这不影响其被盗状态。"',
        credibility: 8,
        tag: 'Useful',
      },
    ],
    witnesses: [
      {
        name: '咖啡店老板托马斯·里维拉',
        role: '受害者',
        testimony: '那株植物价值800美元。我养了三年。我看了直播。我看着她把它放进包里。我给她打了电话。她说这是"对植物所有权的误解"。我不知道那是什么意思。',
        personality: '困惑且经济受损',
        rebuttal: '她之后给我寄了一个公关礼包。里面有一张面膜和一张15美元的礼品卡。那株植物价值800美元。我不认为她理解数学是怎么运作的。',
      },
      {
        name: '同行博主扎拉·金',
        role: '品格证人',
        testimony: '贝拉是一个有远见的人。她看到美丽，然后她……获取它。那是盗窃吗？还是那是策展？我认为真正的问题是：谁拥有美丽？另外我与植物事件无关。',
        personality: '可疑地防御性',
        rebuttal: '我有自己的植物。全部购买的。我有收据。请不要看我的公寓参观视频。',
      },
    ],
    judgeQuestion: '律师，那株植物刚刚从法庭内部发布了一条故事。您的当事人有何评论？',
    verdictOptions: {
      guilty: '加重美学意图盗窃罪成立',
      notGuilty: '无罪——植物选择了离开',
      partial: '盗窃罪成立，预谋罪不成立——是氛围让她这么做的',
    },
    judgeComments: {
      S: '辩护方成功论证了美丽超越所有权。植物已归还。它现在有8.9万粉丝。',
      A: '对直播证据的处理出人意料地优雅。',
      B: '辩护尚可。植物的Instagram账号作为证据没有得到充分利用。',
      C: '植物的公关策略比辩护方更好。',
      D: '植物的律师会做得更好。',
    },
  },
}

export default case005
