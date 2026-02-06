import { TrendingUpDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Cards() {
    return(
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-x1 text-gray-800">
                        Ultimos Pagamentos
                    </CardTitle>   
                    <TrendingUpDown className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    Ultimos pagamentos realizados
                </CardDescription>
            </CardHeader>
            <CardContent>
                <article>
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/RadierFalk.png" alt="Avatar" />
                        <AvatarFallback>RF</AvatarFallback>
                    </Avatar>
                </article>
            </CardContent>
        </Card>
    )
}