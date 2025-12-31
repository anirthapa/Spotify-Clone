export const spotifyApi = {
  getPlaylist: async (playlistId) => {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.json();
  },
};

const accessToken = "YOUR_SPOTIFY_ACCESS_TOKEN";
// Replace 'YOUR_SPOTIFY_ACCESS_TOKEN' with a valid Spotify access token.
// You can obtain an access token by following Spotify's Authorization Guide.
// Documentation: https://developer.spotify.com/documentation/general/guides/authorization-guide/
// Make sure to handle token expiration and refresh as needed.
// Note: This is a simplified example. In a production application,
// consider using a library to manage OAuth tokens securely.
// Example usage:
spotifyApi.getPlaylist("37i9dQZF1DXcBWIGoYBM5M").then((data) => {
  console.log(data);
});
