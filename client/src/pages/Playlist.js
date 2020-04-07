import React, { Component } from "react";
import API from "../utils/playlist.api";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

export default class Playlist extends Component {
  state = {
    playlists: [],
  };
  componentDidMount() {
    console.log("DATA got mounted");
    API.getPlaylistHappy()
      .then((response) => {
        var playlistItems = response.data.body.playlists.items;
        console.log(playlistItems);
        this.setState({
          playlists: playlistItems,
        });
      })
      .catch((err) => {
        console.log("Mounting error" + err);
      });
  }
  render() {
    return (
      <IonApp>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Playlist</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {this.state.playlists.map((playlist) => {
              return (
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              );
            })}
          </IonContent>
        </IonPage>
      </IonApp>
    );
  }
}
