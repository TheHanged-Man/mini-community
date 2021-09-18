const firstGradePages = [
  'pages/index/index',
  'pages/categories/categories'
];

export default {
  pages: ([] as string[]).concat(firstGradePages),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '鸭鸭 -- 看看身边的大小事儿',
    navigationBarTextStyle: '#333'
  },
}
