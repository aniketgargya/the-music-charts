# The Music Charts
Demo available at https://the-music-charts.now.sh/

Buit with Tailwindcss, Next.js, Spotify API.

## Description
This app shows the Top 50 Global songs using the Spotify API. The album cover, artist, and song name are all displayed.

If the artist has allowed it, there is a preview for the song that can be played right from the website, but the song name is also a link to the song in Spotify. There is also an icon next to each song showing whether it is a popular TikTok song.

## Setup
To run this, download the repo and do the following.

- Create a Spotify Application at https://developer.spotify.com/dashboard/applications.

- Copy the client id.

- Add a redirect uri (for example http://localhost:3000/) by clicking on edit setting

- Install dependences:
```bash
npm install
```

- Create a ```.env``` file:
```bash
touch .env #on mac and linux
```

- Put your Spotify client id and redirect uri in the file like so:
```
NEXT_PUBLIC_CLIENT_ID=1234567890
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/
```

- Start in development mode:
```bash
npm run dev
```

- Start in production mode:
```bash
npm run build && npm run start
```

### 🥳It should be running 🥳

## Special Thanks
Checkout the demo at https://the-music-charts.now.sh/ and thanks to all of these companies!

[![Tailwindcss](/public/github-readme/tailwindcss.png)](https://tailwindcss.com/)

[![Next.js](/public/github-readme/nextjs.png)](https://nextjs.org/)

[![Spotify](/public/github-readme/spotify.png)](https://developer.spotify.com/)
