import { routePaths } from "./routes";

export default {
  pages: ([] as string[]).concat(routePaths.firstGradePages, routePaths.secondGradePages),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '鸭鸭 -- 看看身边的大小事儿',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#000',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: routePaths.firstGradePages
  }
}
