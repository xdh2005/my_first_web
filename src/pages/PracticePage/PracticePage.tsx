import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, CircleDashed, Lightbulb, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MOCK_QUESTIONS, type QuestionCategory } from '@/data/questions';

const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  'short-answer-2025': '2025春 简答题',
  'essay-2025': '2025春 论述题',
  'material-2025': '2025春 材料题',
  'short-answer-2024': '2024春 简答题',
  'essay-2024': '2024春 论述题',
  'material-2024': '2024春 材料题',
};

export default function PracticePage() {
  const [activeCategory, setActiveCategory] = useState<QuestionCategory>('short-answer-2025');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [selectedMode, setSelectedMode] = useState<'sequential' | 'random'>('sequential');

  const currentQuestions = useMemo(() => {
    let list = MOCK_QUESTIONS.filter((q) => q.category === activeCategory);
    if (selectedMode === 'random') {
      list = [...list].sort(() => Math.random() - 0.5);
    }
    return list;
  }, [activeCategory, selectedMode]);

  const currentQuestion = currentQuestions[currentIndex];
  const progress = currentQuestions.length > 0 ? ((currentIndex + 1) / currentQuestions.length) * 100 : 0;
  const answeredCount = Array.from(answeredQuestions).filter(id => 
    currentQuestions.some(q => q.id === id)
  ).length;

  const handleNext = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  const handleToggleAnswer = () => {
    if (!showAnswer && currentQuestion) {
      setAnsweredQuestions(prev => new Set([...prev, currentQuestion.id]));
    }
    setShowAnswer(!showAnswer);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setAnsweredQuestions(new Set());
  };

  const handleCategoryChange = (category: QuestionCategory) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📭</div>
          <div className="text-xl font-bold text-gray-700">暂无题目</div>
          <div className="text-gray-500 mt-2">请选择其他分类</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/4 size-[28rem] rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📝</span>
            <h1 className="text-2xl font-bold text-gray-800">在线答题练习</h1>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleReset}
            className="gap-1.5"
          >
            <RotateCcw className="size-3.5" />
            重新开始
          </Button>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-border/50 p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <Tabs
              value={activeCategory}
              onValueChange={(v) => handleCategoryChange(v as QuestionCategory)}
              className="flex-1"
            >
              <TabsList className="grid grid-cols-3 md:grid-cols-6">
                {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="text-xs md:text-sm"
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">模式:</span>
              <Button
                variant={selectedMode === 'sequential' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedMode('sequential')}
                className="text-xs"
              >
                顺序
              </Button>
              <Button
                variant={selectedMode === 'random' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedMode('random')}
                className="text-xs"
              >
                随机
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>第 {currentIndex + 1} / {currentQuestions.length} 题</span>
            <span>已答: {answeredCount} / {currentQuestions.length}</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-200" />
        </div>

        <Card className="bg-white/80 backdrop-blur-xl border-border/50 shadow-lg">
          <CardHeader className="border-b border-border/30">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                {currentQuestion.questionType}
              </span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                {currentQuestion.year}
              </span>
            </div>
            <CardTitle className="text-lg md:text-xl text-gray-800 leading-relaxed">
              {currentQuestion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="bg-amber-50/60 rounded-xl p-4 border-l-4 border-amber-400">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">答题提示</span>
                </div>
                <p className="text-sm text-amber-700">
                  先尝试回忆答案，点击下方按钮查看参考答案。重复练习有助于加深记忆！
                </p>
              </div>

              {showAnswer && (
                <div className="bg-green-50/60 rounded-xl p-5 border-l-4 border-green-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    参考答案
                  </div>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">
                    {currentQuestion.answer}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  上一题
                </Button>

                <Button
                  variant={showAnswer ? 'outline' : 'default'}
                  onClick={handleToggleAnswer}
                  className="gap-2"
                >
                  {showAnswer ? (
                    <>
                      <CircleDashed className="w-4 h-4" />
                      隐藏答案
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      查看答案
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleNext}
                  disabled={currentIndex === currentQuestions.length - 1}
                  className="gap-2"
                >
                  下一题
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {currentQuestions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => {
                setCurrentIndex(i);
                setShowAnswer(false);
              }}
              className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
                i === currentIndex
                  ? 'bg-primary text-white shadow-lg'
                  : answeredQuestions.has(q.id)
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500">
          💡 建议：先自行回忆答案，再对照参考答案检查，效果更好！
        </footer>
      </main>
    </div>
  );
}