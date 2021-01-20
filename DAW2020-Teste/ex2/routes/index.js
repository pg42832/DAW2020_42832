var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {

  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjAzMSwiZXhwIjoxNjExMTgwODMxfQ.hseQ7SKFjrmKVTcG1egagYg-ZNu3nYXSTOpfGBOmOXs8ucT03pmsPDQQu1DVr6DAOCBm3_Mv4ERZs9JEgsNCHcyKEc4gx21oI3XirLvdASCuUbXi2vrd_3MYOazJAfUJE_CLhK84UWRmAHRVEUJY_3P63DdmdgZYKPuuEQ6LbVcMlu2OWFFZAv2HHGfL7t1FeWLA6NbcnoMiezIYz-wiObdbxrGAWrkG9HCXuT4Ch-oOTH-6uimxHtRDiKN17xy-qqV4byv-KXg2qmZmO5lEK7lvjRE96ttEg92D7rA73ZMvCd_SL-SG-Ymjd3f1XKei-Q1KZFoRMTiQVgT8M1JAlA')
    .then(dados => {
      axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjAzMSwiZXhwIjoxNjExMTgwODMxfQ.hseQ7SKFjrmKVTcG1egagYg-ZNu3nYXSTOpfGBOmOXs8ucT03pmsPDQQu1DVr6DAOCBm3_Mv4ERZs9JEgsNCHcyKEc4gx21oI3XirLvdASCuUbXi2vrd_3MYOazJAfUJE_CLhK84UWRmAHRVEUJY_3P63DdmdgZYKPuuEQ6LbVcMlu2OWFFZAv2HHGfL7t1FeWLA6NbcnoMiezIYz-wiObdbxrGAWrkG9HCXuT4Ch-oOTH-6uimxHtRDiKN17xy-qqV4byv-KXg2qmZmO5lEK7lvjRE96ttEg92D7rA73ZMvCd_SL-SG-Ymjd3f1XKei-Q1KZFoRMTiQVgT8M1JAlA')
         .then(dados2 => {
      res.render('index', { lista: dados.data, lista2: dados2.data})
      console.log(dados.data);
      console.log(dados2.data);
         })
        .catch(erro => {
          res.render('error',{error: erro})
        })
    })
    .catch(erro => {
      res.render('error',{error: erro})
    })
});

router.get('/classes', function(req, res, next) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjAzMSwiZXhwIjoxNjExMTgwODMxfQ.hseQ7SKFjrmKVTcG1egagYg-ZNu3nYXSTOpfGBOmOXs8ucT03pmsPDQQu1DVr6DAOCBm3_Mv4ERZs9JEgsNCHcyKEc4gx21oI3XirLvdASCuUbXi2vrd_3MYOazJAfUJE_CLhK84UWRmAHRVEUJY_3P63DdmdgZYKPuuEQ6LbVcMlu2OWFFZAv2HHGfL7t1FeWLA6NbcnoMiezIYz-wiObdbxrGAWrkG9HCXuT4Ch-oOTH-6uimxHtRDiKN17xy-qqV4byv-KXg2qmZmO5lEK7lvjRE96ttEg92D7rA73ZMvCd_SL-SG-Ymjd3f1XKei-Q1KZFoRMTiQVgT8M1JAlA')
  .then(dados => {
    res.render('index', { lista: dados.data })
    console.log(dados.data);
  })
  .catch(erro => {
    res.render('error',{error: erro})
  })  
  // .then(dados => {
  //     axios.get()
  //       .then( => {
  //         res.render('classes', { lista: dados.data})
  //       })
  //       .catch(erro => {
  //         res.render('error',{error: erro})
  //       })
  //   })
  //   .catch(erro => {
  //     res.render('error',{error: erro})
  //   })
});

router.get('/termos', function(req, res, next) {
  axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjAzMSwiZXhwIjoxNjExMTgwODMxfQ.hseQ7SKFjrmKVTcG1egagYg-ZNu3nYXSTOpfGBOmOXs8ucT03pmsPDQQu1DVr6DAOCBm3_Mv4ERZs9JEgsNCHcyKEc4gx21oI3XirLvdASCuUbXi2vrd_3MYOazJAfUJE_CLhK84UWRmAHRVEUJY_3P63DdmdgZYKPuuEQ6LbVcMlu2OWFFZAv2HHGfL7t1FeWLA6NbcnoMiezIYz-wiObdbxrGAWrkG9HCXuT4Ch-oOTH-6uimxHtRDiKN17xy-qqV4byv-KXg2qmZmO5lEK7lvjRE96ttEg92D7rA73ZMvCd_SL-SG-Ymjd3f1XKei-Q1KZFoRMTiQVgT8M1JAlA')
    .then(dados => {
      res.render('termos', { lista: dados.data})
    })
    .catch(erro => {
      res.render('error',{error: erro})
    })
  
});

module.exports = router;



//da-me tudo sem estrutura
//http://clav-api.di.uminho.pt/v2/classes?estrutura=lista&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjAzMSwiZXhwIjoxNjExMTgwODMxfQ.hseQ7SKFjrmKVTcG1egagYg-ZNu3nYXSTOpfGBOmOXs8ucT03pmsPDQQu1DVr6DAOCBm3_Mv4ERZs9JEgsNCHcyKEc4gx21oI3XirLvdASCuUbXi2vrd_3MYOazJAfUJE_CLhK84UWRmAHRVEUJY_3P63DdmdgZYKPuuEQ6LbVcMlu2OWFFZAv2HHGfL7t1FeWLA6NbcnoMiezIYz-wiObdbxrGAWrkG9HCXuT4Ch-oOTH-6uimxHtRDiKN17xy-qqV4byv-KXg2qmZmO5lEK7lvjRE96ttEg92D7rA73ZMvCd_SL-SG-Ymjd3f1XKei-Q1KZFoRMTiQVgT8M1JAlA

