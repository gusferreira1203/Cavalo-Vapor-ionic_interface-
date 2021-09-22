  <template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Cavalo-Vapor</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Cavalo-Vapor</ion-title>
          </ion-toolbar>
        </ion-header>
        <div id="container">
          <strong class="capitalize">Iniciado finalmente no dia 7 de fevereiro de 2021, por três alunos cursando o segundo ano ensino médio técnico no Institudo Federal Catarinense Campus Araquari.</strong>
          <p>Tendo público-alvo pessoas físicas ou grandes empresas, em busca de caminhoneiros ou transportadoras, o Cavalo-Vapor é um website que combina carretas e locais para fretes, visando dinamismo e facilidade. Conosco, empregados, empregadores e autônomos encontram fretes com facilidade e segurança, empresas mantêm contratos organizados e diretos, e nossos chats permitem uma comunicação fácil e eficiente. Nosso sistema também facilita a gestão ao fornecer estatísticas de uso e rotatividade aos nossos clientes. Nossas buscas são completas e específicas, com filtros certeiros e controle de frota idem.  Também contamos com rastreamento de frete e controle de compatibilidade. Cadastre-se já, e fique por dentro do comportamento do mercado, das demandas das empresas, das tendências nas rodovias, e muito mais.</p>
        </div>
      </ion-content>
    </ion-page>
  </template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { contrast, helpOutline } from 'ionicons/icons';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    return {
      contrast,
      helpOutline
    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>