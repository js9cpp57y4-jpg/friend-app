export type Intent = '认真了解' | '学习搭子' | '长期朋友' | '活动玩伴';

export const stories = [
  { id: 'study', label: '自习', initials: 'ST', count: 128 },
  { id: 'sport', label: '运动', initials: 'SP', count: 86 },
  { id: 'coffee', label: '咖啡', initials: 'CF', count: 42 },
  { id: 'photo', label: '摄影', initials: 'PH', count: 55 },
  { id: 'paper', label: '论文', initials: 'PA', count: 71 },
  { id: 'board', label: '桌游', initials: 'BG', count: 34 }
];

export const feed = [
  { id: 'f1', name: '周宁', initials: 'ZN', dept: '能源动力学院 · 研一', time: '12 min', text: '今晚主图 B 区自习两小时，想找一个节奏稳定的学习搭子。', tags: ['自习搭子', '考研互督'], likes: 39, comments: 12, saves: 7, coverTitle: 'Study Night', coverSubtitle: 'Library B · 19:00' },
  { id: 'f2', name: '林可', initials: 'LK', dept: '控制学院 · 大四', time: '35 min', text: '周三羽毛球新手局缺 2 人，不卷水平，只想出汗和认识新朋友。', tags: ['羽毛球', '轻线下'], likes: 56, comments: 18, saves: 10, coverTitle: 'Badminton', coverSubtitle: 'Gym Court 2' },
  { id: 'f3', name: '唐珂', initials: 'TK', dept: '人文学院 · 研二', time: '1 h', text: '周末摄影散步，路线是西操场到图书馆夜景，欢迎同频同学。', tags: ['摄影散步', '校园生活'], likes: 48, comments: 9, saves: 15, coverTitle: 'Campus Walk', coverSubtitle: 'Sunset Route' }
];

export const recommendedUsers = [
  { id: 'r1', name: '宋屿', initials: 'SY', meta: '电气工程学院 · 研一', reason: '作息接近 · 同校区 · 共同兴趣3项', score: 92 },
  { id: 'r2', name: '陈予', initials: 'CY', meta: '控制学院 · 大四', reason: '都报名论文打卡活动', score: 88 }
];

export const matchCards = [
  { id: 'm1', name: '周宁', initials: 'ZN', ageGrade: '23岁 · 研一', college: '能源动力学院', intent: '学习搭子' as Intent, score: 91, tags: ['早起', '图书馆', '羽毛球'], reasons: ['作息接近', '共同报名羽毛球活动', '同校区'], coverTitle: 'Study Partner', coverSubtitle: 'Library · Badminton · Morning' },
  { id: 'm2', name: '林可', initials: 'LK', ageGrade: '22岁 · 大四', college: '控制学院', intent: '长期朋友' as Intent, score: 87, tags: ['摄影', '咖啡', '桌游'], reasons: ['共同兴趣 3 项', '周末空闲时间重叠', '社团经历相近'], coverTitle: 'Campus Life', coverSubtitle: 'Photo · Coffee · Board Game' },
  { id: 'm3', name: '唐珂', initials: 'TK', ageGrade: '24岁 · 研二', college: '人文学院', intent: '认真了解' as Intent, score: 85, tags: ['跑步', '音乐', '论文打卡'], reasons: ['夜间在线时段接近', '都在论文打卡', '信用分均 90+'], coverTitle: 'Focus & Run', coverSubtitle: 'Music · Paper Club · Running' }
];

export const matchedUsers = [
  { id: 'u1', name: '周宁', initials: 'ZN', last: '今晚图书馆见？', time: '18:42', unread: 2 },
  { id: 'u2', name: '林可', initials: 'LK', last: '周末摄影散步吗', time: '昨天', unread: 0 }
];

export const chats = {
  u1: [
    { from: 'them', text: '我 7 点后到 B 区。', time: '18:31' },
    { from: 'them', text: '今晚图书馆见？', time: '18:42' },
    { from: 'me', text: '可以，我带电脑过去。', time: '18:45' }
  ],
  u2: [
    { from: 'them', text: '西操场银杏很好看。', time: '昨天' },
    { from: 'me', text: '周末下午可以。', time: '昨天' }
  ]
} as Record<string, { from: 'me' | 'them'; text: string; time: string }[]>;

export const icebreakers = ['一起去图书馆？', '这周有空运动吗？', '你常在哪个自习室？'];

export const events = [
  { id: 'e1', title: '图书馆自习局', time: '今天 19:00-21:00', place: '主图书馆 B 区', people: '12/20', tag: '学习', coverTitle: 'Study Night' },
  { id: 'e2', title: '羽毛球局', time: '周三 20:00', place: '体育馆2号场', people: '10/16', tag: '运动', coverTitle: 'Badminton' },
  { id: 'e3', title: '桌游夜', time: '周五 19:30', place: '学生活动中心', people: '18/24', tag: '社交', coverTitle: 'Board Game' },
  { id: 'e4', title: '摄影散步', time: '周六 16:00', place: '西操场-银杏大道', people: '9/15', tag: '兴趣', coverTitle: 'Campus Walk' },
  { id: 'e5', title: '考研互督', time: '每日 07:00 打卡', place: '线上+图书馆', people: '56/80', tag: '成长', coverTitle: 'Morning Check-in' },
  { id: 'e6', title: '论文打卡', time: '工作日 21:30', place: '研究生学习群', people: '34/50', tag: '科研', coverTitle: 'Paper Club' }
];

export const profile = {
  name: '林夏', initials: 'LX', college: '华北电力大学 · 电气工程学院', grade: '研一', verify: '已认证',
  intent: '长期朋友', credit: 94, completion: 86,
  interests: ['羽毛球', '摄影', '自习', '咖啡'],
  bio: '希望认识作息规律、积极向上的同学。周中常在图书馆，周末会约运动或散步。'
};

export const safetyItems = [
  { title: '校园认证', desc: '学号 + 校园邮箱双重认证，保障真实身份' },
  { title: '隐私可见范围', desc: '支持仅同校可见、仅匹配可见等设置' },
  { title: '举报与拉黑', desc: '对骚扰行为一键举报并拉黑，24小时内处理' },
  { title: '线下见面提醒', desc: '建议公共场所见面，提前告知室友行程' },
  { title: '信用分规则', desc: '守约参与活动和文明沟通可提升信用分' },
  { title: '防骚扰设置', desc: '关闭陌生消息、限制夜间打扰与频繁提醒' }
];
