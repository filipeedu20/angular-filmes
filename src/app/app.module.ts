import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TituloComponent } from "../titulo/titulo.component";
import { FilmeComponent } from "../filme/filme.component";
import { BuscaComponent } from "../busca/busca.component";
@NgModule({
  declarations: [AppComponent, TituloComponent,FilmeComponent,BuscaComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
