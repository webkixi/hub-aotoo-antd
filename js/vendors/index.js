/*
 * Aotoo-hub
 * 多项目大前端脚手架
 * 作者：天天修改
 * home-url: http://www.agzgz.com
 * github: https: //github.com/webkixi
 */

import aotoo, {$$, lib, render, extTemplate} from "./ao2"
import Pager from "@aotoo/react-pager";
import injectlib from 'aotoo-inject'
import "./common/markdit";
import './common/ajax'  // context.Fetcher

let context = lib.curContext()
let inject = injectlib()

let ao2 = aotoo
ao2.lib = lib
ao2.extTemplate = extTemplate
ao2.render = render
ao2.$$ = $$
ao2.inject = inject

context.Pager = Pager
context.$$ = $$
context.ao2 = ao2

export {}