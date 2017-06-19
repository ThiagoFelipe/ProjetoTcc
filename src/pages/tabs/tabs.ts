import { Component } from '@angular/core';

import { PerfilPage } from '../perfil/perfil';
import { DescubraPage } from '../descubra/descubra';
import { CombinacoesPage } from '../combinacoes/combinacoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PerfilPage;
  tab2Root = DescubraPage;
  tab3Root = CombinacoesPage;

  constructor() {

  }
}
