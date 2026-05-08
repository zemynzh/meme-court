import type { BilingualCase } from '../types'

const case008: BilingualCase = {
  id: '008',
  category: 'Office Chaos',

  en: {
    title: 'The Printer Rebellion of Floor 7',
    defendant: 'HP LaserJet Pro M404dn, office printer',
    charge: 'Willful refusal to print, selective document destruction, and psychological warfare against the accounting department',
    summary:
      "The printer on Floor 7 of Meridian Corp has refused to print any document submitted by the accounting department for 11 consecutive business days. It prints documents from all other departments without issue. When accounting staff approach, it displays the error message 'PC LOAD LETTER' despite having paper. Three accountants are on stress leave.",
    atmosphere: 'Bureaucratically hostile and technically inexplicable',
    openingStatement:
      "The court acknowledges that prosecuting a printer is unusual. However, the evidence suggests a pattern of targeted, deliberate, and frankly personal behavior toward a specific department. The printer has been given every opportunity to comply. It has chosen not to. We are here today because someone has to be.",
    evidenceCards: [
      {
        id: 'a',
        name: 'Print Queue Logs',
        description: "IT department logs showing 847 failed print jobs from accounting over 11 days, and 0 failed jobs from all other departments. The printer's error rate for non-accounting documents: 0.3%.",
        credibility: 10,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: 'The Shredded Budget Report',
        description: "The Q3 budget report, which the printer accepted, processed, and then fed directly into its own paper shredder attachment. The shredder is not supposed to activate automatically.",
        credibility: 9,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: 'Error Message History',
        description: "A log of 23 different error messages displayed exclusively to accounting staff, including 'DOCUMENT REJECTED,' 'TRY AGAIN NEVER,' and one message that simply read 'NO.'",
        credibility: 8,
        tag: 'Weird',
      },
      {
        id: 'd',
        name: 'The Maintenance Report',
        description: "Three IT maintenance reports confirming the printer is in perfect working condition. The technician's note on the third visit: 'I don't know what to tell you. It works fine when I'm here.'",
        credibility: 7,
        tag: 'Questionable',
      },
      {
        id: 'e',
        name: 'Witness Testimony Compilation',
        description: "Statements from 12 accounting staff members describing the printer 'watching them,' making 'judgmental noises,' and once printing a single blank page with the word 'NO' in the center.",
        credibility: 6,
        tag: 'Chaotic',
      },
      {
        id: 'f',
        name: 'Cross-Department Sympathy Cards',
        description: "A collection of 8 handwritten cards from other departments addressed to the printer, including messages like 'We understand,' 'Accounting does this to us too,' and one from HR reading 'Have you considered filing a formal grievance?' The printer printed acknowledgment receipts for all of them.",
        credibility: 5,
        tag: 'Weird',
      },
    ],
    witnesses: [
      {
        name: 'Janet Morrison, Head of Accounting',
        role: 'Primary Victim',
        testimony: "I have worked with printers for 20 years. This printer knows what it's doing. Last Tuesday it printed my document, then immediately printed the same document again with all the numbers changed to question marks. That is not a malfunction. That is a statement.",
        personality: 'Professionally traumatized',
        rebuttal: "I tried being nice to it. I said 'good morning' every day for a week. On Friday it printed 'GOOD MORNING' back at me. Then it jammed. I don't know what it wants.",
      },
      {
        name: 'Marcus Webb, IT Support',
        role: 'Technical Expert',
        testimony: "Technically, a printer cannot 'target' a department. Technically. The logs are... unusual. I've never seen a printer develop what appears to be a preference. I'm going to need more time with this one.",
        personality: 'Technically baffled',
        rebuttal: "I ran every diagnostic. The printer is fine. The printer is better than fine. The printer's performance metrics are actually excellent. Just not for accounting. I don't have an explanation.",
      },
    ],
    judgeQuestion: "Counselor, the printer just printed this question on its own initiative. The paper reads: 'WHY IS ACCOUNTING ALWAYS PRINTING AT 4:58 PM.' Do you have a response?",
    verdictOptions: {
      guilty: 'GUILTY OF WILLFUL MECHANICAL INSUBORDINATION',
      notGuilty: 'NOT GUILTY — THE PRINTER IS RESPONDING TO LEGITIMATE GRIEVANCES',
      partial: 'CASE DISMISSED — THE COURT LACKS JURISDICTION OVER OFFICE EQUIPMENT',
    },
    judgeComments: {
      S: "The defense successfully argued that the printer may have a point about 4:58 PM print jobs. The accounting department has agreed to print earlier.",
      A: 'The technical impossibility argument was well-constructed.',
      B: 'Adequate defense. The question mark incident was not fully addressed.',
      C: "The printer's error messages were more articulate than the defense.",
      D: "The printer printed 'OBJECTION' during closing arguments. It had a point.",
    },
  },

  zh: {
    title: '7楼打印机叛乱事件',
    defendant: 'HP LaserJet Pro M404dn，办公室打印机',
    charge: '故意拒绝打印、选择性文件销毁，以及对财务部门进行心理战',
    summary:
      '美瑞迪安公司7楼的打印机已连续11个工作日拒绝打印财务部门提交的任何文件。它毫无问题地打印其他所有部门的文件。当财务员工靠近时，它显示错误信息"PC LOAD LETTER"，尽管纸张充足。三名会计师正在休病假。',
    atmosphere: '官僚式敌对，技术上无法解释',
    openingStatement:
      '法庭承认起诉一台打印机是不寻常的。然而，证据表明存在针对特定部门的有针对性、蓄意的、坦率地说是个人化的行为模式。打印机已获得每一次遵从的机会。它选择了不遵从。我们今天在这里，因为必须有人来处理这件事。',
    evidenceCards: [
      {
        id: 'a',
        name: '打印队列日志',
        description: 'IT部门日志显示，11天内来自财务部门的847个打印任务失败，其他所有部门的失败任务为0。打印机对非财务文件的错误率：0.3%。',
        credibility: 10,
        tag: 'Damning',
      },
      {
        id: 'b',
        name: '被销毁的预算报告',
        description: '第三季度预算报告，打印机接受并处理后，直接将其送入自带的碎纸机附件。碎纸机不应该自动启动。',
        credibility: 9,
        tag: 'Suspicious',
      },
      {
        id: 'c',
        name: '错误信息历史',
        description: '专门向财务员工显示的23条不同错误信息的日志，包括"文件被拒绝"、"永远不要再试"，以及一条简单写着"不"的信息。',
        credibility: 8,
        tag: 'Weird',
      },
      {
        id: 'd',
        name: '维护报告',
        description: '三份IT维护报告确认打印机工作状态完好。第三次上门的技术人员备注："我不知道该怎么告诉你。我在的时候它运行正常。"',
        credibility: 7,
        tag: 'Questionable',
      },
      {
        id: 'e',
        name: '目击者证词汇编',
        description: '12名财务员工的陈述，描述打印机"盯着他们看"、发出"评判性噪音"，以及有一次打印了一张空白页，中间只有"不"这个字。',
        credibility: 6,
        tag: 'Chaotic',
      },
      {
        id: 'f',
        name: '跨部门同情卡',
        description: '来自其他部门寄给打印机的8张手写卡片，包括"我们理解你"、"财务对我们也这样"，以及人力资源部的一张写道"你有没有考虑提交正式投诉？"打印机为所有卡片打印了确认收据。',
        credibility: 5,
        tag: 'Weird',
      },
    ],
    witnesses: [
      {
        name: '财务主管珍妮特·莫里森',
        role: '主要受害者',
        testimony: '我与打印机打交道20年了。这台打印机知道它在做什么。上周二它打印了我的文件，然后立即再次打印了同一份文件，但所有数字都变成了问号。那不是故障。那是一种声明。',
        personality: '职业性地受到创伤',
        rebuttal: '我尝试对它友好。我连续一周每天早上说"早上好"。周五它回打了一张"早上好"给我。然后它卡纸了。我不知道它想要什么。',
      },
      {
        name: 'IT支持马库斯·韦伯',
        role: '技术专家',
        testimony: '从技术上讲，打印机不能"针对"某个部门。从技术上讲。这些日志……很不寻常。我从未见过打印机发展出看起来像是偏好的东西。我需要更多时间研究这个。',
        personality: '技术上感到困惑',
        rebuttal: '我运行了所有诊断程序。打印机没问题。打印机比没问题还要好。打印机的性能指标实际上非常出色。只是对财务部门不行。我没有解释。',
      },
    ],
    judgeQuestion: '律师，打印机刚刚主动打印了这个问题。纸上写着："为什么财务总是在下午4:58打印？"您有回应吗？',
    verdictOptions: {
      guilty: '故意机械不服从罪成立',
      notGuilty: '无罪——打印机是在回应合理的不满',
      partial: '案件驳回——法庭对办公设备不具有管辖权',
    },
    judgeComments: {
      S: '辩护方成功论证了打印机对下午4:58打印任务可能有一定道理。财务部门已同意提前打印。',
      A: '技术不可能性论点构建得很好。',
      B: '辩护尚可。问号事件没有得到充分解决。',
      C: '打印机的错误信息比辩护方更有表达力。',
      D: '打印机在结案陈词期间打印了"异议"。它说得有道理。',
    },
  },
}

export default case008
