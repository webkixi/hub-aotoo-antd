import genMenus from './_common/genmenus'
const menus = genMenus()

export default Pager.pages(
  [
    {url: '/index/a', content: import('./_subpages/a')},
    {url: '/index/b', content: import('./_subpages/b')},
    {url: '/index/c', content: import('./_subpages/c')},
  ], 
  
  {
    select: '/index/a',
    
    goback(param){
      menus.select(param.index)
    },

    menus: function(){
      return <menus.UI />
    }
  }
)