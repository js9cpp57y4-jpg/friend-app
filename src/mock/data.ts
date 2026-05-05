export type Intent = '认真了解' | '学习搭子' | '长期朋友' | '活动玩伴';

export const stories = [
  '自习搭子', '羽毛球局', '考研互督', '周末咖啡', '摄影散步', '论文打卡'
];

export const feed = [
  { id: 'f1', name: '周宁', dept: '能源动力学院·研一', text: '今晚图书馆 B 区一起冲刺 2 小时？', tags: ['#自习搭子', '#考研互督'], likes: 39, comments: 12, saves: 7, visual: '📚✨' },
  { id: 'f2', name: '林可', dept: '控制学院·大四', text: '周三羽毛球新手局缺 2 人，想来的同学滴滴！', tags: ['#羽毛球局', '#轻线下破冰'], likes: 56, comments: 18, saves: 10, visual: '🏸🌤️' },
  { id: 'f3', name: '唐珂', dept: '人文学院·研二', text: '周末摄影散步，准备拍校园黄昏和图书馆夜景。', tags: ['#摄影散步', '#校园生活'], likes: 48, comments: 9, saves: 15, visual: '📷🌇' }
];

export const recommendedUsers = [
  { id: 'r1', name: '宋屿', reason: '作息接近 + 同校区 + 共同兴趣3项', score: 92 },
  { id: 'r2', name: '陈予', reason: '都报名论文打卡活动', score: 88 }
];

export const matchCards = [
  { id: 'm1', name: '周宁', ageGrade: '23岁 · 研一', college: '能源动力学院', intent: '学习搭子' as Intent, score: 91, tags: ['早起', '图书馆', '羽毛球'], reasons: ['作息接近', '共同报名羽毛球活动', '同校区'], visual: '📘☀️' },
  { id: 'm2', name: '林可', ageGrade: '22岁 · 大四', college: '控制学院', intent: '长期朋友' as Intent, score: 87, tags: ['摄影', '咖啡', '桌游'], reasons: ['共同兴趣 3 项', '周末空闲时间重叠', '社团经历相近'], visual: '📷☕' },
  { id: 'm3', name: '唐珂', ageGrade: '24岁 · 研二', college: '人文学院', intent: '认真了解' as Intent, score: 85, tags: ['跑步', '音乐', '论文打卡'], reasons: ['夜间在线时段接近', '都在论文打卡', '信用分均 90+'], visual: '🎧🏃' }
];

export const matchedUsers = [
  { id: 'u1', name: '周宁', last: '今晚图书馆见？', time: '18:42', unread: 2 },
  { id: 'u2', name: '林可', last: '周末摄影散步吗', time: '昨天', unread: 0 }
];

export const chats = {
  u1: ['我 7 点后到 B 区。', '今晚图书馆见？'],
  u2: ['西操场银杏很好看。', '周末摄影散步吗']
} as Record<string, string[]>;

export const icebreakers = ['要不要一起去图书馆？', '这周有空打羽毛球吗？', '你一般在哪个自习室？'];

export const events = [
  { id: 'e1', title: '图书馆自习局', time: '今天 19:00-21:00', place: '主图书馆 B 区', people: '12/20', tag: '学习', visual: '📚' },
  { id: 'e2', title: '羽毛球局', time: '周三 20:00', place: '体育馆2号场', people: '10/16', tag: '运动', visual: '🏸' },
  { id: 'e3', title: '桌游夜', time: '周五 19:30', place: '学生活动中心', people: '18/24', tag: '社交', visual: '🎲' },
  { id: 'e4', title: '摄影散步', time: '周六 16:00', place: '西操场-银杏大道', people: '9/15', tag: '兴趣', visual: '📷' },
  { id: 'e5', title: '考研互督', time: '每日 07:00 打卡', place: '线上+图书馆', people: '56/80', tag: '成长', visual: '📝' },
  { id: 'e6', title: '论文打卡', time: '工作日 21:30', place: '研究生学习群', people: '34/50', tag: '科研', visual: '💡' }
];

export const profile = {
  name: '林夏', college: '华北电力大学·电气工程学院', grade: '研一', verify: '已认证',
  intent: '长期朋友', credit: 94, completion: 86,
  interests: ['羽毛球', '摄影', '自习', '咖啡'],
  bio: '希望认识作息规律、积极向上的同学，周中常在图书馆，周末会约运动或散步。'
};

export const safetyItems = [
  { title: '校园认证', desc: '学号 + 校园邮箱双重认证，保障真实身份' },
  { title: '隐私可见范围', desc: '支持仅同校可见、仅匹配可见等设置' },
  { title: '举报与拉黑', desc: '对骚扰行为一键举报并拉黑，24小时内处理' },
  { title: '线下见面安全提醒', desc: '建议公共场所见面，提前告知室友行程' },
  { title: '信用分规则', desc: '守约参与活动和文明沟通可提升信用分' },
  { title: '防骚扰设置', desc: '可关闭陌生消息、限制夜间打扰与频繁提醒' }
];
