import { useState } from 'react';
import { ChevronDown, Check, Circle, Lightbulb, BookmarkCheck } from 'lucide-react';
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
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ease-out ${
        question.mastered
          ? 'border-success/30 bg-gradient-to-br from-white/90 to-success/8 backdrop-blur-xl shadow-sm'
          : 'border-border/50 bg-white/80 backdrop-blur-xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-0.5'
      }`}
    >
      {question.mastered && (
        <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-success via-emerald-400 to-success/60" />
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-start gap-4 p-5 text-left transition-colors duration-200"
      >
        <div
          className={`relative flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold tabular-nums transition-all duration-300 ${
            question.mastered
              ? 'bg-success/15 text-success shadow-sm shadow-success/10'
              : 'bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:shadow-md group-hover:shadow-primary/10'
          }`}
        >
          {index + 1}
          {question.mastered && (
            <div className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-success text-white">
              <Check className="size-2.5" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant={question.mastered ? 'default' : 'secondary'}
              className={`text-xs font-medium ${
                question.mastered
                  ? 'bg-success/15 text-success'
                  : 'bg-primary/10 text-primary'
              }`}
            >
              {question.questionType}
            </Badge>
            {question.mastered && (
              <Badge variant="outline" className="text-xs border-success/30 text-success bg-success/5">
                <BookmarkCheck className="size-3 mr-1" />
                已掌握
              </Badge>
            )}
          </div>
          <h3 className="text-base font-semibold leading-relaxed text-foreground group-hover:text-primary transition-colors duration-200">
            {question.title}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            {isExpanded ? (
              <>
                <ChevronDown className="size-3.5 rotate-180" />
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

        <div
          className={`shrink-0 rounded-full p-2 text-muted-foreground transition-all duration-300 ${
            isExpanded ? 'rotate-180 bg-primary/15 text-primary' : 'bg-muted/50 group-hover:bg-primary/10 group-hover:text-primary'
          }`}
        >
          <ChevronDown className="size-4" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/30 bg-gradient-to-br from-orange-50/80 via-amber-50/50 to-yellow-50/30 p-5 pl-[5rem]">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                <Lightbulb className="size-4 text-primary" />
              </div>
              <div>
                <span className="text-sm font-semibold text-primary">参考答案</span>
                <span className="text-xs text-muted-foreground ml-2">点击下方按钮标记掌握状态</span>
              </div>
            </div>
            <div className="text-sm leading-relaxed text-foreground/95 whitespace-pre-line pl-10 border-l-2 border-primary/20">
              {question.answer}
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/20">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                掌握了吗？标记一下方便复习
              </div>
              <Button
                size="sm"
                variant={question.mastered ? 'outline' : 'default'}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleMastered(question.id);
                }}
                className={`gap-2 px-4 transition-all duration-200 ${
                  question.mastered
                    ? 'border-success/40 text-success hover:bg-success/10 hover:text-success hover:shadow-sm'
                    : 'bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30'
                }`}
              >
                {question.mastered ? (
                  <>
                    <Circle className="size-3.5" />
                    取消掌握
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
