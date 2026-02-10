
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";

export default function NewAuditPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleAudit = async () => {
    setLoading(true);
    try {
        const res = await fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({ messages: [{ role: "user", content: input }] })
        });
        const data = await res.json();
        setResult(data.content);
    } catch(e) { setResult("Error processing request."); }
    setLoading(false);
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
        <h1 className="text-3xl font-bold">Live AI Audit</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
            <Card className="bg-slate-900 border-slate-800 flex flex-col">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-indigo-400" />
                        System Specification
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                    <textarea 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full flex-1 bg-slate-950 border border-slate-800 rounded-lg p-4 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none font-mono text-sm"
                        placeholder="// Paste JSON, Code or Text description here..."
                    />
                    <div className="mt-4 flex justify-end">
                        <Button onClick={handleAudit} disabled={loading} size="lg" className="px-8">
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {loading ? "Neural Scanning..." : "Execute Audit"}
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-800 flex flex-col">
                <CardHeader>
                    <CardTitle className="text-white">Compliance Report</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <div className="bg-slate-950 rounded-lg p-6 h-full overflow-y-auto border border-slate-800 text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed shadow-inner">
                        {result || <span className="text-slate-600">Waiting for input stream...</span>}
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}