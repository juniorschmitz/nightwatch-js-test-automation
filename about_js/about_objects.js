var album = {
  title: 'Black Album',
  released: 1991,
  showInfo: function() {
    console.log(`Titulo do album: ${this.title}, lançado em: ${this.released}`)
  }
}

album.showInfo();
console.log(album.title);
console.log(album.released);

album.tracks = ['Enter Sandman', 'The Unforgiven', 'Nothing Else Matters', 'The Struggle Within']

album.showTracks = function() {
  this.tracks.forEach(function(value, key) {
    console.log(value)
  })
}
album.showTracks();


var album2 = new Object();
album2.title = 'Master of Puppets';
album2.released = 1993;
album2.showInfo = function() {
  console.log(`Titulo do album: ${this.title}, lançado em: ${this.released}`)
}

album2.showInfo();