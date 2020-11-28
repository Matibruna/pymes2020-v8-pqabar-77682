import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MyInterceptor } from "./shared/my-interceptor";

import {
  NgbPaginationModule,
  NgbModalModule
} from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/menu/menu.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ArticulosComponent } from "./components/articulos/articulos.component";
import { ArticulosFamiliasComponent } from "./components/articulos-familias/articulos-familias.component";
import { ModalDialogComponent } from "./components/modal-dialog/modal-dialog.component";
import { ContactosComponent } from "./components/contactos/contactos.component";
import { ContactosService } from "./services/contactos.service";
import { Contactos2Component } from "./components/contactos2/contactos2.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ArticulosComponent,
    ArticulosFamiliasComponent,
    ModalDialogComponent,
    ContactosComponent,
    Contactos2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/inicio", pathMatch: "full" },
      { path: "inicio", component: InicioComponent },
      { path: "articulos", component: ArticulosComponent },
      { path: "articulosfamilias", component: ArticulosFamiliasComponent },
      { path: "contactos", component: ContactosComponent },
      { path: "contactos2", component: Contactos2Component }
    ]),
    NgbPaginationModule,
    NgbModalModule
  ],
  entryComponents: [ModalDialogComponent],
  providers: [ContactosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
