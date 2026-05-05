export const stories = ['自习搭子', '羽毛球局', '考研互督', '周末咖啡', '摄影散步'];

export const feed = [
  { id: 'f1', name: '周宁', college: '能源动力学院', text: '今晚图书馆 B 区一起自习两小时？', tags: ['#自习搭子', '#考研互督'], likes: 28, comments: 7, visual: '📚' },
  { id: 'f2', name: '陈予', college: '控制工程学院', text: '周三羽毛球局还差两人，欢迎新手。', tags: ['#羽毛球局', '#同频运动'], likes: 42, comments: 13, visual: '🏸' }
];

export const matchCards = [
  { id: 'm1', name: '周宁', info: '23岁 · 研一 · 能源动力学院', intent: '学习搭子', score: 91, tags: ['作息接近', '同校区', '共同兴趣'], reason: '都报名羽毛球活动', visual: '📘✨' },
  { id: 'm2', name: '林可', info: '22岁 · 大四 · 人文学院', intent: '长期朋友', score: 87, tags: ['都爱摄影', '周末都有空', '信用分高'], reason: '图书馆签到时间接近', visual: '📷☕' }
];

export const chats = [
  { id: 'c1', peer: '周宁', last: '今晚图书馆见？', time: '18:40', unread: 2, messages: ['我 7 点后到。', '今晚图书馆见？'] },
  { id: 'c2', peer: '林可', last: '周末去摄影散步吧', time: '昨天', unread: 0, messages: ['西操场银杏好看。', '周末去摄影散步吧'] }
];
