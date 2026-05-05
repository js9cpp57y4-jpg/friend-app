export type Intent = '认真了解' | '学习搭子' | '长期朋友' | '活动玩伴';

export const stories = [
  { id: 's1', label: '自习', initials: 'ST', coverGradient: 'linear-gradient(135deg,#ff6a6a,#ff8a65)' },
  { id: 's2', label: '运动', initials: 'SP', coverGradient: 'linear-gradient(135deg,#ff5e62,#ff9966)' },
  { id: 's3', label: '咖啡', initials: 'CF', coverGradient: 'linear-gradient(135deg,#fd6b4e,#ff9a76)' },
  { id: 's4', label: '摄影', initials: 'PH', coverGradient: 'linear-gradient(135deg,#ff7a5c,#ffb199)' },
  { id: 's5', label: '论文', initials: 'PA', coverGradient: 'linear-gradient(135deg,#ff4458,#fd6b4e)' }
];

export const feed = [
  { id: 'f1', name: '周宁', initials: 'ZN', dept: '能源动力学院·研一', text: '今晚图书馆 B 区组队冲刺两小时。', tags: ['#自习搭子', '#考研互督'], likes: 39, comments: 12, saves: 7, coverTitle: 'Study Night', coverSubtitle: 'Library B Zone', coverGradient: 'linear-gradient(160deg,#ff7c6a,#ffb08c)' },
  { id: 'f2', name: '林可', initials: 'LK', dept: '控制学院·大四', text: '周三羽毛球新手局还差两位同学。', tags: ['#羽毛球局', '#轻线下'], likes: 56, comments: 18, saves: 10, coverTitle: 'Badminton', coverSubtitle: 'Gym Court #2', coverGradient: 'linear-gradient(160deg,#ff5a6a,#ff8f75)' },
  { id: 'f3', name: '唐珂', initials: 'TK', dept: '人文学院·研二', text: '周末校园散步拍照，欢迎一起。', tags: ['#摄影散步', '#校园生活'], likes: 48, comments: 9, saves: 15, coverTitle: 'Campus Walk', coverSubtitle: 'Golden Hour', coverGradient: 'linear-gradient(160deg,#fd6b4e,#ff9e80)' }
];

export const recommendedUsers = [
  { id: 'r1', name: '宋屿', initials: 'SY', ageGrade: '24岁·研二', college: '机械学院', score: 92, reason: '作息接近 + 同校区 + 共同兴趣3项' },
  { id: 'r2', name: '陈予', initials: 'CY', ageGrade: '22岁·大四', college: '控制学院', score: 88, reason: '都报名论文打卡活动' }
];

export const matchCards = [
  { id: 'm1', name: '周宁', initials: 'ZN', ageGrade: '23岁 · 研一', college: '能源动力学院', intent: '学习搭子' as Intent, score: 91, tags: ['早起', '图书馆', '羽毛球'], reasons: ['作息接近', '共同报名羽毛球活动', '同校区'], coverTitle: 'Study Partner', coverSubtitle: 'Consistent & Positive', coverGradient: 'linear-gradient(165deg,#ff6a6a,#ff9b77)' },
  { id: 'm2', name: '林可', initials: 'LK', ageGrade: '22岁 · 大四', college: '控制学院', intent: '长期朋友' as Intent, score: 87, tags: ['摄影', '咖啡', '桌游'], reasons: ['共同兴趣 3 项', '周末空闲重叠', '社团经历相近'], coverTitle: 'Weekend Vibes', coverSubtitle: 'Coffee & Walk', coverGradient: 'linear-gradient(165deg,#ff5c62,#ff8d73)' },
  { id: 'm3', name: '唐珂', initials: 'TK', ageGrade: '24岁 · 研二', college: '人文学院', intent: '认真了解' as Intent, score: 85, tags: ['跑步', '音乐', '论文打卡'], reasons: ['夜间在线时段接近', '都在论文打卡', '信用分均 90+'], coverTitle: 'Long-term Match', coverSubtitle: 'Safe & Genuine', coverGradient: 'linear-gradient(165deg,#ff4458,#fd6b4e)' }
];

export const matchedUsers = [
  { id: 'u1', name: '周宁', initials: 'ZN', last: '今晚图书馆见？', time: '18:42', unread: 2 },
  { id: 'u2', name: '林可', initials: 'LK', last: '周末摄影散步吗', time: '昨天', unread: 0 }
];

export const chats = { u1: ['我 7 点后到 B 区。', '今晚图书馆见？'], u2: ['西操场黄昏挺好看。', '周末摄影散步吗'] } as Record<string, string[]>;
export const icebreakers = ['要不要一起去图书馆？', '这周有空打羽毛球吗？', '你一般在哪个自习室？'];

export const events = [
  { id: 'e1', title: '图书馆自习局', subtitle: 'Study Night', time: '今天 19:00-21:00', place: '主图书馆 B 区', people: '12/20', tag: '学习', coverGradient: 'linear-gradient(160deg,#ff6a6a,#ff9b82)' },
  { id: 'e2', title: '羽毛球局', subtitle: 'Badminton', time: '周三 20:00', place: '体育馆2号场', people: '10/16', tag: '运动', coverGradient: 'linear-gradient(160deg,#ff5e62,#ff936c)' },
  { id: 'e3', title: '桌游夜', subtitle: 'Board Game', time: '周五 19:30', place: '学生活动中心', people: '18/24', tag: '社交', coverGradient: 'linear-gradient(160deg,#fd6b4e,#ffa07b)' }
];

export const profile = { name: '林夏', initials: 'LX', college: '华北电力大学·电气工程学院', grade: '研一', verify: '已认证', intent: '长期朋友', credit: 94, completion: 86, interests: ['羽毛球', '摄影', '自习', '咖啡'], bio: '希望认识作息规律、积极向上的同学，周中常在图书馆，周末会约运动或散步。' };

export const safetyItems = [
  { key: 'ID', title: '校园认证', desc: '学号 + 校园邮箱双重认证，保障真实身份' },
  { key: 'PV', title: '隐私可见范围', desc: '支持仅同校可见、仅匹配可见等设置' },
  { key: 'RB', title: '举报与拉黑', desc: '对骚扰行为一键举报并拉黑，24小时内处理' },
  { key: 'SF', title: '线下见面安全提醒', desc: '建议公共场所见面，提前告知室友行程' },
  { key: 'CR', title: '信用分规则', desc: '守约参与活动和文明沟通可提升信用分' },
  { key: 'AS', title: '防骚扰设置', desc: '可关闭陌生消息、限制夜间打扰与频繁提醒' }
];
