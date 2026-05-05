export const currentUser = { nickname: '林夏', college: '电气工程学院', grade: '研一', credit: 92, intent: '长期朋友', interests: ['羽毛球', '自习', '音乐'] };

export const recommendations = [
  { id: 'u1', name: '周宁', college: '能源动力', intent: '学习搭子', score: 88, tags: ['作息接近', '共同兴趣3项'] },
  { id: 'u2', name: '陈予', college: '控制工程', intent: '长期朋友', score: 84, tags: ['同校区', '目标一致'] }
];

export const chats = [
  { id: 'c1', peer: '周宁', last: '今晚图书馆见吗？', messages: ['Hi，我也在主楼自习。', '今晚图书馆见吗？'] },
  { id: 'c2', peer: '陈予', last: '周末羽毛球局可以', messages: ['周末羽毛球局可以', '太好了！'] }
];

export const events = [
  { id: 'e1', title: '晚间自习2小时', category: '学习', location: '图书馆B区', joined: 12, cap: 20 },
  { id: 'e2', title: '周末羽毛球新手局', category: '运动', location: '体育馆2号场', joined: 8, cap: 16 }
];
