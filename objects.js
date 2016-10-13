var playlist = {
  'Guy Who Sings': 'A Song',
  MichaelJackson: 'Thriller'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist = { [artistName]: songTitle };
  return playlist;
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist[artistName];
  return playlist;
}
