const clientId = "02c845cb02364eb490f80f9e7052326b";
const redirectUri = "http://localhost:3000";
const scopes = "playlist-modify-public";
let accessToken;

const spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`;
      window.location = accessUrl;
    }
  },
  async getSearchResults(term) {
    this.getAccessToken();
    if (accessToken) {
      const url = `https://api.spotify.com/v1/search?q=${term}&type=track&include_external=audio`;
      try {
        const request = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const response = await request.json();
        if (response.tracks) {
          return response.tracks.items.map((track) => ({
            name: track.name,
            album: track.album.name,
            artist: track.artists[0].name,
            uri: track.uri,
            id: track.id,
          }));
        } else {
          return [];
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return [];
    }
  },
  async postPlayList(name, tracks) {
    spotify.getAccessToken();
    let uris = [];
    tracks.map((track) => uris.push(track.uri));
    console.log(uris);
    if (accessToken) {
      try {
        const headers = { Authorization: `Bearer ${accessToken}` };
        const requestUserId = await fetch("https://api.spotify.com/v1/me", {
          method: "GET",
          headers: headers,
        }).then((responseUserID) =>
          responseUserID.json().then((json) => json.id)
        );
        const requestCreatePlayList = await fetch(
          `https://api.spotify.com/v1/users/${requestUserId}/playlists`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
              name: name,
            }),
          }
        ).then(async () => {
          const requestPlayListId = await fetch(
            "https://api.spotify.com/v1/me/playlists",
            {
              method: "GET",
              headers: headers,
            }
          ).then((response) =>
            response.json().then((json) => json.items[0].id)
          );
          const requestPostTracks = await fetch(
            `https://api.spotify.com/v1/playlists/${requestPlayListId}/tracks`,
            {
              method: "POST",
              headers: headers,
              body: JSON.stringify({
                uris: uris,
              }),
            }
          );
          return requestPostTracks;
        });
        return requestCreatePlayList;
      } catch (error) {
        console.log(error);
      }
    }
  },
};

export default spotify;
