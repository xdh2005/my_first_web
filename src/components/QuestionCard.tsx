import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Circle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { IQuestion } from '@/data/questions';

interface QuestionCardProps {
  question: IQuestion;
  index: number;
  onToggleMastered: (id: string) => void;
}

export default function QuestionCard({ question, index, onToggleMastered }: QuestionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
        question.mastered
          ? 'border-success/30 bg-gradient-to-br from-white/80 to-success/5 backdrop-blur-xl'
          : 'border-border/50 bg-white/60 backdrop-blur-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'
      }`}
    >
      {/* 顶部装饰条 */}
      {question.mastered && (
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-success to-emerald-400" />
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-start gap-4 p-5 text-left"
      >
        {/* 题号 */}
        <div
          className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold tabular-nums transition-colors ${
            question.mastered
              ? 'bg-success/15 text-success'
              : 'bg-primary/10 text-primary group-hover:bg-primary/15'
          }`}
        >
          {index + 1}
        </div>

        {/* 题目内容 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant={question.mastered ? 'default' : 'secondary'}
              className={`text-xs ${
                question.mastered
                  ? 'bg-success/15 text-success hover:bg-success/20'
                  : ''
              }`}
            >
              {question.questionType}
            </Badge>
            {question.mastered && (
              <Badge variant="outline" className="text-xs border-success/30 text-success">
                已掌握
              </Badge>
            )}
          </div>
          <h3 className="text-base font-semibold leading-relaxed text-foreground">
            {question.title}
          </h3>
          <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
            {isExpanded ? (
              <>
                <ChevronUp className="size-3.5" />
                收起答案
              </>
            ) : (
              <>
                <ChevronDown className="size-3.5" />
                点击查看答案
              </>
            )}
          </div>
        </div>

        {/* 展开箭头 */}
        <div
          className={`shrink-0 rounded-full p-1.5 text-muted-foreground transition-all duration-300 ${
            isExpanded ? 'rotate-180 bg-primary/10 text-primary' : 'bg-muted/50'
          }`}
        >
          <ChevronDown className="size-4" />
        </div>
      </button>

      {/* 答案区域 */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/40 bg-gradient-to-br from-orange-50/50 to-amber-50/30 p-5 pl-[4.25rem]">
            <div className="mb-3 flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-primary">参考答案</span>
            </div>
            <div className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
              {question.answer}
            </div>

            {/* 操作按钮 */}
            <div className="mt-5 flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                掌握了吗？标记一下方便复习
              </div>
              <Button
                size="sm"
                variant={question.mastered ? 'outline' : 'default'}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleMastered(question.id);
                }}
                className={`gap-1.5 ${
                  question.mastered
                    ? 'border-success/40 text-success hover:bg-success/10 hover:text-success'
                    : 'bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white shadow-md shadow-primary/20'
                }`}
              >
                {question.mastered ? (
                  <>
                    <Circle className="size-3.5" />
                    标记未掌握
                  </>
                ) : (
                  <>
                    <Check className="size-3.5" />
                    标记已掌握
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
