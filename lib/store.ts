
// Simulierter In-Memory Store (Datenbank-Ersatz für die Demo)
export interface AuditRecord {
    id: string;
    systemName: string;
    riskLevel: "Low" | "Medium" | "High" | "Critical";
    date: string;
    status: "Completed" | "Pending" | "Failed";
}

export const mockAudits: AuditRecord[] = [
    { id: "AUD-001", systemName: "Customer Support Chatbot v1", riskLevel: "Low", date: "2024-03-10", status: "Completed" },
    { id: "AUD-002", systemName: "Credit Scoring Algo B", riskLevel: "High", date: "2024-03-12", status: "Completed" },
    { id: "AUD-003", systemName: "HR Resume Screener", riskLevel: "Medium", date: "2024-03-14", status: "Completed" },
    { id: "AUD-004", systemName: "Marketing Content Gen", riskLevel: "Low", date: "2024-03-15", status: "Completed" },
    { id: "AUD-005", systemName: "Autonomous Drone Nav", riskLevel: "Critical", date: "2024-03-15", status: "Failed" },
];