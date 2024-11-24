import{_ as a,c as s,o as t,aT as i}from"./chunks/framework.BtFyTmqC.js";const g=JSON.parse('{"title":"frontmatter","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/frontmatter.md","filePath":"zh/guide/frontmatter.md","lastUpdated":1732417645000}'),e={name:"zh/guide/frontmatter.md"},n=i(`<h1 id="frontmatter" tabindex="-1">frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;frontmatter&quot;">​</a></h1><h2 id="usage" tabindex="-1">用法 <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;用法 {#usage}&quot;">​</a></h2><p>VitePress 支持在所有 Markdown 文件中使用 YAML frontmatter，并使用 <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a> 解析。frontmatter 必须位于 Markdown 文件的顶部 (在任何元素之前，包括 <code>&lt;script&gt;</code> 标签)，并且需要在三条虚线之间采用有效的 YAML 格式。例如：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Docs with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>许多站点或默认主题配置选项在 frontmatter 中都有相应的选项。可以使用 frontmatter 来覆盖当前页面的特定行为。详细信息请参见 <a href="./../reference/frontmatter-config">frontmatter 配置参考</a>。</p><p>还可以定义自己的 frontmatter 数据，以在页面上的动态 Vue 表达式中使用。</p><h2 id="accessing-frontmatter-data" tabindex="-1">访问 frontmatter 数据 <a class="header-anchor" href="#accessing-frontmatter-data" aria-label="Permalink to &quot;访问 frontmatter 数据 {#accessing-frontmatter-data}&quot;">​</a></h2><p>frontmatter 数据可以通过特殊的 <code>$frontmatter</code> 全局变量来访问：</p><p>下面的例子展示了应该如何在 Markdown 文件中使用它：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Docs with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># {{ $frontmatter.title }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Guide content</span></span></code></pre></div><p>还可以使用 <a href="./../reference/runtime-api#usedata"><code>useData()</code></a> 辅助函数在 <code>&lt;script setup&gt;</code> 中访问当前页面的 frontmatter。</p><h2 id="alternative-frontmatter-formats" tabindex="-1">其他 frontmatter 格式 <a class="header-anchor" href="#alternative-frontmatter-formats" aria-label="Permalink to &quot;其他 frontmatter 格式 {#alternative-frontmatter-formats}&quot;">​</a></h2><p>VitePress 也支持 JSON 格式的 frontmatter，以花括号开始和结束：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Blogging Like a Hacker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;editLink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div>`,14),r=[n];function l(p,h,o,k,d,c){return t(),s("div",null,r)}const m=a(e,[["render",l]]);export{g as __pageData,m as default};
