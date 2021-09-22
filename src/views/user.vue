  <template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Usuário</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Usuário</ion-title>
          </ion-toolbar>
        </ion-header>


        <ion-thumbnail style="margin: auto; --border-radius: 100px; --size: 200px; margin-top: 25px; margin-bottom: 25px;">
          <img src="https://pm1.narvii.com/6943/0c55a2419b9992b0b3af8246e2a08d80becdc623r1-288-294v2_hq.jpg">
        </ion-thumbnail>
        <ion-item>
          <ion-label>Imagem</ion-label>
          <ion-input value="https://pm1.narvii.com/6943/0c55a2419b9992b0b3af8246e2a08d80becdc623r1-288-294v2_hq.jpg" color="medium" type="file"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Nome</ion-label>
          <ion-input value="Borso" color="medium" type="text"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Senha</ion-label>
          <ion-input value="mulherdotemer" color="medium" type="password"></ion-input>
        </ion-item>
        <ion-list>
          <ion-item>
            <ion-label>Telefones</ion-label>
            <ion-input value="47969696969" color="medium" type="tel"></ion-input>
          </ion-item>
        </ion-list>
        <ion-list>
          <ion-item>
            <ion-label>E-mails</ion-label>
            <ion-input value="clo.ro.ki.na@taok.com" color="medium" type="email"></ion-input>
          </ion-item>
        </ion-list>

        <ion-button fill="outline" style="width: 45%">Cancelar</ion-button>
        <ion-button fill="solid" style="width: 45%">Salvar</ion-button>

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