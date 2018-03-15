webpackJsonp([0xb68168605aee],{335:function(n,s){n.exports={data:{markdownRemark:{html:'<p>概览：</p>\n<ul>\n<li>prettier</li>\n<li>eslint fix</li>\n<li>git hook</li>\n<li>commitlint</li>\n</ul>\n<blockquote>\n<p>以配置js为例</p>\n</blockquote>\n<h3>第一步 格式化所有代码 prettier</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">yarn add prettier -D\n</code></pre>\n      </div>\n<p>在package.json的script里面添加如下配置，注意修改成自己的文件路径，采用glob配置。</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"format"</span><span class="token operator">:</span> <span class="token string">"prettier --single-quote --trailing-comma es5 --write \\"src/**/*.js\\""</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>配置完毕，可以执行 <code>yarn format</code>测试一下。</p>\n<p>更多配置访问官网 <a href="https://prettier.io/docs/en/install.html">https://prettier.io/docs/en/install.html</a></p>\n<p>如果有eslint配置文件，会发现格式化之后，有些不符合eslint规范，配置eslint。</p>\n<h3>第二步 配置Eslint</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">yarn add -D eslint\n</code></pre>\n      </div>\n<p>假设你已经配置好eslint的配置文件\n在package.json的scripts里添加如下，\b注意修改成自己的文件路径。</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"fix"</span><span class="token operator">:</span> <span class="token string">"eslint --fix \\"src/**/*.js\\""</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>配置完毕。\n执行完\b <code>yarn format</code> 之后再执行 <code>yarn fix</code>，完美自动格式化所有JS代码。</p>\n<p>此时我们配置format的语句如下:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"format"</span><span class="token operator">:</span> <span class="token string">"prettier --single-quote --trailing-comma es5 --write \\"src/**/*.js\\" &amp;&amp; yarn fix"</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>可以一次实现格式化和fix。</p>\n<p>更多信息 <a href="https://eslint.org/">https://eslint.org/</a></p>\n<h3>第三步 添加Git钩子(Pre-commit Hook)</h3>\n<blockquote>\n<p>Git 钩子(hooks)是在Git 仓库中特定事件(certain points)触发后被调用的脚本。\n详情可浏览 <a href="https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90">https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90</a></p>\n</blockquote>\n<blockquote>\n<p>每次提交代码，执行 <code>git commit</code>之后进行自动格式化，免去每次人为手动格式化，使远程仓库代码保持风格统一。</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">yarn add lint-staged husky --dev\n</code></pre>\n      </div>\n<p>在package.json里面配置</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"precommit"</span><span class="token operator">:</span> <span class="token string">"lint-staged"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"*.js"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"yarn run format -- "</span><span class="token punctuation">,</span> <span class="token string">"git add"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>配置完成。\n这样每次git commit 都会自动执行格式化并fix，成功之后会将格式化之后的文件自动add，然后统一commit。</p>\n<h3>第四步 添加git commit注释规范</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">yarn add -D @commitlint/cli @commitlint/config-conventional\n</code></pre>\n      </div>\n<p>在根目录下面添加<strong>commitlint.config.js</strong>文件，内容如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">extends</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'@commitlint/config-conventional\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  rules<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'type-enum\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token number">2</span><span class="token punctuation">,</span>\n      <span class="token string">\'always\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">[</span>\n        <span class="token string">\'merge\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'add\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'update\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'delete\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'feat\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'fix\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'docs\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'style\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'refactor\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'test\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'revert\'</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">\'subject-case\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">\'never\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'lower-case\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>提交commit\b格式如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-md"><code class="language-md"><Type>: subjectName\n\nbodyDetail</code></pre>\n      </div>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-md"><code class="language-md">add: 添加了readme.md文件\n\n添加了X的配置\n添加了文档</code></pre>\n      </div>\n<p>配置package.json</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"commitmsg"</span><span class="token operator">:</span> <span class="token string">"commitlint -e $GIT_PARAMS"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>配置完毕。</p>\n<p>更多信息请查看：<a href="http://marionebl.github.io/commitlint/#/">http://marionebl.github.io/commitlint/#/</a></p>\n<p>现在提交代码，只需要执行<code>git commit</code>\n然后格式化成功之后，进入默认编辑器（我的是VIM），填写commit。wq保存就OK了。</p>',frontmatter:{date:"March 03, 2018",path:"/blog/essay/git-hook-usage",title:"自动格式化以及提交代码时的优化配置"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-essay-git-hook-usage-fffe61f7ecbf624f1524.js.map