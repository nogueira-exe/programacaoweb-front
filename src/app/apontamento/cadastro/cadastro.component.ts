import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Apontamento } from '../apontamento.model';
import { ApontamentoService } from '../apontamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [ CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  apontamento: Apontamento = {
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

  constructor(
    private apontamentoService: ApontamentoService,
    private router: Router
  ) {}

  salvar() {
    const apontamentoEnviar = {
      ...this.apontamento,
      data: new Date(this.apontamento.data),
      data_de_exclusao: this.apontamento.data_de_exclusao ? new Date(this.apontamento.data_de_exclusao) : undefined
    }

    this.apontamentoService.cadastrarApontamento(apontamentoEnviar).subscribe( () => {
      this.router.navigate(['/listagem']);
    })
  }

  cancelar(){
    window.history.back();
  }
}
