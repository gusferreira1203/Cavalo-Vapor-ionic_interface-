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
        
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://veja.abril.com.br/wp-content/uploads/2016/06/imperdivel-2010-shrek-original.jpeg?quality=70&strip=info&w=680&h=453&crop=1s" />
            </ion-avatar>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://veja.abril.com.br/wp-content/uploads/2016/06/imperdivel-2010-shrek-original.jpeg?quality=70&strip=info&w=680&h=453&crop=1s" />
            </ion-avatar>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://veja.abril.com.br/wp-content/uploads/2016/06/imperdivel-2010-shrek-original.jpeg?quality=70&strip=info&w=680&h=453&crop=1s" />
            </ion-avatar>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://veja.abril.com.br/wp-content/uploads/2016/06/imperdivel-2010-shrek-original.jpeg?quality=70&strip=info&w=680&h=453&crop=1s" />
            </ion-avatar>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://veja.abril.com.br/wp-content/uploads/2016/06/imperdivel-2010-shrek-original.jpeg?quality=70&strip=info&w=680&h=453&crop=1s" />
            </ion-avatar>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://veja.abril.com.br/wp-content/uploads/2016/06/imperdivel-2010-shrek-original.jpeg?quality=70&strip=info&w=680&h=453&crop=1s" />
            </ion-avatar>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </ion-label>
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

ion-col{
  justify-content: center;
  align-items: center;
}

</style>