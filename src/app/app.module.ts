import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CombinacoesPage } from '../pages/combinacoes/combinacoes';
import { DescubraPage } from '../pages/descubra/descubra';
import { EditFiltroPage } from '../pages/editfiltro/editfiltro';
import { EditPerfilPage } from '../pages/editperfil/editperfil';
import { LoginPage } from '../pages/login/login';
import { MensagemPage } from '../pages/mensagem/mensagem';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CombinacoesPage,
    DescubraPage,
    EditFiltroPage,
    EditPerfilPage,
    LoginPage,
    MensagemPage,
    PerfilPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CombinacoesPage,
    DescubraPage,
    EditFiltroPage,
    EditPerfilPage,
    LoginPage,
    MensagemPage,
    PerfilPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
