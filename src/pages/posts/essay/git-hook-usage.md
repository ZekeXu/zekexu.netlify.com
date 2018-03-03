---
path: "/blog/essay/git-hook-usage"
date: "2018-03-03"
title: "自动格式化以及提交代码时的优化配置"
---

概览：
* prettier
* eslint fix
* git hook
* commitlint

> 以配置js为例

### 第一步 格式化所有代码 prettier

```bash
yarn add prettier -D
```

在package.json的script里面添加如下配置，注意修改成自己的文件路径，采用glob配置。

```json
{
  "scripts": {
    "format": "prettier --single-quote --trailing-comma es5 --write \"src/**/*.js\""
  }
}
```

配置完毕，可以执行 ```yarn format```测试一下。

更多配置访问官网 <https://prettier.io/docs/en/install.html>

如果有eslint配置文件，会发现格式化之后，有些不符合eslint规范，配置eslint。

### 第二步 配置Eslint

```bash
yarn add -D eslint
```

假设你已经配置好eslint的配置文件
在package.json的scripts里添加如下，注意修改成自己的文件路径。

```json
{
  "scripts": {
    "fix": "eslint --fix \"src/**/*.js\""
  }
}
```

配置完毕。
执行完 ```yarn format``` 之后再执行 ```yarn fix```，完美自动格式化所有JS代码。

此时我们配置format的语句如下:

```json
"format": "prettier --single-quote --trailing-comma es5 --write \"src/**/*.js\" && yarn fix",
```

可以一次实现格式化和fix。

更多信息 <https://eslint.org/>

### 第三步 添加Git钩子(Pre-commit Hook)

> Git 钩子(hooks)是在Git 仓库中特定事件(certain points)触发后被调用的脚本。
详情可浏览 <https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90>

> 每次提交代码，执行 ```git commit```之后进行自动格式化，免去每次人为手动格式化，使远程仓库代码保持风格统一。

```bash
yarn add lint-staged husky --dev
```

在package.json里面配置

```json
{
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.js": ["yarn run format -- ", "git add"]
  }
}
```

配置完成。
这样每次git commit 都会自动执行格式化并fix，成功之后会将格式化之后的文件自动add，然后统一commit。

### 第四步 添加git commit注释规范

```bash
yarn add -D @commitlint/cli @commitlint/config-conventional
```

在根目录下面添加__commitlint.config.js__文件，内容如下：

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'merge',
        'add',
        'update',
        'delete',
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'revert'
      ]
    ],
    'subject-case': [0, 'never', ['lower-case']]
  }
}
```

提交commit格式如下：

```md
<Type>: subjectName

bodyDetail
```

For example:

```md
add: 添加了readme.md文件

添加了X的配置
添加了文档
```

配置package.json

```json
{
  "scripts": {
    "commitmsg": "commitlint -e $GIT_PARAMS"
  }
}
```

配置完毕。

更多信息请查看：<http://marionebl.github.io/commitlint/#/>

现在提交代码，只需要执行```git commit```
然后格式化成功之后，进入默认编辑器（我的是VIM），填写commit。wq保存就OK了。
