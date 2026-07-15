import { Outlet, useLocation, Link } from "react-router-dom";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { MOCK_QUESTIONS, type QuestionCategory } from "@/data/questions";
import { useState, useEffect, useMemo } from "react";
import { GraduationCap, BookOpen, FileText, PenTool, Home } from "lucide-react";

const STORAGE_KEY = 'xi-thought-review-mastered';

const NAV_ITEMS = [
  { path: '/', label: '首页', icon: Home, group: 'CET-4 复习' },
  { path: '/guide', label: '轻松指南', icon: BookOpen, group: 'CET-4 复习' },
  { path: '/main', label: '复习宝典', icon: FileText, group: 'CET-4 复习' },
  { path: '/practice', label: '答题练习', icon: PenTool, group: '习思想' },
];

const GROUPS = ['CET-4 复习', '习思想'];

export const Layout = () => {
  const location = useLocation();
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

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

  const [activeCategory, setActiveCategory] = useState<QuestionCategory>('short-answer-2025');

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar
            activeCategory={activeCategory}
            onCategoryChange={(cat) => setActiveCategory(cat)}
            masteredCount={Object.fromEntries(
              Object.entries(categoryStats).map(([k, v]) => [k, v.mastered])
            ) as Record<QuestionCategory, number>}
            totalCount={Object.fromEntries(
              Object.entries(categoryStats).map(([k, v]) => [k, v.total])
            ) as Record<QuestionCategory, number>}
          />

          <SidebarInset className="flex flex-col min-w-0">
            <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border/30 bg-white/60 px-4 backdrop-blur-xl md:px-6">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-500 text-primary-foreground shadow-lg shadow-primary/30">
                  <GraduationCap className="size-5" />
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-bold text-sidebar-foreground">学习助手</div>
                  <div className="text-xs text-muted-foreground">CET-4 · 习思想 · 高效复习</div>
                </div>
              </div>
              <nav className="hidden lg:flex flex-1 justify-end items-center gap-1">
                {GROUPS.map((group) => (
                  <div key={group} className="flex flex-col mr-2">
                    <span className="text-xs text-muted-foreground px-2 mb-1">{group}</span>
                    <div className="flex gap-1">
                      {NAV_ITEMS.filter(item => item.group === group).map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              isActive
                                ? 'bg-primary/10 text-primary shadow-sm'
                                : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                            }`}
                          >
                            <Icon className="size-4" />
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </header>

            <main className="flex-1 overflow-y-auto">
              <Outlet context={{ activeCategory, setActiveCategory }} />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};