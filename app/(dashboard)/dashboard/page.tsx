
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockAudits } from "@/lib/store";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Executive Dashboard</h1>
                <p className="text-slate-400">Übersicht über alle AI Compliance Aktivitäten.</p>
            </div>
            <div className="flex gap-2">
                <Badge variant="outline" className="px-3 py-1 bg-slate-900">Last updated: Just now</Badge>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-950 border-slate-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">Total Systems</CardTitle>
                    <Activity className="h-4 w-4 text-indigo-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-white">24</div>
                    <p className="text-xs text-slate-500 mt-1 flex items-center text-green-400"><TrendingUp className="w-3 h-3 mr-1" /> +2 this week</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">Compliance Rate</CardTitle>
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-white">98.2%</div>
                    <p className="text-xs text-slate-500 mt-1">Above industry standard</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">High Risks</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-white">1</div>
                    <p className="text-xs text-slate-500 mt-1">Action required immediately</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">Next Audit</CardTitle>
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-white">4 Days</div>
                    <p className="text-xs text-slate-500 mt-1">Scheduled: Finance Bot</p>
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-7">
            <Card className="col-span-7 bg-slate-950 border-slate-800">
                <CardHeader>
                    <CardTitle>Recent Audit Activities</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-slate-800 hover:bg-slate-900/50">
                                <TableHead>Audit ID</TableHead>
                                <TableHead>System Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Risk Level</TableHead>
                                <TableHead className="text-right">Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockAudits.map((audit) => (
                                <TableRow key={audit.id} className="border-slate-800 hover:bg-slate-900/50">
                                    <TableCell className="font-mono text-xs text-slate-500">{audit.id}</TableCell>
                                    <TableCell className="font-medium">{audit.systemName}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="bg-slate-800 text-slate-300">{audit.status}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={audit.riskLevel === 'Critical' || audit.riskLevel === 'High' ? 'destructive' : audit.riskLevel === 'Medium' ? 'warning' : 'success'}>
                                            {audit.riskLevel}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right text-slate-400">{audit.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}