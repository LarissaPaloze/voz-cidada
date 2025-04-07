import { LogOut, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

function AdminHeader() {
    const { signOut } = useContext(AuthContext)
    const location = useLocation()
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="bg-[#2B87B3] text-white p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Título que redireciona para o perfil */}
                <Link to="/admin/perfil" className="text-xl font-bold hover:underline">
                    Painel Administrativo
                </Link>

                {/* Navegação - Centralizada (desktop) */}
                <nav className="hidden md:flex items-center gap-8 font-montserrat">
                    <Link to="/admin/dashboard" className="hover:underline">PAINEL</Link>
                    <Link to="/admin/encaminhamentos" className="hover:underline">ENCAMINHAMENTOS</Link>
                    <Link to="/admin/status" className="hover:underline">STATUS</Link>
                </nav>

                {/* Logout */}
                <button onClick={signOut} className="hidden md:flex items-center gap-1 text-sm hover:underline">
                    <LogOut className="h-4 w-4" />
                    Sair
                </button>

                {/* Botão Menu Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="font-bold text-xl hover:text-gray-300"
                    >
                        {showMenu ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Sidebar Mobile */}
            <aside className={`fixed md:hidden top-0 right-0 h-full w-64 bg-[#2B87B3] text-white flex flex-col items-center justify-center gap-8 z-50 transition-transform transform ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    onClick={() => setShowMenu(false)}
                    className="absolute top-5 right-5 text-white text-2xl"
                >
                    <X />
                </button>
                <nav className="flex flex-col items-center gap-6 text-lg font-montserrat">
                    <Link to="/admin/dashboard" onClick={() => setShowMenu(false)} className="hover:underline">PAINEL</Link>
                    <Link to="/admin/encaminhamentos" onClick={() => setShowMenu(false)} className="hover:underline">ENCAMINHAMENTOS</Link>
                    <Link to="/admin/status" onClick={() => setShowMenu(false)} className="hover:underline">STATUS</Link>
                    <Link to="/admin/perfil" onClick={() => setShowMenu(false)} className="hover:underline">PERFIL</Link>
                    <button
                        onClick={() => {
                            setShowMenu(false)
                            signOut()
                        }}
                        className="hover:underline"
                    >
                        Sair
                    </button>
                </nav>
            </aside>
        </header>
    )
}

export default AdminHeader
