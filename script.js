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
