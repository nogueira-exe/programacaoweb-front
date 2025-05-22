import { Component, OnInit } from '@angular/core';
import { ApontamentoService } from '../apontamento.service';
import { Apontamento } from '../apontamento.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [ CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {

  apontamentos: Apontamento[] = [];

  constructor(private apontamentoService: ApontamentoService) {}

  ngOnInit(): void {
    this.carregarApontamentos();
  }

  carregarApontamentos(): void {
    this.apontamentoService.listarApontamento().subscribe((res) => {
      this.apontamentos = res;
    })
  }

}
