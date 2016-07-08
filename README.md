# kodo

![](rhino.png)

[![Build Status](https://travis-ci.org/icepy/kodo.svg?branch=master)](https://travis-ci.org/icepy/kodo) [![Coverage Status](https://coveralls.io/repos/github/icepy/kodo/badge.svg?branch=master)](https://coveralls.io/github/icepy/kodo?branch=master)


## How Run

首先你需要通过命令`npm install`来安装所需要的依赖环境。整个项目分为了两个部分，`kodo` 库源码和 `examples` 展示例子。

你可以运行 `npm run dev` 来构建kodo项目开发者版本，然后运行 `npm run examp` 来构建 `examples` 展示例子。

现在你可以运行 `npm run dev-server` 来启动一个Web 服务器，这样在地址栏输入： `http://localhost:3000/#/index/` 就可以访问Demo了。

## 结构与参与项目的说明

`kodo` 项目的源码放置在顶层的 `src` 目录下，如果你需要创建一个组件：

- 在 `components` 目录中创建你的组件目录和 `index.js` 文件
- 在入口 `index.js` 文件中导出你的组件
- 请注意将你的组件和导出组件使用大小写区分，例如 `components/button` ，导出时可以使用 `Button`。

当你编写完一个组件时，需要进行测试：

- 在 `test` 目录中编写单元测试文件
- 在 `examples/src/interface` 目录中创建你的展示例子目录
- 在 `examples/src/router` 路由文件中配置好你的路由

-----

当你想亲自参与这个开源项目时可以Fork [kodo]() 项目，按照上述的方式来添加新的组件和展示例子，那么你就可以发送 PR 给我们了。

## 感谢

感谢好友 [结一](https://github.com/marvin1023) 提供了CSS UI [sheral](https://github.com/imweb/sheral)项目。

## 开源遵循

The MIT License (MIT)

Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
