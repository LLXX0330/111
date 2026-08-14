import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "李骏｜AIGC 视觉设计作品集",
  description: "李骏的 AIGC 视觉设计、AI 漫剧、品牌设计与动态影像案例集。",
};

export const viewport: Viewport = {
  themeColor: "#050608",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" style={{ background: "#050608" }}><body style={{ background: "#050608" }}>{children}</body></html>;
}
