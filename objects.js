var playlist = { song1: "la", song2: "lala"}


function updatePlaylist(playlist, artistName, songTitle) {
  // name = `${artistName}`
  playlist[artistName] = songTitle

  return playlist
}


function removeFromPlaylist(playlist, artistName) {

  delete playlist[artistName];

  return playlist;
}
