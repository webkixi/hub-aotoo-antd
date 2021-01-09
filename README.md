# aotoo的基础项目  

这是是`aotoo-hub`的子项目，需要通过远程安装使用(aotoo-hub脚手架环境中)。本项目是一个react，aotoo的远程基础项目，用于演示或快速搭建react，aotoo的本地开发环境。

[aotoo-hub介绍](http://www.agzgz.com)

## 安装  

### 全局安装命令行工具

```bash
npm install aotoo-cli -g
aotoo -V # 检查命令行工具是否已经安装
```

### 构建工作空间  

创建aotoo-hub的工作空间，该工作空间可用于创建react/vue/小程序的本地项目及安装远程项目  

```bash
aotoo init workspacename  # 创建工作空间目录
cd workspacename
```

### 远程安装本项目  

安装`hub-react`项目

```bash
aotoo install https://github.com/webkixi/hub-aotoo-case.git
```

根据提示操作，等待安装完毕，即可在本地运行项目
