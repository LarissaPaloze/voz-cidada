
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Search, FileText, UserCheck, UserX, Building2 } from "lucide-react";
import AdminHeader from "@/components/adminHeader";
import Sidebar from "../../components/Sidebar";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-white">
      {/* Header e Sidebar */}
      <AdminHeader />
      <Sidebar />

      {/* Barra de Pesquisa */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Pesquisar chamados por ID, CPF ou palavra-chave..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg font-lato"
          />
        </div>
      </div>

      {/* Cards Resumo */}
      <div className="max-w-7xl mx-auto font-lato p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border rounded-lg p-4 text-center space-y-2">
          <FileText className="h-6 w-6 text-blue-600 mx-auto" />
          <h3 className="font-semibold">Chamados Abertos</h3>
          <p className="text-2xl font-bold">128</p>
          <p className="text-gray-500 text-sm">Total em aberto</p>
        </div>

        <div className="border rounded-lg p-4 text-center space-y-2">
          <UserCheck className="h-6 w-6 text-green-600 mx-auto" />
          <h3 className="font-semibold">Finalizados</h3>
          <p className="text-2xl font-bold">86</p>
          <p className="text-gray-500 text-sm">Encerrados com sucesso</p>
        </div>

        <div className="border rounded-lg p-4 text-center space-y-2">
          <UserX className="h-6 w-6 text-yellow-500 mx-auto" />
          <h3 className="font-semibold">Em Análise</h3>
          <p className="text-2xl font-bold">22</p>
          <p className="text-gray-500 text-sm">Aguardando triagem</p>
        </div>

        <div className="border rounded-lg p-4 text-center space-y-2">
          <Building2 className="h-6 w-6 text-purple-600 mx-auto" />
          <h3 className="font-semibold">Secretaria + Acionada</h3>
          <p className="text-xl font-bold">Urbanismo</p>
          <p className="text-gray-500 text-sm">Mais chamados no mês</p>
        </div>
      </div>

      {/* Lista de Chamados Recentes */}
      <div className="max-w-7xl mx-auto p-4 space-y-3 font-lato">
        {[1, 2, 3].map((chamado) => (
          <div
            key={chamado}
            className="flex items-center border rounded-lg p-3 gap-4"
          >
            <FileText className="text-blue-600 h-6 w-6" />
            <div className="flex-1">
              <h3 className="font-semibold">Chamado #{1234 + chamado}</h3>
              <p className="text-sm text-gray-500">Obras - Buraco na Rua</p>
              <p className="text-sm">Status: Em andamento</p>
            </div>
            <button className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200">
              Visualizar
            </button>
          </div>
        ))}
      </div>

      {/* Ondas decorativas */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            fill="#2B87B3"
            fillOpacity="0.2"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
