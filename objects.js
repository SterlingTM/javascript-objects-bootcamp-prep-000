var playlist = {artistName: 'song'};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { artistName: [songTitle] });
  playlist;
  return playlist;
}