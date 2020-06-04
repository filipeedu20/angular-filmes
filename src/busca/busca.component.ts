import { Component } from "@angular/core";

@Component({
  selector: "busca-filme",
  templateUrl: "./busca.component.html",
  styleUrls: ["./busca.component.css"]
})
export class BuscaComponent {
  titulo = "Nome Filme";

  onInputChange(name) {
    console.log(name);
  }
}
