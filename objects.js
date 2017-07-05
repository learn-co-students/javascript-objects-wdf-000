var playlist = {
  Kaskade : 'Under The Stars',
  PorterRobinson : 'Hear The Bells'
};

function updatePlaylist(obj, artist, song){
  obj[artist] = song;
  return obj;
}

function removeFromPlaylist(obj, artist){
  delete obj[artist]
  return obj;
}
