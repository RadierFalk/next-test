import { Cards } from "@/components/Cards"
import { ChartOverview } from "@/components/dashboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

const Home = () => {
  return(
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
            
            <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
              Total a Receber
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4"></DollarSign>
            </div>
            <CardDescription>
              Total a receber no mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$10.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
            
            <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
              Total a Pagar
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4"></DollarSign>
            </div>
            <CardDescription>
              Total a Pagar no mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$5.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
            
            <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
              Caixa
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4"></DollarSign>
            </div>
            <CardDescription>
              Saldo de Caixa
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$5.000</p>
          </CardContent>
        </Card>
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Cards />
      </section>
    </main>
  )
}

export default Home