//da-me lvl1
//http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjAzMSwiZXhwIjoxNjExMTgwODMxfQ.hseQ7SKFjrmKVTcG1egagYg-ZNu3nYXSTOpfGBOmOXs8ucT03pmsPDQQu1DVr6DAOCBm3_Mv4ERZs9JEgsNCHcyKEc4gx21oI3XirLvdASCuUbXi2vrd_3MYOazJAfUJE_CLhK84UWRmAHRVEUJY_3P63DdmdgZYKPuuEQ6LbVcMlu2OWFFZAv2HHGfL7t1FeWLA6NbcnoMiezIYz-wiObdbxrGAWrkG9HCXuT4Ch-oOTH-6uimxHtRDiKN17xy-qqV4byv-KXg2qmZmO5lEK7lvjRE96ttEg92D7rA73ZMvCd_SL-SG-Ymjd3f1XKei-Q1KZFoRMTiQVgT8M1JAlA

//da-me lvl2
//http://clav-api.di.uminho.pt/v2/classes?nivel=2&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjAzMSwiZXhwIjoxNjExMTgwODMxfQ.hseQ7SKFjrmKVTcG1egagYg-ZNu3nYXSTOpfGBOmOXs8ucT03pmsPDQQu1DVr6DAOCBm3_Mv4ERZs9JEgsNCHcyKEc4gx21oI3XirLvdASCuUbXi2vrd_3MYOazJAfUJE_CLhK84UWRmAHRVEUJY_3P63DdmdgZYKPuuEQ6LbVcMlu2OWFFZAv2HHGfL7t1FeWLA6NbcnoMiezIYz-wiObdbxrGAWrkG9HCXuT4Ch-oOTH-6uimxHtRDiKN17xy-qqV4byv-KXg2qmZmO5lEK7lvjRE96ttEg92D7rA73ZMvCd_SL-SG-Ymjd3f1XKei-Q1KZFoRMTiQVgT8M1JAlA

// da-me lvl3
// http://clav-api.di.uminho.pt/v2/classes?nivel=3&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjAzMSwiZXhwIjoxNjExMTgwODMxfQ.hseQ7SKFjrmKVTcG1egagYg-ZNu3nYXSTOpfGBOmOXs8ucT03pmsPDQQu1DVr6DAOCBm3_Mv4ERZs9JEgsNCHcyKEc4gx21oI3XirLvdASCuUbXi2vrd_3MYOazJAfUJE_CLhK84UWRmAHRVEUJY_3P63DdmdgZYKPuuEQ6LbVcMlu2OWFFZAv2HHGfL7t1FeWLA6NbcnoMiezIYz-wiObdbxrGAWrkG9HCXuT4Ch-oOTH-6uimxHtRDiKN17xy-qqV4byv-KXg2qmZmO5lEK7lvjRE96ttEg92D7rA73ZMvCd_SL-SG-Ymjd3f1XKei-Q1KZFoRMTiQVgT8M1JAlA

//da-me de uma classe especifica 
//http://clav-api.di.uminho.pt/v2/classes/c100.10.001?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjAzMSwiZXhwIjoxNjExMTgwODMxfQ.hseQ7SKFjrmKVTcG1egagYg-ZNu3nYXSTOpfGBOmOXs8ucT03pmsPDQQu1DVr6DAOCBm3_Mv4ERZs9JEgsNCHcyKEc4gx21oI3XirLvdASCuUbXi2vrd_3MYOazJAfUJE_CLhK84UWRmAHRVEUJY_3P63DdmdgZYKPuuEQ6LbVcMlu2OWFFZAv2HHGfL7t1FeWLA6NbcnoMiezIYz-wiObdbxrGAWrkG9HCXuT4Ch-oOTH-6uimxHtRDiKN17xy-qqV4byv-KXg2qmZmO5lEK7lvjRE96ttEg92D7rA73ZMvCd_SL-SG-Ymjd3f1XKei-Q1KZFoRMTiQVgT8M1JAlA

//da-me descendencia de uma classe
//http://clav-api.di.uminho.pt/v2/classes/c100.20/descendencia?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MjAzMSwiZXhwIjoxNjExMTgwODMxfQ.hseQ7SKFjrmKVTcG1egagYg-ZNu3nYXSTOpfGBOmOXs8ucT03pmsPDQQu1DVr6DAOCBm3_Mv4ERZs9JEgsNCHcyKEc4gx21oI3XirLvdASCuUbXi2vrd_3MYOazJAfUJE_CLhK84UWRmAHRVEUJY_3P63DdmdgZYKPuuEQ6LbVcMlu2OWFFZAv2HHGfL7t1FeWLA6NbcnoMiezIYz-wiObdbxrGAWrkG9HCXuT4Ch-oOTH-6uimxHtRDiKN17xy-qqV4byv-KXg2qmZmO5lEK7lvjRE96ttEg92D7rA73ZMvCd_SL-SG-Ymjd3f1XKei-Q1KZFoRMTiQVgT8M1JAlA



