const clientId = "087e53f9aa33461e964d8f9b11631ea3";
const clientSecret = "d37a2026430643198592d2a41fb4afef";

// Fetch Spotify Access Token
export async function getAccessToken(): Promise<string> {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
}

// Fetch playlist by mood keyword
export async function getTracksByMood(mood: string): Promise<any[]> {
  const token = await getAccessToken();

  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${mood}&type=playlist&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (data.playlists.items.length > 0) {
    const playlistId = data.playlists.items[0].id;

    const playlistResponse = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const playlistData = await playlistResponse.json();
    return playlistData.items.map((item: any) => ({
      name: item.track.name,
      artist: item.track.artists[0].name,
      preview: item.track.preview_url,
      url: item.track.external_urls.spotify,
    }));
  }

  return [];
}
