import { useState, useEffect, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import ProgressHeader from '@/components/ProgressHeader';
import QuestionCard from '@/components/QuestionCard';
import { MOCK_QUESTIONS, type QuestionCategory } from '@/data/questions';
import { Search, RotateCcw, Filter, CheckCircle2, CircleDashed } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  'short-answer-2025': '2025春 简答题',
  'essay-2025': '2025春 论述题',
  'material-2025': '2025春 材料题',
  'short-answer-2024': '2024春 简答题',
  'essay-2024': '2024春 论述题',
  'material-2024': '2024春 材料题',
};

const STORAGE_KEY = 'xi-thought-review-mastered';

export default function ReviewPage() {
  const { activeCategory, setActiveCategory } = useOutletContext<{
    activeCategory: QuestionCategory;
    setActiveCategory: (cat: QuestionCategory) => void;
  }>();
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [keyword, setKeyword] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'mastered' | 'unmastered'>('all');

  // 从本地存储加载已掌握题目
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const ids = JSON.parse(saved) as string[];
        setMasteredIds(new Set(ids));
      }
    } catch {
      // ignore
    }
  }, []);

  // 保存到本地存储
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...masteredIds]));
    } catch {
      // ignore
    }
  }, [masteredIds]);

  // 切换掌握状态
  const toggleMastered = (id: string) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast.info('已取消掌握标记');
      } else {
        next.add(id);
        toast.success('太棒了！已标记为掌握');
      }
      return next;
    });
  };

  // 重置当前分类进度
  const resetCategory = () => {
    const categoryQuestions = MOCK_QUESTIONS.filter((q) => q.category === activeCategory);
    setMasteredIds((prev) => {
      const next = new Set(prev);
      categoryQuestions.forEach((q) => next.delete(q.id));
      return next;
    });
    toast.info('已重置当前分类进度');
  };

  // 各分类统计
  const categoryStats = useMemo(() => {
    const stats = {} as Record<QuestionCategory, { total: number; mastered: number }>;
    const categories: QuestionCategory[] = [
      'short-answer-2025',
      'essay-2025',
      'material-2025',
      'short-answer-2024',
      'essay-2024',
      'material-2024',
    ];
    categories.forEach((cat) => {
      const questions = MOCK_QUESTIONS.filter((q) => q.category === cat);
      const mastered = questions.filter((q) => masteredIds.has(q.id)).length;
      stats[cat] = { total: questions.length, mastered };
    });
    return stats;
  }, [masteredIds]);

  // 总进度
  const totalMastered = masteredIds.size;
  const totalQuestions = MOCK_QUESTIONS.length;

  // 当前分类题目
  const currentQuestions = useMemo(() => {
    let list = MOCK_QUESTIONS.filter((q) => q.category === activeCategory);
    if (filterMode === 'mastered') {
      list = list.filter((q) => masteredIds.has(q.id));
    } else if (filterMode === 'unmastered') {
      list = list.filter((q) => !masteredIds.has(q.id));
    }
    if (keyword.trim()) {
      const kw = keyword.trim().toLowerCase();
      list = list.filter(
        (q) =>
          q.title.toLowerCase().includes(kw) || q.answer.toLowerCase().includes(kw)
      );
    }
    return list;
  }, [activeCategory, filterMode, keyword, masteredIds]);

  const categoryTotal = categoryStats[activeCategory]?.total ?? 0;
  const categoryMastered = categoryStats[activeCategory]?.mastered ?? 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      {/* 装饰性渐变光晕 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/4 size-[28rem] rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      {/* 顶部栏 */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border/30 bg-white/60 px-4 backdrop-blur-xl md:px-6">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-bold text-foreground truncate">
            {CATEGORY_LABELS[activeCategory]}
          </h1>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={resetCategory}
          className="gap-1.5 border-border/60 text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="size-3.5" />
          重置进度
        </Button>
      </header>

      {/* 主内容区 */}
      <main className="flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* 进度头 */}
          <ProgressHeader
            totalMastered={totalMastered}
            totalQuestions={totalQuestions}
            categoryMastered={categoryMastered}
            categoryTotal={categoryTotal}
            categoryLabel={CATEGORY_LABELS[activeCategory]}
          />

          {/* 搜索与筛选 */}
          <div className="rounded-2xl border border-border/50 bg-white/60 p-4 backdrop-blur-xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="搜索题目关键词..."
                  className="pl-9 bg-background/60 border-border/50 focus-visible:ring-primary/30"
                />
              </div>
              <Tabs
                value={filterMode}
                onValueChange={(v) => setFilterMode(v as typeof filterMode)}
                className="w-full md:w-auto"
              >
                <TabsList className="grid w-full grid-cols-3 md:w-[280px]">
                  <TabsTrigger value="all" className="gap-1.5">
                    <Filter className="size-3.5" />
                    全部
                  </TabsTrigger>
                  <TabsTrigger value="unmastered" className="gap-1.5">
                    <CircleDashed className="size-3.5" />
                    未掌握
                  </TabsTrigger>
                  <TabsTrigger value="mastered" className="gap-1.5">
                    <CheckCircle2 className="size-3.5" />
                    已掌握
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* 题目列表 */}
          <div className="space-y-4">
            {currentQuestions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border/60 bg-white/40 p-12 text-center backdrop-blur-xl">
                <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-2xl bg-muted/60">
                  <Search className="size-6 text-muted-foreground" />
                </div>
                <div className="text-base font-medium text-foreground">暂无匹配题目</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  试试调整筛选条件或搜索关键词
                </div>
              </div>
            ) : (
              currentQuestions.map((q, i) => (
                <QuestionCard
                  key={q.id}
                  question={{ ...q, mastered: masteredIds.has(q.id) }}
                  index={i}
                  onToggleMastered={toggleMastered}
                />
              ))
            )}
          </div>

          {/* 底部提示 */}
          <div className="pt-4 text-center text-xs text-muted-foreground">
            共 {currentQuestions.length} 道题目 · 学习进度自动保存到本地
          </div>
        </div>
      </main>
    </div>
  );
}
