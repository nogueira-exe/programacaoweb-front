import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApontamentoService } from '../apontamento.service';
import { Apontamento } from '../apontamento.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css'
})
export class EdicaoComponent implements OnInit {

  apontamento: Apontamento = {
    id: 0,
    id_usuario: 0,
    id_categoria: 0,
    id_cliente: 0,
    id_item_projeto_categoria: 0,
    data: new Date(),
    horas: '',
    descricao: '',
    projeto: '',
    extra: '',
    data_de_exclusao: undefined,
    status_extra: '',
    resposta_extra: '',
    observacao: '',
    garantia: false
  };
  private id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apontamentoService: ApontamentoService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.carregarApontamento();
  }

  carregarApontamento(): void {

    if (!this.id || isNaN(this.id)) {
      this.router.navigate(['/listagem']);
      return;
    }

    this.apontamentoService.buscarApontamento(this.id).subscribe((a) => {
      this.apontamento = {
        ...a,
        data: a.data ? new Date(a.data).toISOString().split('T')[0] : '',
        data_de_exclusao: a.data_de_exclusao ? new Date(a.data_de_exclusao).toISOString().split('T')[0] : ''
      }
    })
  }

  salvar(): void {
    if (!this.apontamento) return;

    const apontamentoEnviar = {
      ...this.apontamento,
      data: new Date(this.apontamento.data),
      data_de_exclusao: this.apontamento.data_de_exclusao ? new Date(this.apontamento.data_de_exclusao) : undefined
    }

    this.apontamentoService.atualizarApontamento(this.id, apontamentoEnviar).subscribe(() => {
      this.router.navigate(['/listagem'])
    })
  }

  cancelar() {
    this.router.navigate(['/listagem'])
  }
}
