
import { StateGraph, Annotation } from "@langchain/langgraph";
import { GoogleGenerativeAI } from "@google/generative-ai";

export interface AgentMessage { role: string; content: string; }

const ComplianceState = Annotation.Root({
  messages: Annotation<AgentMessage[]>({ reducer: (x, y) => x.concat(y), default: () => [] }),
  riskLevel: Annotation<string>({ reducer: (x, y) => y ?? x, default: () => "low" })
});

const analyzerNode = async (state: typeof ComplianceState.State) => {
    const messages = state.messages;
    const lastMessage = messages[messages.length - 1];
    const textToAnalyze = lastMessage?.content || "";

    if (!process.env.GEMINI_API_KEY) {
        return { riskLevel: "unknown", messages: [{ role: "assistant", content: "Error: API Key Missing." }] };
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent("Analyze this AI system for EU AI Act compliance risks (High/Med/Low) + brief reason: " + textToAnalyze);
        return { riskLevel: "processed", messages: [{ role: "assistant", content: result.response.text() }] };
    } catch (error: any) {
        return { riskLevel: "error", messages: [{ role: "assistant", content: "Error: " + error.message }] };
    }
};

export const createComplianceGraph = () => {
    const builder = new StateGraph(ComplianceState);
    builder.addNode("analyze", analyzerNode);
    builder.addEdge("__start__", "analyze" as any);
    return builder.compile();
};