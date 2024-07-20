const clientId = "37f50205b3344a1c8a334ec826d72e2b";
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
};

export default spotify;
