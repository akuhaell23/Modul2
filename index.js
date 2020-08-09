const express = require('express');     //untuk import express
const bodyParser = require('body-parser');      //impor dependency body-parser
const app = express();                  // deklarasi variable express
const port = 8080;                      //deklarasi port

app.use(bodyParser.urlencoded({ extended: false }));    //diatas endpoint agar dapat dieksekusi

app.get('/', function(req, res) {
    res.send('Halo programmers!');
})

app.listen(port, function() {
    console.log('Terkoneksi!');
})

app.get('/orang/:nama', function(req, res) {       //function untuk deklarasi endpoint '/' untuk memunculkan respon kpd web   //endpoint '/'
    var namaOrang = req.params.nama;               //deklarasi variabel namaOrang
    res.end('Menampilkan nama siswa: ' + namaOrang);      //output di web
});

app.post('/orang', function(req, res) {           //function untuk 'listening port' agar web dapat dibuka di port
    var namaOrang = req.body.nama; 
    var alamat = req.body.alamat;
    res.end('Menampilkan orang baru, atas nama: ' + namaOrang + ', yang beralamat di ' + alamat);
});

app.delete('/orang/:id', function(req, res) {      //penghapusan data akan dilakukan secara spesifik dengan parameter 
    var id = req.params.id;
    var namaOrang = req.body.nama;
    res.end('ID ' + id + ' telah dihapus, atas nama ' + namaOrang);
})

app.put('/orang/:id', function(req, res) {
    var id = req.params.id;
    var namaOrang = req.body.nama;
    var alamat = req.body.alamat;
    res.end('Seseorang dengan ID ' + id + ', telah terupdate.');
})


