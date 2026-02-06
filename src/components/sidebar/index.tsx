"Use client"

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '../ui/button'
import Link from 'next/link'
import { BanknoteArrowDown, BanknoteArrowUp, CircleUser, ClipboardList, Cuboid, Home, LogOut, Menu, Package } from 'lucide-react'
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'


export function Sidebar(){
    return(
        <div className="flex w-full flex-col bg-muted/40">


        <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col'>
            <nav className='flex flex-col items-center gap-4 px-2 py-5 '>
            <TooltipProvider>
                <Link href="#" 
                    className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full'>
                    <CircleUser className="h-4 w-4" />
                    <span className="sr-only">Perfil</span>    
                </Link>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link href="#" 
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'>
                        <Home className="h-4 w-4" />
                        <span className="sr-only">Página Inicial</span>
                    </Link>
                    </TooltipTrigger>

                    <TooltipContent side="right">
                    Página Inicial
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link href="#" 
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'>
                        <BanknoteArrowUp className="h-4 w-4" />
                        <span className="sr-only">Contas a Pagar</span>
                    </Link>
                    </TooltipTrigger>

                    <TooltipContent side="right">
                    Contas a Pagar
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link href="#" 
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'>
                        <BanknoteArrowDown className="h-4 w-4" />
                        <span className="sr-only">Contas a Receber</span>
                    </Link>
                    </TooltipTrigger>

                    <TooltipContent side="right">
                    Contas a Receber
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link href="#" 
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'>
                        <Cuboid className="h-4 w-4" />
                        <span className="sr-only">Contas a Receber</span>
                    </Link>
                    </TooltipTrigger>

                    <TooltipContent side="right">
                    Estoque
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link href="#" 
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'>
                        <ClipboardList className="h-4 w-4" />
                        <span className="sr-only">Contas a Receber</span>
                    </Link>
                    </TooltipTrigger>

                    <TooltipContent side="right">
                    Relatórios
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </nav>

            <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-5'>
                <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link href="#" 
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'>
                        <LogOut className="h-4 w-4 text-red-500" />
                        <span className="sr-only">Contas a Receber</span>
                    </Link>
                    </TooltipTrigger>

                    <TooltipContent side="right">
                    Sair
                    </TooltipContent>
                </Tooltip>
                </TooltipProvider> 
                
            </nav>

        </aside>


            <div    id='ViewMobile' className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 
                sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <Menu className='w-5 h-5'>

                                </Menu>
                                <span className='sr-only'>
                                    Abrir / Fechar
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='left' className='sm:max-w-x'>
                            <nav className='grid gap-6 text-lg font-medium'>
                                <Link 
                                    href='#'
                                    className='flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center
                                     text-primary-foreground md:text-base'
                                >
                                    <Package className='h-5 w-5 transition-all'></Package>
                                    <span className='sr-only'>Logo do Projeto</span>
                                </Link>
                                <Link 
                                    href='#'
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <Home className='h-5 w-5 transition-all'></Home>
                                    Página Inicial
                                </Link>
                                <Link 
                                    href='#'
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <BanknoteArrowUp className='h-5 w-5 transition-all'></BanknoteArrowUp>
                                    Contas a Pagar
                                </Link>
                                <Link 
                                    href='#'
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <BanknoteArrowDown  className='h-5 w-5 transition-all'></BanknoteArrowDown>
                                    Contas a Receber
                                </Link>
                                <Link 
                                    href='#'
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <Cuboid  className='h-5 w-5 transition-all'></Cuboid>
                                    Estoque
                                </Link>
                                <Link 
                                    href='#'
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <ClipboardList  className='h-5 w-5 transition-all'></ClipboardList>
                                    Relatórios
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    )
}