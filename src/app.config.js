const pages = [
  "pages/home/home",
  'pages/index/index',
  'pages/login/login',
  "pages/sortGoods/sortGoods",
  "pages/recommend/recommend",
  "pages/shoppingCart/shoppingCart",
  "pages/user/user",//
  "pages/search/search",//搜索页
  "pages/detail/detail",//详情页
];

module.exports.ali = {
  pages,
  window: {
    defaultTitle: 'Remax Ali Template',
    titleBarColor: '#282c34',
  },
};

module.exports.wechat = {
  pages,
  entryPagePath: "pages/home/home",
  window: {
    navigationBarTitleText: '微信小程序',
    // navigationBarBackgroundColor: '#282c34',
  },
  tabBar: {
    selectedColor: "#ff4400",
    list: [
      {
        pagePath: "pages/home/home",
        iconPath: '/images/icon/home.png',
        selectedIconPath: '/images/icon/home-1.png',
        text: "首页"
      },
      {
        pagePath: "pages/sortGoods/sortGoods",
        iconPath: '/images/icon/sortGoods.png',
        selectedIconPath: '/images/icon/sortGoods-1.png',
        text: "分类"
      },
      // {
      //   pagePath: "pages/recommend/index",
      //   iconPath: '/images/icon/recommend.png',
      //   selectedIconPath: '/images/icon/recommend-1.png',
      //   text: "推荐"
      // },
      {
        pagePath: "pages/shoppingCart/shoppingCart",
        iconPath: '/images/icon/shoppingCart.png',
        selectedIconPath: '/images/icon/shoppingCart-1.png',
        text: "购物车"
      },
      {
        pagePath: "pages/user/user",
        iconPath: '/images/icon/user.png',
        selectedIconPath: '/images/icon/user-1.png',
        text: "我的"
      }
    ]
  }
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: 'Remax Toutiao Template',
    navigationBarBackgroundColor: '#282c34',
  },
};

module.exports.web = {
  pages,
  title: 'Remax Web Template',
};
