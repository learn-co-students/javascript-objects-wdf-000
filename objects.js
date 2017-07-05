var playlist = { KanyeWest: "Graduation" };

function updatePlaylist(playlist, artistName, songTitle) {
  var newplaylist = Object.assign({}, playlist, { [artistName]: songTitle})  
 return newplaylist 
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist 
}
