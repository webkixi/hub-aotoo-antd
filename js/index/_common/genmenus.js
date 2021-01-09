const nav = Pager.nav
const lib = ao2.lib

export default function(data){
  return ui_list({
    data: [
      {title: '菜单1', attr: {to: '/index/a', index: 0}, select: true},
      {title: '菜单2', attr: {to: '/index/b', index: 1}},
      {title: '菜单3', attr: {to: '/index/c', index: 2}}
    ],

    itemMethod: {
      onClick(e, param, inst){
        let {to, index} = inst.attr()
        nav.redirectTo({ url: to })
        this.select(index)
      }
    }
  })
}