
import Sidebar from "@/components/layout/sidebar";
export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans">
      <Sidebar />
      <main className="flex-1 ml-72 p-8 overflow-y-auto bg-slate-950">
        {children}
      </main>
    </div>
  );
}