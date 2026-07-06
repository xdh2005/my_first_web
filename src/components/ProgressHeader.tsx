import { Trophy, Target, Flame, BookCheck } from 'lucide-react';
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

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* 总进度大卡 */}
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-primary/90 via-orange-500/80 to-amber-500/70 p-6 text-white shadow-xl shadow-primary/20 backdrop-blur-md md:col-span-2">
        <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 size-56 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <Trophy className="size-4" />
              总体学习进度
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight tabular-nums">
                {totalPercent}%
              </span>
              <span className="text-sm text-white/70">
                已掌握 {totalMastered} / {totalQuestions} 题
              </span>
            </div>
          </div>
          <div className="flex size-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <Flame className="size-7" />
          </div>
        </div>

        <div className="relative mt-5">
          <Progress value={totalPercent} className="h-2.5 bg-white/20 [&>div]:bg-white" />
        </div>

        <div className="relative mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-white/70">
            <span className="size-1.5 rounded-full bg-white/60" />
            继续加油，向满分冲刺！
          </div>
        </div>
      </div>

      {/* 当前分类卡 */}
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-white/60 p-6 shadow-sm backdrop-blur-xl">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Target className="size-4" />
              当前分类
            </div>
            <div className="mt-2 text-lg font-bold text-foreground">{categoryLabel}</div>
          </div>
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookCheck className="size-5" />
          </div>
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl font-bold tabular-nums text-foreground">
            {categoryMastered}
          </span>
          <span className="text-sm text-muted-foreground">
            / {categoryTotal} 已掌握
          </span>
        </div>

        <div className="mt-3">
          <Progress
            value={categoryPercent}
            className="h-2 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-orange-500"
          />
        </div>
      </div>
    </div>
  );
}
