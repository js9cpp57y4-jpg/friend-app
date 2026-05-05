export type Intent = '认真了解' | '学习搭子' | '长期朋友' | '活动玩伴';
export type PhotoMode = '公开照片' | '互相喜欢后可见' | '手动同意后可见';

export const brand = {
  name: 'NCEPU Link',
  tagline: 'Meet your campus frequency.',
  cnTagline: '在华电，遇见同频的人'
};

export const onboardingInterestGroups = [
  { title: '校园生活', tags: ['图书馆自习', '食堂探索', '校园散步', '社团活动', '周末咖啡'] },
  { title: '运动户外', tags: ['羽毛球', '跑步', '健身', '篮球', '骑行'] },
  { title: '学习成长', tags: ['考研互督', '论文打卡', '英语六级', '科研交流', '早起打卡'] },
  { title: '兴趣娱乐', tags: ['摄影', '音乐', '电影', '桌游', '游戏'] }
];

export const photoVisibilityOptions = [
  { id: 'public', title: '公开照片', desc: '愿意展示生活照，优先匹配同样公开照片的用户' },
  { id: 'mutual', title: '互相喜欢后可见', desc: '推荐阶段使用氛围封面，双方感兴趣后自动解锁照片' },
  { id: 'request', title: '手动同意后可见', desc: '对方需要发送查看请求，你同意后才可看见照片' }
];

export const stories = [
  { id: 'study', label: '自习', initials: 'ST', count: 128 },
  { id: 'sport', label: '运动', initials: 'SP', count: 86 },
  { id: 'coffee', label: '咖啡', initials: 'CF', count: 42 },
  { id: 'photo', label: '摄影', initials: 'PH', count: 55 },
  { id: 'paper', label: '论文', initials: 'PA', count: 71 },
  { id: 'board', label: '桌游', initials: 'BG', count: 34 }
];

export const feed = [
  { id: 'f1', nickname: '北极星', initials: 'BX', meta: '校园认证 · 学习搭子 · 12 min', text: '今晚主图 B 区自习两小时，想找一个节奏稳定的学习搭子。', tags: ['自习搭子', '考研互督'], likes: 39, comments: 12, saves: 7, coverTitle: 'Study Night', coverSubtitle: 'Library B · 19:00' },
  { id: 'f2', nickname: '风铃', initials: 'FL', meta: '校园认证 · 运动兴趣 · 35 min', text: '周三羽毛球新手局缺 2 人，不卷水平，只想出汗和认识新朋友。', tags: ['羽毛球', '轻线下'], likes: 56, comments: 18, saves: 10, coverTitle: 'Badminton', coverSubtitle: 'Gym Court 2' },
  { id: 'f3', nickname: '晚星', initials: 'WX', meta: '校园认证 · 兴趣社交 · 1 h', text: '周末摄影散步，路线是西操场到图书馆夜景，欢迎同频同学。', tags: ['摄影散步', '校园生活'], likes: 48, comments: 9, saves: 15, coverTitle: 'Campus Walk', coverSubtitle: 'Sunset Route' }
];

export const recommendedUsers = [
  { id: 'r1', nickname: '南风', initials: 'NF', meta: '校园认证 · 同频推荐', reason: '作息接近 · 同校区 · 共同兴趣3项', score: 92 },
  { id: 'r2', nickname: '小满', initials: 'XM', meta: '校园认证 · 活动同频', reason: '都报名论文打卡活动', score: 88 }
];

