var playlist = new Object({ artistName: 'songName'});

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {[artistName]: songTitle});
  
  // Solution
  // playlist[artist] = song
  // return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}