import { create } from "zustand";
import type { Question } from "@/lib/questions";

export type AppView = 
  | "landing" 
  | "login" 
  | "register" 
  | "dashboard" 
  | "study" 
  | "exam" 
  | "result";

interface ExamAnswer {
  questionId: number;
  answer: string | Record<string, string>;
}

interface AppState {
  // Navigation
  currentView: AppView;
  setCurrentView: (view: AppView) => void;

  // Auth
  user: { id: string; username: string; fullName: string } | null;
  setUser: (user: { id: string; username: string; fullName: string } | null) => void;
  authToken: string | null;
  setAuthToken: (token: string | null) => void;

  // Exam
  examQuestions: Question[];
  setExamQuestions: (questions: Question[]) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  answers: Record<number, string | Record<string, string>>;
  setAnswer: (questionId: number, answer: string | Record<string, string>) => void;
  examStartTime: number | null;
  setExamStartTime: (time: number | null) => void;
  examCompleted: boolean;
  setExamCompleted: (completed: boolean) => void;

  // Result
  examScore: number;
  setExamScore: (score: number) => void;
  correctCount: number;
  setCorrectCount: (count: number) => void;
  totalQuestions: number;
  setTotalQuestions: (total: number) => void;
  sessionId: string | null;
  setSessionId: (id: string | null) => void;

  // Fullscreen violations
  violationCount: number;
  incrementViolation: () => void;
  resetViolations: () => void;

  // Reset
  resetExam: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentView: "landing",
  setCurrentView: (view) => set({ currentView: view }),

  user: null,
  setUser: (user) => set({ user }),
  authToken: null,
  setAuthToken: (token) => set({ authToken: token }),

  examQuestions: [],
  setExamQuestions: (questions) => set({ examQuestions: questions }),
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
  answers: {},
  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    })),
  examStartTime: null,
  setExamStartTime: (time) => set({ examStartTime: time }),
  examCompleted: false,
  setExamCompleted: (completed) => set({ examCompleted: completed }),

  examScore: 0,
  setExamScore: (score) => set({ examScore: score }),
  correctCount: 0,
  setCorrectCount: (count) => set({ correctCount: count }),
  totalQuestions: 0,
  setTotalQuestions: (total) => set({ totalQuestions: total }),
  sessionId: null,
  setSessionId: (id) => set({ sessionId: id }),

  violationCount: 0,
  incrementViolation: () =>
    set((state) => ({ violationCount: state.violationCount + 1 })),
  resetViolations: () => set({ violationCount: 0 }),

  resetExam: () =>
    set({
      examQuestions: [],
      currentQuestionIndex: 0,
      answers: {},
      examStartTime: null,
      examCompleted: false,
      examScore: 0,
      correctCount: 0,
      totalQuestions: 0,
      violationCount: 0,
      sessionId: null,
    }),
}));
