
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "@/pages/Index"
import ForProfessors from "@/pages/ForProfessors"
import ForStudents from "@/pages/ForStudents"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import SignIn from "@/pages/SignIn"
import SignUp from "@/pages/SignUp"
import ProfessorDashboard from "@/pages/ProfessorDashboard"
import StudentDashboard from "@/pages/StudentDashboard"
import NotFound from "@/pages/NotFound"

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Index />
      </TooltipProvider>
    </QueryClientProvider>
  )
}
