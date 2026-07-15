import { useState, useEffect } from 'react';
import { Trophy, Target, Flame, BookCheck, TrendingUp, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ProgressHeaderProps {
  totalMastered: number;
  totalQuestions: number;
  categoryMastered: number;
  categoryTotal: number;
  categoryLabel: string;
}

export default function ProgressHeader({
  totalMastered,
  totalQuestions,
  categoryMastered,
  categoryTotal,
  categoryLabel,
}: ProgressHeaderProps) {
  const totalPercent = totalQuestions > 0 ? Math.round((totalMastered / totalQuestions) * 100) : 0;
  const categoryPercent = categoryTotal > 0 ? Math.round((categoryMastered / categoryTotal) * 100) : 0;

  const [animatedTotal, setAnimatedTotal] = useState(0);
  const [animatedCategory, setAnimatedCategory] = useState(0);

  useEffect(() => {
    const duration = 800;
    const steps = 30;
    const incrementTotal = totalPercent / steps;
    const incrementCategory = categoryPercent / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setAnimatedTotal(Math.min(Math.round(incrementTotal * currentStep), totalPercent));
      setAnimatedCategory(Math.min(Math.round(incrementCategory * currentStep), categoryPercent));
      if (currentStep >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [totalPercent, categoryPercent]);

  const getMotivationText = () => {
    if (totalPercent === 0) return '开始你的学习之旅吧！';
    if (totalPercent < 30) return '起步不错，继续加油！';
    if (totalPercent < 60) return '进度过半，保持势头！';
    if (totalPercent < 90) return '即将完成，胜利在望！';
    if (totalPercent < 100) return '只差一步，完美收官！';
    return '🎉 恭喜你全部掌握！';
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-primary via-orange-500 to-amber-500 p-6 text-white shadow-2xl shadow-primary/25 backdrop-blur-md md:col-span-2">
        <div className="absolute -right-12 -top-12 size-48 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-16 size-64 rounded-full bg-amber-300/25 blur-3xl" />

        <div className="relative flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium text-white/90">
              <Trophy className="size-4" />
              总体学习进度
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight tabular-nums bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {animatedTotal}%
              </span>
              <span className="text-sm text-white/80">
                已掌握 {totalMastered} / {totalQuestions} 题
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg shadow-white/10">
              <Flame className="size-8 animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-white text-primary text-xs font-bold shadow-lg">
              <TrendingUp className="size-3" />
            </div>
          </div>
        </div>

        <div className="relative mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/60">进度条</span>
            <span className="text-xs font-medium text-white/80">{getMotivationText()}</span>
          </div>
          <div className="relative h-3 bg-white/15 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-800 ease-out"
              style={{ width: `${animatedTotal}%` }}
            />
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span className="size-2 rounded-full bg-white/80 animate-ping" />
            <span className="font-medium">{getMotivationText()}</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-white/80 p-6 shadow-lg shadow-primary/5 backdrop-blur-xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
        <div className="absolute top-0 right-0 size-24 rounded-bl-full bg-gradient-to-bl from-primary/5 to-transparent" />

        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/5 text-xs font-medium text-primary">
              <Target className="size-3.5" />
              当前分类
            </div>
            <div className="mt-3 text-lg font-bold text-foreground">{categoryLabel}</div>
          </div>
          <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-orange-500/10 text-primary shadow-md">
            <BookCheck className="size-6" />
          </div>
        </div>

        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-4xl font-bold tabular-nums bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            {animatedCategory}
          </span>
          <span className="text-sm text-muted-foreground">
            / {categoryTotal} 已掌握
          </span>
        </div>

        <div className="mt-4">
          <div className="relative h-2.5 bg-muted/50 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-orange-500 rounded-full transition-all duration-800 ease-out"
              style={{ width: `${animatedCategory}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">完成度</span>
            <div className="flex items-center gap-1 text-xs text-primary font-medium">
              <Award className="size-3" />
              {categoryMastered === categoryTotal && categoryTotal > 0 ? '已完成' : '进行中'}
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-border/30">
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <div className="text-xs text-muted-foreground">未掌握</div>
              <div className="mt-1 text-lg font-bold text-muted-foreground">{categoryTotal - categoryMastered}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground">正确率</div>
              <div className="mt-1 text-lg font-bold text-primary">{categoryPercent}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
