import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"李骏 — AIGC 视觉设计作品集",description:"李骏的 AIGC 视觉设计、AI 漫画、品牌设计与动态影像案例集。"};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
