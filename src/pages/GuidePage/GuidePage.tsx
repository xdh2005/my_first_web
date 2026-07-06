import { BookOpen, Sparkles, Zap, PenTool } from 'lucide-react';

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 size-96 rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute right-0 top-1/4 size-[28rem] rounded-full bg-teal-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            📘 四级复习·轻松指南
          </h1>
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium">
            核心词汇 + 万能开头 + 真题活用 · 简单好记 考前冲刺
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-emerald-100/50 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-emerald-50/80 px-5 py-4 border-l-4 border-emerald-500 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              <h2 className="text-lg font-bold text-emerald-800">核心词汇 · 宏观背景</h2>
            </div>
            <div className="p-5">
              <div className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                <span>⚠️</span> 功能短语
              </div>
              <ul className="space-y-3 mb-4">
                <li className="border-b border-emerald-100 pb-2">
                  <div className="font-semibold text-emerald-700">…… is detrimental to ……</div>
                  <div className="text-sm text-emerald-600 ml-3 border-l-2 border-emerald-200 pl-2">对……有害</div>
                </li>
                <li className="border-b border-emerald-100 pb-2">
                  <div className="font-semibold text-emerald-700">…… can exert an adverse influence on ……</div>
                  <div className="text-sm text-emerald-600 ml-3 border-l-2 border-emerald-200 pl-2">对……产生不利影响</div>
                </li>
              </ul>

              <div className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                <span>🌿</span> 微观高频短语 (必背8条)
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-emerald-50/50 rounded-xl p-2.5 text-sm">
                  <strong className="text-emerald-700">widen social circle</strong><br />拓展社交圈
                </div>
                <div className="bg-emerald-50/50 rounded-xl p-2.5 text-sm">
                  <strong className="text-emerald-700">improve interpersonal skills</strong><br />提高人际交往能力
                </div>
                <div className="bg-emerald-50/50 rounded-xl p-2.5 text-sm">
                  <strong className="text-emerald-700">improve academic performance</strong><br />提高学业表现
                </div>
                <div className="bg-emerald-50/50 rounded-xl p-2.5 text-sm">
                  <strong className="text-emerald-700">career success/development</strong><br />职业成功/发展
                </div>
                <div className="bg-emerald-50/50 rounded-xl p-2.5 text-sm">
                  <strong className="text-emerald-700">broaden horizons / expand knowledge</strong><br />开拓视野/拓展知识
                </div>
                <div className="bg-emerald-50/50 rounded-xl p-2.5 text-sm">
                  <strong className="text-emerald-700">improve critical thinking</strong><br />提高批判性思维
                </div>
                <div className="bg-emerald-50/50 rounded-xl p-2.5 text-sm">
                  <strong className="text-emerald-700">improve competitiveness & adaptability</strong><br />提高竞争力和适应力
                </div>
                <div className="bg-emerald-50/50 rounded-xl p-2.5 text-sm">
                  <strong className="text-emerald-700">boost physical health & mental well-being</strong><br />促进身心健康
                </div>
              </div>

              <hr className="my-4 border-emerald-100" />
              
              <div className="font-semibold text-emerald-700 mb-2">🌍 宏观必备表达</div>
              <div className="bg-emerald-50/80 rounded-xl p-3 text-sm border-l-4 border-emerald-400">
                the sustainable development of ______ <span className="text-emerald-700">(……的可持续发展)</span><br />
                例句：the sustainable development of economy / society / environment
              </div>

              <div className="mt-3 bg-emerald-50/60 rounded-xl p-3 text-sm text-emerald-700">
                💡 简单用法：写作文时先说"某事很重要"，再用"微观短语"说明好处，逻辑清晰分不低。
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-emerald-100/50 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-emerald-50/80 px-5 py-4 border-l-4 border-emerald-500 flex items-center gap-3">
              <PenTool className="w-6 h-6 text-emerald-600" />
              <h2 className="text-lg font-bold text-emerald-800">开头段公式 · 真题示范</h2>
            </div>
            <div className="p-5">
              <div className="font-semibold text-emerald-700 mb-2">🎯 万能开头模板（中英对照）</div>
              <div className="bg-amber-50/80 rounded-xl p-4 mb-4 border-l-4 border-amber-400">
                <div className="font-semibold mb-2">💬 中文思路：</div>
                <div className="text-sm">
                  众所周知我们生活在这样一个时代：<strong>科技/经济/社会/教育/文化</strong>正快速发展并改变我们生活的方方面面。与此同时，（公众）对______也有广泛的讨论。在我看来，______。
                </div>
                <hr className="my-3 border-amber-200" />
                <div className="font-semibold mb-2">📖 英文模板：</div>
                <div className="bg-amber-100/50 rounded-lg p-3 text-sm font-mono">
                  It is commonly known that we are living in an age where <strong>[technology/society/education]</strong> is developing at a rapid rate and changing every aspect of our life. At the same time, there is widespread discussion about <strong>______</strong>. From my point of view, <strong>______</strong>.
                </div>
              </div>

              <div className="font-semibold text-emerald-700 mb-2">📌 真题演练 · 社区服务 (2023.6 卷一)</div>
              <div className="bg-emerald-50/50 rounded-lg p-3 text-sm font-mono mb-3">
                <strong>题目：</strong> college students doing community service ( benefits & service you can provide )<br /><br />
                <strong>✨ 参考开头（简单高分版）：</strong><br />
                It is commonly known that we are living in an age where society is developing at a rapid rate and changing every aspect of our life. At the same time, there is widespread discussion about college students doing community service. From my point of view, we should place a high value on community service and seek effective methods to make contributions to the community.
              </div>

              <div className="bg-amber-50/60 rounded-xl p-3 text-sm text-amber-800">
                🔥 重点掌握：<strong>place a high value on</strong> (高度重视) ，<strong>make contributions to</strong> (为…做贡献)， <strong>seek effective methods</strong> (寻求有效方法) — 考场直接套用！
              </div>

              <hr className="my-4 border-emerald-100" />
              
              <div className="font-semibold text-emerald-700 mb-2">🎁 补充：主题词完整立场句</div>
              <div className="text-sm">
                根据开头模板，直接给出立场：<br />
                "From my perspective, the advantages far outweigh the disadvantages." <br />
                "I firmly believe that we should encourage this trend."
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-emerald-100/50 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-emerald-50/80 px-5 py-4 border-l-4 border-emerald-500 flex items-center gap-3">
              <Zap className="w-6 h-6 text-emerald-600" />
              <h2 className="text-lg font-bold text-emerald-800">万能词句 · 高分简单</h2>
            </div>
            <div className="p-5">
              <div className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                <span>🚀</span> 简单替换（告别小学词汇）
              </div>
              <ul className="space-y-2 mb-4">
                <li className="border-b border-emerald-100 pb-2">
                  <span className="font-semibold text-emerald-700">important → crucial / significant</span>
                  <div className="text-sm text-emerald-600 ml-3 border-l-2 border-emerald-200 pl-2">重要的 → 关键的 / 意义重大的</div>
                </li>
                <li className="border-b border-emerald-100 pb-2">
                  <span className="font-semibold text-emerald-700">many → numerous / a great deal of</span>
                  <div className="text-sm text-emerald-600 ml-3 border-l-2 border-emerald-200 pl-2">许多 → 大量的</div>
                </li>
                <li className="border-b border-emerald-100 pb-2">
                  <span className="font-semibold text-emerald-700">I think → I believe that / from my perspective</span>
                  <div className="text-sm text-emerald-600 ml-3 border-l-2 border-emerald-200 pl-2">我认为 → 我相信 / 从我的角度看</div>
                </li>
                <li className="border-b border-emerald-100 pb-2">
                  <span className="font-semibold text-emerald-700">very → extremely / highly</span>
                  <div className="text-sm text-emerald-600 ml-3 border-l-2 border-emerald-200 pl-2">非常 → 极其 / 高度地</div>
                </li>
                <li className="border-b border-emerald-100 pb-2">
                  <span className="font-semibold text-emerald-700">cause → lead to / give rise to</span>
                  <div className="text-sm text-emerald-600 ml-3 border-l-2 border-emerald-200 pl-2">导致 → 引起 / 促成</div>
                </li>
              </ul>

              <div className="font-semibold text-emerald-700 mb-2">📌 万能逻辑连词 (让作文流畅)</div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-emerald-50/50 rounded-lg p-2 text-center text-sm">
                  Furthermore / Moreover<br /><span className="text-xs text-emerald-600">而且，此外</span>
                </div>
                <div className="bg-emerald-50/50 rounded-lg p-2 text-center text-sm">
                  However / Nevertheless<br /><span className="text-xs text-emerald-600">然而</span>
                </div>
                <div className="bg-emerald-50/50 rounded-lg p-2 text-center text-sm">
                  Consequently / Therefore<br /><span className="text-xs text-emerald-600">因此</span>
                </div>
                <div className="bg-emerald-50/50 rounded-lg p-2 text-center text-sm">
                  In contrast / On the contrary<br /><span className="text-xs text-emerald-600">相反</span>
                </div>
              </div>

              <div className="font-semibold text-emerald-700 mb-2">💎 三句谚语 (点睛加印象分)</div>
              <ul className="space-y-2 mb-3">
                <li>
                  <div className="font-semibold text-emerald-700">Actions speak louder than words.</div>
                  <div className="text-sm text-emerald-600 ml-3 border-l-2 border-emerald-200 pl-2">行动胜于空谈</div>
                </li>
                <li>
                  <div className="font-semibold text-emerald-700">Every cloud has a silver lining.</div>
                  <div className="text-sm text-emerald-600 ml-3 border-l-2 border-emerald-200 pl-2">黑暗中总有一线光明</div>
                </li>
                <li>
                  <div className="font-semibold text-emerald-700">Where there is a will, there is a way.</div>
                  <div className="text-sm text-emerald-600 ml-3 border-l-2 border-emerald-200 pl-2">有志者事竟成</div>
                </li>
              </ul>

              <div className="bg-amber-50/60 rounded-xl p-3 text-sm text-amber-800">
                📢 简单加分法：作文结尾用一句谚语，立刻显得地道！例如："As the saying goes, actions speak louder than words."
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-emerald-100/50 p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📌</span>
              <h3 className="text-xl font-bold text-emerald-800">简单写作扩充 · 五步结构法</h3>
            </div>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">小白也能用</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-emerald-50/50 rounded-xl p-4">
              <div className="font-bold text-emerald-800">1️⃣ 引入背景</div>
              <div className="text-sm text-emerald-700">套用开头段模板 (时代背景+话题)</div>
            </div>
            <div className="bg-emerald-50/50 rounded-xl p-4">
              <div className="font-bold text-emerald-800">2️⃣ 亮明观点</div>
              <div className="text-sm text-emerald-700">From my perspective, ... / I strongly believe that...</div>
            </div>
            <div className="bg-emerald-50/50 rounded-xl p-4">
              <div className="font-bold text-emerald-800">3️⃣ 分点论证</div>
              <div className="text-sm text-emerald-700">First, ... (微观短语) ; Second, ... (因果衔接)</div>
            </div>
            <div className="bg-emerald-50/50 rounded-xl p-4">
              <div className="font-bold text-emerald-800">4️⃣ 举例/反推</div>
              <div className="text-sm text-emerald-700">For example, ... / It can be seen that ...</div>
            </div>
            <div className="bg-emerald-50/50 rounded-xl p-4">
              <div className="font-bold text-emerald-800">5️⃣ 总结建议</div>
              <div className="text-sm text-emerald-700">To sum up, we should take effective measures...</div>
            </div>
          </div>
          <hr className="my-4 border-emerald-100" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="font-semibold text-emerald-700 text-sm mb-1">🎯 引出原因的万能句</div>
              <div className="text-sm">Several factors account for this phenomenon. <br /> The reasons are as follows.</div>
            </div>
            <div>
              <div className="font-semibold text-emerald-700 text-sm mb-1">📢 举例简单表达</div>
              <div className="text-sm">A typical example is ... <br /> Take ... as an illustration.</div>
            </div>
            <div>
              <div className="font-semibold text-emerald-700 text-sm mb-1">💡 让步与对比</div>
              <div className="text-sm">Although some people argue that ..., I believe that ...</div>
            </div>
          </div>
          <div className="mt-4 bg-emerald-50/60 rounded-xl p-3 text-sm text-emerald-800">
            💪 简单建议：考前熟记开头模板 (It is commonly known that...) + 微观8个短语 + 有害表达。写作往里面套，轻松过425！
          </div>
        </div>

        <div className="bg-amber-50/80 backdrop-blur-xl rounded-2xl border border-amber-200/50 p-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📝</span>
            <div>
              <div className="font-bold text-amber-800">真题拓展 · 社区服务 简单论点与表达</div>
              <div className="text-sm text-amber-600">（根据2023.6真题补充 benefit + 你能提供的服务）</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-amber-50/50 rounded-xl p-3">
              <strong className="text-amber-800">Benefits:</strong><br />
              • broaden horizons<br />
              • improve interpersonal skills<br />
              • boost sense of responsibility
            </div>
            <div className="bg-amber-50/50 rounded-xl p-3">
              <strong className="text-amber-800">Service I can provide:</strong><br />
              • teach the elderly digital skills<br />
              • clean up the neighborhood<br />
              • tutor children from low-income families
            </div>
          </div>
          <div className="mt-3 bg-amber-100/50 rounded-lg p-3 text-sm font-mono">
            💬 简单段落：Doing community service can not only improve our interpersonal skills but also broaden horizons. As for me, I can provide volunteer teaching for kids and help the elderly use smart phones.
          </div>
        </div>

        <footer className="mt-8 text-center text-sm text-emerald-600 pt-4 border-t border-emerald-100">
          🌟 四级复习 · 简单高效 | 每天早起读一遍核心短语和开头模板，考场不慌！<br />
          ✅ 本指南涵盖「宏观背景·微观短语·有害表达·开头公式·真题演示·万能词句」—— 背完冲刺更高分
        </footer>
      </main>
    </div>
  );
}