export const matchCards = [
  {
    id: 'm1', nickname: '北极星', initials: 'BX', displayMeta: '校园认证 · 学习搭子 · 主校区附近', hiddenMeta: '23岁 · 研一 · 能源动力学院', intent: '学习搭子' as Intent, score: 91,
    tags: ['早起', '图书馆', '羽毛球', '考研互督'], reasons: ['作息接近', '共同报名羽毛球活动', '同校区'],
    coverTitle: 'Study Partner', coverSubtitle: 'Library · Badminton · Morning', quote: '稳定自习，比短暂热闹更重要。', distance: '主校区 · 0.8km', activeTime: '常在线 19:00-22:30', verified: true,
    photoMode: '公开照片' as PhotoMode, photoStatus: '已公开生活片段', unlockHint: '公开照片模式：生活照默认可见',
    album: [
      { title: 'Library B', type: '学习照', caption: '常去主图 B 区，喜欢安静自习。' },
      { title: 'Badminton', type: '运动照', caption: '每周打一次羽毛球，新手友好。' },
      { title: 'Morning Run', type: '生活照', caption: '早起跑步，作息比较规律。' }
    ],
    profileBlocks: [
      { title: '生活方式', items: ['早睡早起', '图书馆高频', '周末运动'] },
      { title: '期待关系', items: ['学习搭子', '长期朋友', '活动玩伴'] }
    ]
  },
  {
    id: 'm2', nickname: '风铃', initials: 'FL', displayMeta: '校园认证 · 长期朋友 · 照片需授权', hiddenMeta: '22岁 · 大四 · 控制学院', intent: '长期朋友' as Intent, score: 87,
    tags: ['摄影', '咖啡', '桌游', '校园散步'], reasons: ['共同兴趣 3 项', '周末空闲时间重叠', '社团经历相近'],
    coverTitle: 'Campus Life', coverSubtitle: 'Photo · Coffee · Board Game', quote: '喜欢慢慢认识，也喜欢有边界感的相处。', distance: '主校区 · 1.2km', activeTime: '周末下午活跃', verified: true,
    photoMode: '手动同意后可见' as PhotoMode, photoStatus: '照片已隐藏', unlockHint: '隐私模式：可发送查看照片请求，对方同意后解锁',
    album: [
      { title: 'Campus Walk', type: '氛围图', caption: '先展示兴趣与生活方式，不直接公开视频。' },
      { title: 'Coffee Notes', type: '生活片段', caption: '喜欢咖啡、自习、慢节奏聊天。' },
      { title: 'Photo Spot', type: '照片请求', caption: '互相感兴趣后，可请求查看生活照。' }
    ],
    profileBlocks: [
      { title: '兴趣偏好', items: ['摄影', '咖啡', '桌游'] },
      { title: '隐私设置', items: ['不默认公开照片', '同意后解锁', '不展示具体学院年级'] }
    ]
  },
  {
    id: 'm3', nickname: '晚星', initials: 'WX', displayMeta: '校园认证 · 认真了解 · 互相喜欢后可见', hiddenMeta: '24岁 · 研二 · 人文学院', intent: '认真了解' as Intent, score: 85,
    tags: ['跑步', '音乐', '论文打卡', '电影'], reasons: ['夜间在线时段接近', '都在论文打卡', '信用分均 90+'],
    coverTitle: 'Focus & Run', coverSubtitle: 'Music · Paper Club · Running', quote: '希望遇到真诚、稳定、愿意认真沟通的人。', distance: '东区 · 2.1km', activeTime: '常在线 21:00 后', verified: true,
    photoMode: '互相喜欢后可见' as PhotoMode, photoStatus: '互相感兴趣后解锁', unlockHint: '双向喜欢后自动展示生活照和更多身份信息',
    album: [
      { title: 'Night Run', type: '运动片段', caption: '夜跑和听歌是固定放松方式。' },
      { title: 'Paper Club', type: '学习片段', caption: '论文打卡，适合互相督促。' },
      { title: 'Music Time', type: '兴趣片段', caption: '喜欢电影配乐和现场音乐。' }
    ],
    profileBlocks: [
      { title: '同频关键词', items: ['稳定沟通', '夜间学习', '跑步音乐'] },
      { title: '照片权限', items: ['双向喜欢后可见', '不公开具体身份'] }
    ]
  }
];

export const matchedUsers = [
  { id: 'u1', nickname: '北极星', initials: 'BX', last: '今晚图书馆见？', time: '18:42', unread: 2 },
  { id: 'u2', nickname: '风铃', initials: 'FL', last: '周末摄影散步吗', time: '昨天', unread: 0 }
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
  nickname: '林间风', initials: 'LF', college: '华北电力大学 · 电气工程学院', grade: '研一', verify: '已认证',
  intent: '长期朋友', credit: 94, completion: 86,
  photoMode: '手动同意后可见' as PhotoMode,
  interests: ['羽毛球', '摄影', '自习', '咖啡'],
  bio: '希望认识作息规律、积极向上的同学。周中常在图书馆，周末会约运动或散步。'
};

export const safetyItems = [
  { title: '校园认证', desc: '学号 + 校园邮箱双重认证，保障真实身份' },
  { title: '照片可见权限', desc: '支持公开、互相喜欢后可见、手动同意后可见三种模式' },
  { title: '隐私可见范围', desc: '推荐阶段默认隐藏具体学院、年级等敏感信息' },
  { title: '举报与拉黑', desc: '对骚扰行为一键举报并拉黑，24小时内处理' },
  { title: '线下见面提醒', desc: '建议公共场所见面，提前告知室友行程' },
  { title: '信用分规则', desc: '守约参与活动和文明沟通可提升信用分' },
  { title: '防骚扰设置', desc: '关闭陌生消息、限制夜间打扰与频繁提醒' }
];
