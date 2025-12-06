import Link from "next/link";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* ロゴ */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="text-lg font-bold">Y</span>
          </div>
          <span className="text-xl font-semibold">Yuki App</span>
        </Link>

        {/* マイページへのリンク */}
        <nav>
          <Link
            href="/mypage"
            className={cn(
              "flex items-center space-x-2 rounded-md px-4 py-2 text-sm font-medium",
              "transition-colors hover:bg-accent hover:text-accent-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            <User className="h-4 w-4" />
            <span>マイページ</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
