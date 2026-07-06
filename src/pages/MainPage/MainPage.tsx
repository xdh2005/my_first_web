import { BookOpen, PenTool, Sparkles, Target } from 'lucide-react';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 size-96 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute right-0 top-1/4 size-[28rem] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-teal-200/30 blur-3xl" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium mb-3">📖 冲刺CET-4 · 高分必看</span>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">📌 四级复习指南</h1>
          <p className="bg-amber-50/60 px-6 py-3 rounded-full text-amber-800 inline-block">高频词块 · 作文框架 · 万能亮点表达，考前速记这一篇就够了</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-100/50 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="px-5 py-4 border-b border-blue-100 flex items-center gap-3">
              <span className="text-2xl">✨📘</span>
              <h2 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">常见词句</h2>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                <li className="border-b border-blue-100 pb-2">
                  <div className="font-semibold text-teal-700 flex items-center gap-2">
                    <strong>play an indispensable role in</strong>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">高分短语</span>
                  </div>
                  <div className="text-sm text-gray-600 ml-3 border-l-3 border-teal-300 pl-2">在…中扮演不可或缺的角色</div>
                </li>
                <li className="border-b border-blue-100 pb-2">
                  <div className="font-semibold text-teal-700"><strong>bridge the gap between</strong></div>
                  <div className="text-sm text-gray-600 ml-3 border-l-3 border-teal-300 pl-2">缩小/弥合…之间的差距</div>
                </li>
                <li className="border-b border-blue-100 pb-2">
                  <div className="font-semibold text-teal-700"><strong>raise public awareness of</strong></div>
                  <div className="text-sm text-gray-600 ml-3 border-l-3 border-teal-300 pl-2">提高公众对…的意识</div>
                </li>
                <li className="border-b border-blue-100 pb-2">
                  <div className="font-semibold text-teal-700"><strong>spare no effort to do</strong></div>
                  <div className="text-sm text-gray-600 ml-3 border-l-3 border-teal-300 pl-2">不遗余力做某事</div>
                </li>
                <li className="border-b border-blue-100 pb-2">
                  <div className="font-semibold text-teal-700"><strong>be conducive to</strong></div>
                  <div className="text-sm text-gray-600 ml-3 border-l-3 border-teal-300 pl-2">有助于，有利于</div>
                </li>
                <li className="border-b border-blue-100 pb-2">
                  <div className="font-semibold text-teal-700"><strong>give priority to</strong></div>
                  <div className="text-sm text-gray-600 ml-3 border-l-3 border-teal-300 pl-2">优先考虑</div>
                </li>
                <li className="border-b border-blue-100 pb-2">
                  <div className="font-semibold text-teal-700"><strong>broaden one's horizons</strong></div>
                  <div className="text-sm text-gray-600 ml-3 border-l-3 border-teal-300 pl-2">开阔眼界</div>
                </li>
                <li className="border-b border-blue-100 pb-2">
                  <div className="font-semibold text-teal-700"><strong>from a broader perspective</strong></div>
                  <div className="text-sm text-gray-600 ml-3 border-l-3 border-teal-300 pl-2">从更广阔的角度来看</div>
                </li>
                <li className="border-b border-blue-100 pb-2">
                  <div className="font-semibold text-teal-700"><strong>have a profound impact on</strong></div>
                  <div className="text-sm text-gray-600 ml-3 border-l-3 border-teal-300 pl-2">对…产生深远影响</div>
                </li>
                <li>
                  <div className="font-semibold text-teal-700"><strong>embrace the digital era</strong></div>
                  <div className="text-sm text-gray-600 ml-3 border-l-3 border-teal-300 pl-2">拥抱数字时代</div>
                </li>
              </ul>
              <div className="mt-4 bg-amber-50/60 rounded-xl p-3 text-sm text-amber-800 border-l-4 border-amber-400">
                💡 小贴士：写作和翻译中优先使用这些地道短语，替换简单表达，立刻提升档次。
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-100/50 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="px-5 py-4 border-b border-blue-100 flex items-center gap-3">
              <span className="text-2xl">📝✍️</span>
              <h2 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">作文必备</h2>
            </div>
            <div className="p-5">
              <div className="mb-4">
                <div className="font-bold text-teal-700 mb-2 flex items-center gap-2">
                  <span>🌟</span> 开头句型
                </div>
                <ul className="space-y-2">
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700">With the rapid development of..., ... has become a hotly debated issue.</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">随着…的快速发展，…已成为热议话题。</div>
                  </li>
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700">There is a growing awareness that...</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">人们逐渐意识到…</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-700">When it comes to ..., opinions vary from person to person.</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">当谈及…时，不同的人观点各异。</div>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="font-bold text-teal-700 mb-2 flex items-center gap-2">
                  <span>🔗</span> 过渡 & 衔接
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-blue-50/50 rounded-lg p-2 text-center text-sm font-semibold text-teal-700">Furthermore / Moreover</div>
                  <div className="bg-blue-50/50 rounded-lg p-2 text-center text-sm font-semibold text-teal-700">However / Nevertheless</div>
                  <div className="bg-blue-50/50 rounded-lg p-2 text-center text-sm font-semibold text-teal-700">Consequently / Hence</div>
                  <div className="bg-blue-50/50 rounded-lg p-2 text-center text-sm font-semibold text-teal-700">In contrast / On the contrary</div>
                </div>
                <ul className="space-y-2">
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700">Another contributing factor is that...</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">另一个起作用的因素是…</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-700">It is worth noting that...</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">值得注意的是…</div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-teal-700 mb-2 flex items-center gap-2">
                  <span>🏁</span> 结尾金句
                </div>
                <ul className="space-y-2">
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700">Taking all these factors into account, we may safely draw the conclusion that...</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">综合考虑所有因素，我们可以得出结论…</div>
                  </li>
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700">Only by taking effective measures can we expect a brighter future.</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">只有采取有效措施，我们才能期待更光明的未来。</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-700">It is high time that we placed great emphasis on...</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">我们早就该把重点放在…上了。</div>
                  </li>
                </ul>
              </div>

              <div className="mt-4 bg-amber-50/60 rounded-xl p-3 text-sm text-amber-800 border-l-4 border-amber-400">
                📌 背熟3个开头+3个结尾模板，考试直接套用，大幅节省时间。
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-100/50 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="px-5 py-4 border-b border-blue-100 flex items-center gap-3">
              <span className="text-2xl">⚡🌟</span>
              <h2 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">万能词句</h2>
            </div>
            <div className="p-5">
              <div className="mb-4">
                <div className="font-bold text-teal-700 mb-2 flex items-center gap-2">
                  <span>🚀</span> 高级词汇替换（拒绝平庸）
                </div>
                <ul className="space-y-2">
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700"><strong>important → crucial / vital / paramount</strong></div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">重要的 → 关键的 / 至关重要的 / 首要的</div>
                  </li>
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700"><strong>many → a multitude of / numerous / countless</strong></div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">许多 → 大量的 / 无数的</div>
                  </li>
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700"><strong>I think → I harbor the belief that / I am convinced that</strong></div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">我认为 → 我坚信 / 我深信</div>
                  </li>
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700"><strong>very → extremely / remarkably / exceedingly</strong></div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">非常 → 极其 / 非凡地</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-700"><strong>cause → give rise to / lead to / contribute to</strong></div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">导致 → 引起 / 促成</div>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="font-bold text-teal-700 mb-2 flex items-center gap-2">
                  <span>✨</span> 万能黄金句型（写作必备）
                </div>
                <ul className="space-y-2">
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700"><strong>It is universally acknowledged that...</strong></div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">众所周知，… (提观点超稳)</div>
                  </li>
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700"><strong>There is no denying that...</strong></div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">不可否认…</div>
                  </li>
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700"><strong>Nothing is more significant than to...</strong></div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">没有什么比…更重要的了。</div>
                  </li>
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700"><strong>By doing ..., we can not only ... but also ...</strong></div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">通过…，我们不仅能…而且能…</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-700"><strong>It goes without saying that ...</strong></div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">不言而喻，…</div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-teal-700 mb-2 flex items-center gap-2">
                  <span>📜</span> 谚语 & 点睛之笔
                </div>
                <ul className="space-y-2">
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700">Actions speak louder than words.</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">事实胜于雄辩</div>
                  </li>
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700">Every cloud has a silver lining.</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">黑暗中总有一线光明</div>
                  </li>
                  <li className="border-b border-blue-100 pb-2">
                    <div className="text-sm text-gray-700">Where there is a will, there is a way.</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">有志者事竟成</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-700">Rome was not built in a day.</div>
                    <div className="text-xs text-gray-500 ml-3 border-l-2 border-teal-200 pl-2">罗马不是一天建成的 (持之以恒)</div>
                  </li>
                </ul>
              </div>

              <hr className="my-3 border-blue-100" />
              <div className="bg-amber-50/60 rounded-xl p-3 text-sm text-amber-800 border-l-4 border-amber-400">
                🧠 小策略：将万能词句中的2~3个高分替换+1句谚语融入作文，阅卷老师眼前一亮！
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50/60 backdrop-blur-xl rounded-2xl border border-amber-200/50 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-bold text-teal-800">写作急救 · 万能逻辑链</h3>
            </div>
            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">考前速记</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 rounded-xl p-4">
              <div className="font-bold text-teal-800">📌 观点引入</div>
              <div className="text-sm text-gray-700 mt-1">"I firmly believe that ... / From my perspective, ..."</div>
            </div>
            <div className="bg-white/60 rounded-xl p-4">
              <div className="font-bold text-teal-800">📌 举例论证</div>
              <div className="text-sm text-gray-700 mt-1">"A typical example is ... / Take ... as an illustration."</div>
            </div>
            <div className="bg-white/60 rounded-xl p-4">
              <div className="font-bold text-teal-800">📌 对比&让步</div>
              <div className="text-sm text-gray-700 mt-1">"Although some people argue that ..., I would contend that ..."</div>
            </div>
            <div className="bg-white/60 rounded-xl p-4">
              <div className="font-bold text-teal-800">📌 建议呼吁</div>
              <div className="text-sm text-gray-700 mt-1">"It is advisable to ... / Joint efforts are needed to ..."</div>
            </div>
          </div>
          <div className="mt-4 bg-teal-50/60 rounded-xl p-3 text-sm text-teal-800">
            💬 推荐万能句式组合：开头(背景)+观点 + 过渡(However) + 举例 + 因果+ 总结建议 = 结构完整不跑题
          </div>
        </div>

        <footer className="mt-8 text-center text-sm text-teal-600 pt-4 border-t border-teal-100">
          🌟 CET-4 高效复习指南 | 每天晨读/晚背 15分钟，词汇+句型双突破 <br />
          ✨ 考场上注意卷面，灵活运用万能句 + 高级替换，助你稳稳过级！
        </footer>
      </main>
    </div>
  );
}