
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download } from "lucide-react";
import { mockAudits } from "@/lib/store";

export default function AuditsPage() {
  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold">Audit Archive</h1>
                <p className="text-slate-400">Vollständige Historie aller geprüften Systeme.</p>
            </div>
            <div className="flex gap-3">
                <Button variant="outline" className="gap-2"><Download className="w-4 h-4"/> Export CSV</Button>
                <Button className="gap-2 bg-indigo-600 hover:bg-indigo-500">Neuer Scan</Button>
            </div>
        </div>

        <div className="flex gap-4 items-center bg-slate-900 p-4 rounded-xl border border-slate-800">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <Input placeholder="Suche nach System-Name oder ID..." className="pl-10 bg-slate-950 border-slate-800" />
            </div>
            <Button variant="secondary" className="gap-2"><Filter className="w-4 h-4"/> Filter</Button>
        </div>

        <Card>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow className="border-slate-800 hover:bg-transparent">
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>System</TableHead>
                            <TableHead>Compliance Status</TableHead>
                            <TableHead>Risk Score</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockAudits.concat(mockAudits).map((audit, i) => (
                            <TableRow key={i} className="border-slate-800">
                                <TableCell className="font-mono text-slate-500">{audit.id}</TableCell>
                                <TableCell className="font-medium text-slate-200">{audit.systemName}</TableCell>
                                <TableCell><Badge variant="outline" className="text-slate-400 border-slate-700">Audit Completed</Badge></TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${audit.riskLevel === 'Low' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                                        {audit.riskLevel}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}