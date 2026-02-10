
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShieldCheck, FileText, Settings, LogOut, CreditCard, Box } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();
  
  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/audits", label: "Audit Historie", icon: ShieldCheck },
    { href: "/new-audit", label: "Neuer Audit", icon: Box },
    { href: "/billing", label: "Billing & Plan", icon: CreditCard },
    { href: "/settings", label: "Einstellungen", icon: Settings },
  ];

  return (
    <div className="w-72 bg-slate-950 border-r border-slate-800 h-screen p-6 flex flex-col fixed left-0 top-0 z-20">
        <div className="mb-10 flex items-center gap-3 px-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-900/20 text-xl">C</div>
            <div>
                <span className="font-bold text-lg text-white block leading-none">Compliance</span>
                <span className="text-xs text-indigo-400 font-medium tracking-widest">ENTERPRISE</span>
            </div>
        </div>
        
        <div className="mb-6 px-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Platform</div>
            <nav className="space-y-1">
                {links.slice(0, 3).map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link key={link.href} href={link.href} className={cn("flex items-center gap-3 px-4 py-3 rounded-lg transition-all group", isActive ? "bg-indigo-600/10 text-indigo-400" : "text-slate-400 hover:bg-slate-900 hover:text-white")}>
                            <Icon className={cn("w-5 h-5", isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-white")} /> 
                            <span className="font-medium">{link.label}</span>
                        </Link>
                    )
                })}
            </nav>
        </div>

        <div className="mb-6 px-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Administration</div>
            <nav className="space-y-1">
                {links.slice(3).map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link key={link.href} href={link.href} className={cn("flex items-center gap-3 px-4 py-3 rounded-lg transition-all group", isActive ? "bg-indigo-600/10 text-indigo-400" : "text-slate-400 hover:bg-slate-900 hover:text-white")}>
                            <Icon className={cn("w-5 h-5", isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-white")} /> 
                            <span className="font-medium">{link.label}</span>
                        </Link>
                    )
                })}
            </nav>
        </div>

        <div className="mt-auto px-4 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500"></div>
                <div>
                    <div className="text-sm font-bold text-white">Admin User</div>
                    <div className="text-xs text-slate-500">Enterprise Plan</div>
                </div>
            </div>
            <button className="flex items-center gap-3 text-red-400 hover:text-red-300 text-sm font-medium transition">
                <LogOut className="w-4 h-4" /> Sign Out
            </button>
        </div>
    </div>
  );
}