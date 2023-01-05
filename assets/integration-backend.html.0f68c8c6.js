import{_ as i,o as c,c as l,a as n,b as e,d as s,w as o,e as p,r}from"./app.8cae158d.js";const d={},u=n("h1",{id:"backend-integration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#backend-integration","aria-hidden":"true"},"#"),e(" Backend Integration")],-1),h={id:"das-account-indexer",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#das-account-indexer","aria-hidden":"true"},"#",-1),k={href:"https://github.com/dotbitHQ/das-account-indexer",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/dotbitHQ/das-account-indexer",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,"It continuously reads data from the CKB chain through the CKB node, parses it and stores it in the local database (RocksDB), and provides a high-performance JSON-RPC service for the business to read the .bit parsed data.",-1),m=n("blockquote",null,[n("p",null,[e("Deploying Indexer need a CKB Node\uFF0Csee "),n("a",{href:"#ckb-node-and-ckb-indexer"},"CKB Node And CKB Indexer")])],-1),v={href:"https://github.com/dotbitHQ/das-account-indexer/blob/main/API.md",target:"_blank",rel:"noopener noreferrer"},g=p(`<h4 id="usage-example" tabindex="-1"><a class="header-anchor" href="#usage-example" aria-hidden="true">#</a> Usage Example</h4><p>The following code takes getting basic user information as an example to illustrate the use of .bit Indexer.</p><p><strong>Request</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST https://indexer-basic.did.id -d<span class="token string">&#39;{&quot;jsonrpc&quot;: &quot;2.0&quot;,&quot;id&quot;: 1,&quot;method&quot;: &quot;das_accountInfo&quot;,&quot;params&quot;: [{&quot;account&quot;:&quot;phone.bit&quot;}]}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Response</strong></p><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;errno&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errmsg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;out_point&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;tx_hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xabb6b2f502e9d992d00737a260e6cde53ad3f402894b078f60a52e0392a17ec8&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;account_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;account&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone.bit&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;account_id_hex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x5f560ec1edc638d7dab7c7a1ca8c3b0f6ed1848b&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;next_account_id_hex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x5f5c20  f6cd95388378771ca957ce665f084fe23b&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;create_at_unix&quot;</span><span class="token operator">:</span> <span class="token number">1626955542</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expired_at_unix&quot;</span><span class="token operator">:</span> <span class="token number">1658491542</span><span class="token punctuation">,</span>
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;das_lock_arg_hex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x0559724739940777947c56c4f2f2c9211cd5130fef0559724739940777947c56c4f2f2c9211cd5130fef&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;owner_algorithm_id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 3: eth personal sign, 4: tron sign, 5: eip-712</span>
      <span class="token property">&quot;owner_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x59724739940777947c56c4f2f2c9211cd5130fef&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;manager_algorithm_id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;manager_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x59724739940777947c56c4f2f2c9211cd5130fef&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="official-indexer-service" tabindex="-1"><a class="header-anchor" href="#official-indexer-service" aria-hidden="true">#</a> Official Indexer Service</h3><p>Considering the stability of the service and the personalized needs of the business, we suggest building you own Indexer service and follow up the official updates of .bit.(Yes! Decentralization!)</p><p>At the same time, however, the .bit team provided a public Indexer with rate-limit for developers to develop and debug.</p><h4 id="full-functional-indexer" tabindex="-1"><a class="header-anchor" href="#full-functional-indexer" aria-hidden="true">#</a> Full Functional Indexer</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://indexer-v1.did.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This service can query all data. However, as always, we still recommend developers building their own Indexer.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://indexer-not-use-in-production-env.did.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This service can query all data, but as its domain name describes, it is not recommended that developers use this Indexer in production (yes! Decentralization!) .</p><h4 id="basic-functional-indexer" tabindex="-1"><a class="header-anchor" href="#basic-functional-indexer" aria-hidden="true">#</a> Basic Functional Indexer</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://indexer-basic.did.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This service can only query basic account data and .bit Alias data. The specific interfaces are as follows:</p><ul><li>das_serverInfo</li><li>das_reverseRecord</li><li>das_accountInfo</li><li>das_accountList</li><li><s>das_accountRecords</s></li></ul><h4 id="rate-limit" tabindex="-1"><a class="header-anchor" href="#rate-limit" aria-hidden="true">#</a> Rate Limit</h4><p>Neither of the two public Indexers is currently rate-limited, so please use them on demand.</p><p>However, if the frequency exceeds the capacity of the service, the caller faces the possibility of blocked by IP.</p><h3 id="unifra-indexer-service" tabindex="-1"><a class="header-anchor" href="#unifra-indexer-service" aria-hidden="true">#</a> Unifra Indexer Service</h3>`,22),x={href:"https://unifra.io/",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"Unifra provides a high-performance and high reliability .bit indexer service for .bit community. If developers don't want to build their owner .bit Indexer, Unifra is your best choice, with which can save you tons of time.",-1),y={href:"https://docs.unifra.io/chain-apis/dotbit-.bit-indexer",target:"_blank",rel:"noopener noreferrer"},I=n("h3",{id:"ckb-node-and-ckb-indexer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ckb-node-and-ckb-indexer","aria-hidden":"true"},"#"),e(" CKB Node and CKB Indexer")],-1),w={href:"https://github.com/nervosnetwork/ckb",target:"_blank",rel:"noopener noreferrer"},B=n("h4",{id:"deploy-process",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#deploy-process","aria-hidden":"true"},"#"),e(" Deploy Process")],-1),C=n("p",null,"For details about the deployment mode, see the CKB official guide:",-1),K={href:"https://docs.nervos.org/docs/basics/guides/mainnet",target:"_blank",rel:"noopener noreferrer"},j=n("br",null,null,-1),N={href:"https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md",target:"_blank",rel:"noopener noreferrer"},R=n("br",null,null,-1),P={href:"https://github.com/nervosnetwork/ckb-indexer",target:"_blank",rel:"noopener noreferrer"},S=n("br",null,null,-1),D={href:"https://github.com/nervosnetwork/ckb-indexer#rpc",target:"_blank",rel:"noopener noreferrer"},T=p(`<h4 id="usage-example-1" tabindex="-1"><a class="header-anchor" href="#usage-example-1" aria-hidden="true">#</a> Usage Example</h4><h5 id="ckb-node" tabindex="-1"><a class="header-anchor" href="#ckb-node" aria-hidden="true">#</a> CKB Node</h5><p><strong>Request</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST https://mainnet.ckb.dev/rpc <span class="token parameter variable">-H</span> <span class="token string">&#39;content-type:application/json&#39;</span> -d<span class="token string">&#39;{&quot;id&quot;:42,&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;method&quot;:&quot;get_tip_header&quot;,&quot;params&quot;:[]}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Response</strong></p><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token punctuation">{</span><span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span><span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;result&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;compact_target&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x190a0088&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;dao&quot;</span><span class="token operator">:</span><span class="token string">&quot;0xac8ffb215ff346419e9af198c38b26000e53d3ad69969403002bdb8b29d71a07&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x41c03f40014bb&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;extra_hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0000000000000000000000000000000000000000000000000000000000000000&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x13251222fc73918701aafc8edbb08057dde7ca95d9709990616fb8802b73af9d&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x990fa3bc251b0000000000086019030c&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;number&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x6a37e1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;parent_hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x4ea3a7a40877471c9a6b98306fbe453007a5306887ff8a05ab5393166f7d0f86&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;proposals_hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x91cea8c15a4b9b0324561f629ff13aff4522f8a925671dfb8650256f7e68692d&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x180509c0e87&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;transactions_root&quot;</span><span class="token operator">:</span><span class="token string">&quot;0xf908c0afd0650812557edf3c346ad0f5ae9a44c24cc6cd58db4e6171631f7bbb&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">42</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="ckb-indexer" tabindex="-1"><a class="header-anchor" href="#ckb-indexer" aria-hidden="true">#</a> CKB Indexer</h5><p><strong>Request</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST https://mainnet.ckb.dev/indexer <span class="token number">7</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;content-type:application/json&#39;</span> -d<span class="token string">&#39;{&quot;id&quot;:42,&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;method&quot;:&quot;get_tip&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Response</strong></p><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token punctuation">{</span><span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span><span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;result&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;block_hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0xc1d86e3986679d32090240f3e6abb641fe9d898976f8adb204b77d34ce11f3ec&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;block_number&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x6a37db&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">42</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="community-node" tabindex="-1"><a class="header-anchor" href="#community-node" aria-hidden="true">#</a> Community Node</h4><p>If you do not want to deploy your own CKB nodes or your application are in the testing stage, you can use the public nodes provided by the community (not recommended for long-term use) :</p>`,13),E={href:"https://talk.nervos.org/t/free-node-rpc-and-indexer-rpc-for-ckb-developers/4948",target:"_blank",rel:"noopener noreferrer"},H=n("h4",{id:"next-step",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#next-step","aria-hidden":"true"},"#"),e(" Next Step")],-1);function O(U,A){const a=r("ExternalLinkIcon"),t=r("RouterLink");return c(),l("div",null,[u,n("h2",h,[b,e(),n("a",k,[e("das-account-indexer"),s(a)])]),n("p",null,[e("If developer need to integrate .bit in backend, then "),n("a",f,[e("das-account-indexer"),s(a)]),e(" will be your best choice.")]),q,n("blockquote",null,[n("p",null,[e("In the meantime, it is the backend service "),s(t,{to:"/developers/integration-frontend.html#das-sdk-js"},{default:o(()=>[e("das-sdk-js")]),_:1}),e(" needed.")])]),m,n("blockquote",null,[n("p",null,[n("a",v,[e("das-account-indexer API Document"),s(a)])])]),g,n("p",null,[n("a",x,[e("Unifra"),s(a)]),e(" is a professional Web3 Infrastructure Service Provider.")]),_,n("p",null,[n("a",y,[e("Unifra .bit Indexer docs"),s(a)])]),I,n("p",null,[e("The data of .bit is stored on "),n("a",w,[e("Nervos CKB"),s(a)]),e(" chain, so deploying your own .bit Indexer needs a corresponding CKB node and CKB Indexer.")]),B,C,n("blockquote",null,[n("p",null,[n("a",K,[e("CKB Node Deployment Guide"),s(a)]),j,n("a",N,[e("CKB Node JSON-RPC Protocol"),s(a)]),R,n("a",P,[e("CKB Indexer Deployment Guide"),s(a)]),S,n("a",D,[e("CKB Indexer JSON-RPC Protocol"),s(a)])])]),T,n("blockquote",null,[n("p",null,[n("a",E,[e("Free CKB Node"),s(a)])])]),H,n("ul",null,[n("li",null,[e("If you need to integrate .bit in frontend\uFF0Cplease read "),s(t,{to:"/developers/integration-frontend.html"},{default:o(()=>[e("Frontend Integration")]),_:1})]),n("li",null,[e("If you want to some design guide\uFF0Cplease check "),s(t,{to:"/developers/design-guide.html"},{default:o(()=>[e("Design Guide")]),_:1})])])])}var L=i(d,[["render",O],["__file","integration-backend.html.vue"]]);export{L as default};