var playlist = {"Phil Ochs": 'song'} 

function updatePlaylist(obj, key, value) {
  
  return Object.assign({}, obj, { [key]: value})
}

function removeFromPlaylist(obj, key) {
 var playlist = {obj: key}
  delete obj.key;
  
  return playlist;
}