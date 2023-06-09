import{_ as s,r as i,o as a,c as d,g as l,a as n,b as t,h as c}from"./app-bfd99086.js";const r={},o=n("h1",{id:"示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),t(" 示例")],-1),v=c(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: demo [vue] A vue demo

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div id=&quot;container&quot;&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import p5 from &#39;p5&#39;
import { onMounted } from &#39;vue&#39;;
let count = 0
const sketch = (s:any) =&gt; {
  s.setup = () =&gt; {
    s.createCanvas(400, 400)
    s.background(120)
  }
  s.draw = () =&gt; {
    const x = Math.sin(count) * 100 + 200
    const y = Math.cos(count) * 100 + 200
    s.circle(x, y, 50)
    count += 0.1
  }
}
onMounted(() =&gt; new p5(sketch, &#39;container&#39;))
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function u(m,b){const e=i("processing");return a(),d("div",null,[o,l(e),v])}const g=s(r,[["render",u],["__file","circle.html.vue"]]);export{g as default};
