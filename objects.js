var playlist = {"Phil Ochs": 'song'} 

function updatePlaylist(obj, key, value) {
  
  return Object.assign({}, obj, { [key]: value})
}