import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DetalleempleadoComponent } from "./components/detalleempleado/detalleempleado.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";

const appRoutes : Routes = [
    {path : "empleados" , component : UsuariosComponent},
    {path : "detalles/:id" , component : DetalleempleadoComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
