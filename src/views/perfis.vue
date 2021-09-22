  <template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Perfis</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Perfis</ion-title>
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
                <img src="https://im.indiatimes.in/content/itimes/video/2016/Jan/26/1453747445-he-only-wanted-onions-a-full-stop-punctuation-production.jpg?w=232&h=300&cc=1" alt="" srcset="">
              </ion-avatar>
              <ion-label>Caminhoneiro Maneiro</ion-label>
            </ion-col>
            <ion-col>
              <ion-avatar>
                <img src="https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2020/09/Rubeus-Hagrid.jpg" alt="" srcset="">
              </ion-avatar>
              <ion-label>Antenor Trabalhador</ion-label>
            </ion-col>
            <ion-col>
              <ion-avatar>
                <img src="https://i.ytimg.com/vi/1e9vGfIlSUg/mqdefault.jpg" alt="" srcset="">
              </ion-avatar>
              <ion-label>Adalberto Expérto</ion-label>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
              <ion-avatar>
                <img src="data:image/jpeg;base64,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" alt="" srcset="">
              </ion-avatar>
              <ion-label>Marcola Coca-Cola</ion-label>
            </ion-col>
            <ion-col>
              <ion-avatar>
                <img src="http://midia.gruposinos.com.br/_midias/jpg/2016/10/19/500x352/1_rino-2811041.jpg" alt="" srcset="">
              </ion-avatar>
              <ion-label>Elvis bom de pélvis</ion-label>
            </ion-col>
            <ion-col>
              <ion-avatar>
                <img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2017/10/riddler.jpg" alt="" srcset="">
              </ion-avatar>
              <ion-label>Dentista do Lenin defunto</ion-label>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
              <ion-avatar>
                <img src="https://www.diariodocentrodomundo.com.br/wp-content/uploads/2019/12/allan-600x360.jpg" alt="" srcset="">
              </ion-avatar>
              <ion-label>Simas Turbo Automecanica</ion-label>
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