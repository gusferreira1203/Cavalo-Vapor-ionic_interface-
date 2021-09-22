  <template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Fretes</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Fretes</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-searchbar></ion-searchbar>
        <div style="display:flex; margin: auto; justify-content: space-around">
          <ion-button color="medium">Ordenar
            <ion-select interface="popover">
              <ion-select-option>a</ion-select-option>
              <ion-select-option>b</ion-select-option>
              <ion-select-option>c</ion-select-option>
              <ion-select-option>d</ion-select-option>
            </ion-select>
          </ion-button>
          <ion-button color="medium">Filtros
            <ion-select interface="popover">
              <ion-select-option>a</ion-select-option>
              <ion-select-option>b</ion-select-option>
              <ion-select-option>c</ion-select-option>
              <ion-select-option>d</ion-select-option>
            </ion-select>
          </ion-button>
        </div>

        <ion-button expand="block">Novo</ion-button>

        <ion-list>
          <ion-list-header>Em andamento:</ion-list-header>
          <ion-item>
            45.000 L de leite condenado para o governo federal<br>
            Saída: Inferninho, 06/06/2006 18:06<br>
            Chegada: Brasília, 07/06/2006 04:20
            <ion-button slot="end" style="width: 80px; height: 80px;">
              Mapa
            </ion-button>
          </ion-item>
          <ion-list-header>Disponíveis:</ion-list-header>
          <ion-item>
            20.000 kg de açúcar mascado<br>
            Saída: Da frente do If, 08/06/2040 19:19<br>
            Chegada: Casa do Caralho, 12/06/2040 02:45
            <ion-button slot="end">Candidatar-se</ion-button>
          </ion-item>
          <ion-item>
            Fontes do Dauto sobre a fome em Cuba<br>
            Saída: A boca dele, 13/02/2019 08:15<br>
            Chegada: Nárnia, dia de São Nunca ∞:∞
            <ion-button slot="end">Candidatar-se</ion-button>
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

ion-item{
  margin-top: 15px;
}
</style>