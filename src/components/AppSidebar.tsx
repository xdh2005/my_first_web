import { BookOpen, FileText, ScrollText, GraduationCap, Home, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import type { QuestionCategory } from '@/data/questions';

interface NavItem {
  path?: string;
  category?: QuestionCategory;
  label: string;
  icon: typeof BookOpen;
  group: string;
}

const NAV_ITEMS: NavItem[] = [
  { path: '/', label: '首页', icon: Home, group: 'CET-4 复习' },
  { path: '/guide', label: '轻松指南', icon: BookOpen, group: 'CET-4 复习' },
  { path: '/main', label: '复习宝典', icon: FileText, group: 'CET-4 复习' },
  { path: '/practice', label: '答题练习', icon: PenTool, group: '习思想' },
  { category: 'short-answer-2025', label: '简答题', icon: BookOpen, group: '2025春（22级）' },
  { category: 'essay-2025', label: '论述题', icon: FileText, group: '2025春（22级）' },
  { category: 'material-2025', label: '材料题', icon: ScrollText, group: '2025春（22级）' },
  { category: 'short-answer-2024', label: '简答题', icon: BookOpen, group: '2024春（21级）' },
  { category: 'essay-2024', label: '论述题', icon: FileText, group: '2024春（21级）' },
  { category: 'material-2024', label: '材料题', icon: ScrollText, group: '2024春（21级）' },
];

const GROUPS = ['CET-4 复习', '习思想', '2025春（22级）', '2024春（21级）'];

interface AppSidebarProps {
  activeCategory: QuestionCategory;
  onCategoryChange: (category: QuestionCategory) => void;
  masteredCount: Record<QuestionCategory, number>;
  totalCount: Record<QuestionCategory, number>;
}

export default function AppSidebar({
  activeCategory,
  onCategoryChange,
  masteredCount,
  totalCount,
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="border-b border-sidebar-border/50 px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-500 text-primary-foreground shadow-lg shadow-primary/30">
            <GraduationCap className="size-5" />
          </div>
          <div className="flex-1 min-w-0 group-data-[state=collapsed]:hidden">
            <div className="text-sm font-bold text-sidebar-foreground">学习助手</div>
            <div className="text-xs text-muted-foreground">CET-4 · 习思想</div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-3">
        {GROUPS.map((group) => (
          <SidebarGroup key={group} className="mb-4">
            <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-data-[state=collapsed]:hidden">
              {group}
            </div>
            <SidebarMenu>
              {NAV_ITEMS.filter((item) => item.group === group).map((item) => {
                const Icon = item.icon;
                if (item.path) {
                  return (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton
                        asChild
                        tooltip={item.label}
                        className="group"
                      >
                        <Link
                          to={item.path}
                          className="flex w-full items-center gap-3"
                        >
                          <Icon className="size-4 shrink-0" />
                          <span className="flex-1 truncate group-data-[state=collapsed]:hidden">
                            {item.label}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }
                const isActive = activeCategory === item.category;
                const mastered = masteredCount[item.category!] ?? 0;
                const total = totalCount[item.category!] ?? 0;
                return (
                  <SidebarMenuItem key={item.category}>
                    <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={`${group} ${item.label}`}
                        className="group"
                      >
                        <Link
                          to="/practice"
                          className="flex w-full items-center gap-3"
                        >
                          <Icon className="size-4 shrink-0" />
                          <span className="flex-1 truncate group-data-[state=collapsed]:hidden">
                            {item.label}
                          </span>
                          <span className="shrink-0 text-xs text-muted-foreground group-data-[state=collapsed]:hidden">
                            {mastered}/{total}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}