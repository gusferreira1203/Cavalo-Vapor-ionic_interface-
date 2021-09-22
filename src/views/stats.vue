  <template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Histórico e Estatísticas</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Histórico e Estatísticas</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-card><ion-card-header>Gráfico A</ion-card-header><ion-card-content>--------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------</ion-card-content></ion-card>
        <ion-card><ion-card-header>Gráfico B</ion-card-header><ion-card-content>--------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------</ion-card-content></ion-card>
        <ion-card><ion-card-header>Gráfico C</ion-card-header><ion-card-content>--------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------</ion-card-content></ion-card>
        <ion-card><ion-card-header>Gráfico D</ion-card-header><ion-card-content>--------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------
          --------------------------------------------------</ion-card-content></ion-card>

        <ion-list>
          <ion-list-header>Sua Atividade</ion-list-header>
          <ion-item>
            Frete X<ion-badge slot="end">02/09/2021</ion-badge>
          </ion-item>
          <ion-item>
            Frete Y<ion-badge slot="end">04/09/2021</ion-badge>
          </ion-item>
          <ion-item>
            Frete Z<ion-badge slot="end">04/09/2021</ion-badge>
          </ion-item>
          <ion-item>
            Frete Alfa<ion-badge slot="end">08/09/2021</ion-badge>
          </ion-item>
          <ion-item>
            Frete Beta<ion-badge slot="end">14/09/2021</ion-badge>
          </ion-item>
          <ion-item>
            Frete Gama<ion-badge slot="end">22/09/2021</ion-badge>
          </ion-item>
          <ion-item>
            Frete Delta<ion-badge slot="end">29/09/2021</ion-badge>
          </ion-item>
        </ion-list>

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