  <template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Network</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Network</ion-title>
          </ion-toolbar>
        </ion-header>
          
        <ion-button expand="block">Novo</ion-button>

        <ion-list>
          <ion-list-header><h1>Filiais</h1></ion-list-header>

          <ion-item>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Filial Paraná</ion-card-title>
                <div>
                  <ion-button><ion-icon :icon="information"></ion-icon></ion-button>
                  <ion-button>Fechar</ion-button>
                </div>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-list-header>Funcionários</ion-list-header>
                  <ion-item>Roberto Esponja</ion-item>
                  <ion-item>Luis Ignácio Molusco</ion-item>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </ion-item>

          <ion-item>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Filial SC</ion-card-title>
                <div>
                  <ion-button><ion-icon :icon="information"></ion-icon></ion-button>
                  <ion-button>Fechar</ion-button>
                </div>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-list-header>Funcionários</ion-list-header>
                  <ion-item>Hamilton Mourinho</ion-item>
                  <ion-item>Roberto Terrestre</ion-item>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </ion-item>

        </ion-list>
          
        <ion-button expand="block">Novo</ion-button>

          <ion-list>
          <ion-list-header>Funcionários</ion-list-header>
          <ion-item>
            Seu Zé
            <ion-button slot="end"><ion-icon :icon="information"></ion-icon></ion-button>
            <ion-button slot="end">Demitir</ion-button>
          </ion-item>
          <ion-item>
            Seu Tonho
            <ion-button slot="end"><ion-icon :icon="information"></ion-icon></ion-button>
            <ion-button slot="end">Demitir</ion-button>
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

ion-card{
  width:100%;
}

ion-card-header{
  width:100%;
  display: flex;
  justify-content: space-between;
}
</style>