  <template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Chats</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Chats</ion-title>
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
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-avatar>
                <img src="https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2018/12/meme-do-pikachu-surpreso-og.jpg" alt="" srcset="">
              </ion-avatar>
              <ion-label>C.A.R.A.L.H.O</ion-label>
            </ion-col>
            <ion-col>
              <ion-avatar>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/The_death.svg/559px-The_death.svg.png" alt="" srcset="">
              </ion-avatar>
              <ion-label>Mortuário</ion-label>
            </ion-col>
            <ion-col>
              <ion-avatar>
                <img src="https://i.pinimg.com/736x/3b/e8/c1/3be8c10ae466678aa957ca492a400a09.jpg" alt="" srcset="">
              </ion-avatar>
              <ion-label>Grupo da Família</ion-label>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
              <ion-avatar>
                <img src="data:image/jpeg;base64,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" alt="" srcset="">
              </ion-avatar>
              <ion-label>3info2</ion-label>
            </ion-col>
            <ion-col>
              <ion-avatar>
                <img src="https://a-static.mlcdn.com.br/618x463/bandeira-do-portugal-30x42-cm-banderminas/wgilbandeiras/277/671413e4e195e0e445e4f035a5bb093e.jpg" alt="" srcset="">
              </ion-avatar>
              <ion-label>Bonde do Rei</ion-label>
            </ion-col>
        </ion-row>
      </ion-grid>

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

ion-col{
  justify-content: center;
  align-items: center;
}

</style>