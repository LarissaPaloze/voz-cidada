import { ReactNode, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from "@/contexts/AuthContext.tsx";
import About from "@/pages/about/index.tsx";          
import Contact from "@/pages/contact/index.tsx";        
import ResetPassword from "@/pages/resetPassword/ResetPassoword.tsx";    
import SignIn from "./pages/signIn/index.tsx";
import SignUp from "./pages/signUp/index.tsx";
import AdminDashboard from "./pages/admin/index.tsx";
import Reports from "./pages/reports/index.tsx";
import Home from "./pages/home/index.tsx";
import Dashboard from "./pages/homePage/homePage.tsx";
import AbrirChamado from "./pages/abrirChamado/index.tsx"; // Nova importação
import Profile from "./pages/Profile/index.tsx";

type RouteProps = {
    children: ReactNode;
    requiredRole?: string;
}

const PrivateRoute = ({ children, requiredRole }: RouteProps) => {
    const { isAuthenticated, loading, userRoles } = useContext(AuthContext);

    if (loading) {
        return "";
    }

    if (!isAuthenticated) {
        return <Navigate to="/signin" />
    }

    if (!requiredRole && userRoles?.includes("ROLE_ADMIN")) {
        return <Navigate to="/admin/home" />
    }

    if (requiredRole && !userRoles?.includes(requiredRole)) {
        return <Navigate to="/home" />
    }

    return children;
}

const PublicRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated, loading } = useContext(AuthContext);
    if (loading) {
        return "";
    }
    if (isAuthenticated) {
        return <Navigate to="/dashboard" />
    }
    return children;
}

const App = () => {
    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route
                        path="/signin"
                        element={
                            <PublicRoute>
                                <SignIn />
                            </PublicRoute>
                        }
                    />

                    <Route
                        path="/signup"
                        element={
                            <PublicRoute>
                                <SignUp />
                            </PublicRoute>
                        }
                    />

                    <Route
                        path="/admin/home"
                        element={
                            <PrivateRoute requiredRole="ROLE_ADMIN">
                                <AdminDashboard />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/about" 
                        element={
                            <PrivateRoute>
                                <About />
                            </PrivateRoute> 
                        }
                    />

                    <Route
                        path="/contact" // por enquanto público apenas para teste
                        element={
                            <PublicRoute>
                                <Contact />
                            </PublicRoute>
                        }
                    />

                    <Route
                        path="/chamados"
                        element={
                            <PrivateRoute>
                                <Reports />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/abrir-chamado" // Rota para Abrir Chamado
                        element={
                            <PrivateRoute>
                                <AbrirChamado />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/resetPassword"
                        element={
                            <PublicRoute>
                                <ResetPassword />
                            </PublicRoute>
                        }
                    />

                    <Route 
                        path="/conta"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />

                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
