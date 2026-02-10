
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="space-y-8 max-w-5xl">
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-800 bg-slate-900/50">
                <CardHeader>
                    <CardTitle className="text-lg text-slate-400">Current Plan</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold mb-2">Enterprise</div>
                    <Badge className="bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 mb-6">Active</Badge>
                    <p className="text-sm text-slate-500 mb-6">Renewal on April 1, 2026</p>
                    <Button variant="outline" className="w-full">Manage Subscription</Button>
                </CardContent>
            </Card>
            
            <Card className="border-slate-800 bg-slate-900/50 md:col-span-2">
                <CardHeader>
                    <CardTitle>Usage Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span>Audit Calls (API)</span>
                                <span className="text-slate-400">8,432 / 10,000</span>
                            </div>
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[84%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span>Storage</span>
                                <span className="text-slate-400">12GB / 50GB</span>
                            </div>
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-cyan-500 w-[24%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span>Team Seats</span>
                                <span className="text-slate-400">4 / 10</span>
                            </div>
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-[40%]"></div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}