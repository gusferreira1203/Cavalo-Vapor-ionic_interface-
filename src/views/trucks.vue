  <template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Caminhões e Carretas</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Caminhóes e Carretas</ion-title>
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

        <ion-list>
          <ion-list-header>
            Seus Caminhões <ion-button slot="end"><ion-icon :icon="information"></ion-icon></ion-button> <ion-button slot="end">Deletar</ion-button>
          </ion-list-header>
          <ion-item>
            Optimus Prime <ion-button slot="end"><ion-icon :icon="information"></ion-icon></ion-button> <ion-button slot="end">Deletar</ion-button>
          </ion-item>
          <ion-item>
            Mate do Carros <ion-button slot="end"><ion-icon :icon="information"></ion-icon></ion-button> <ion-button slot="end">Deletar</ion-button>
          </ion-item>
          <ion-item>
            ban-bou-bi <ion-button slot="end"><ion-icon :icon="information"></ion-icon></ion-button> <ion-button slot="end">Deletar</ion-button>
          </ion-item>
          <ion-item>
            Furgão do Vô Max <ion-button slot="end"><ion-icon :icon="information"></ion-icon></ion-button> <ion-button slot="end">Deletar</ion-button>
          </ion-item>
          <ion-list-header>
            Suas Carretas
          </ion-list-header>
          <ion-item>
            Bitorneira (Conhece não?) da Premix <ion-button slot="end"><ion-icon :icon="information"></ion-icon></ion-button> <ion-button slot="end">Deletar</ion-button>
          </ion-item>
          <ion-item>
            Armário do Renan <ion-button slot="end"><ion-icon :icon="information"></ion-icon></ion-button> <ion-button slot="end">Deletar</ion-button>
          </ion-item>
          <ion-item>
            Tabuleiro do Marco <ion-button slot="end"><ion-icon :icon="information"></ion-icon></ion-button> <ion-button slot="end">Deletar</ion-button>
          </ion-item>
        </ion-list>

      </ion-content>
    </ion-page>
  </template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { contrast, helpOutline, information } from 'ionicons/icons';

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
      helpOutline,
      information
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