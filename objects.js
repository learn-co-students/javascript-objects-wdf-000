var playlist = {
	machel: "E.P.I.C",
	destra: "Lucy"
};

function updatePlaylist(playlist, artistName, songTitle) {
	playlist[artistName] = songTitle
	return playlist
}

function removeFromPlaylist(playlist, artistName) {
	delete playlist[artistName]
	return playlist
}