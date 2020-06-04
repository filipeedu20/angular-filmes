import { Component } from "@angular/core";

interface IFilme {
  nome: string;
  ano: number;
}

@Component({
  selector: "nome-filme",
  templateUrl: "./filme.component.html",
  styleUrls: ["./filme.component.css"]
})
export class FilmeComponent {
  videos: IFilme[] = [
    { nome: "Filme 1 ", ano: 2020 },
    { nome: "Filme 2 ", ano: 2021 },
    { nome: "Filme 3 ", ano: 2021 }
  ];
}
