// // //contoh
// // let ditepati = true;
// // const janji = new Promise((resolve, reject) => {
// //   if (ditepati) {
// //     resolve("Janji telah ditepati");
// //   } else {
// //     reject("ingkar janji");
// //   }
// // });

// //contoh
// // let ditepati = false;
// // const janji2 = new Promise((iya, nggak) => {
// //   if (ditepati) {
// //     setTimeout(() => {
// //       iya("Ditepati setelah nunggu");
// //     }, 3000);
// //   } else {
// //     setTimeout(() => {
// //       nggak("Tidak ditepati setelah nunggu");
// //     }, 3000);
// //   }
// // });

// // console.log("start");
// // // console.log(janji2.then(() => console.log(janji2)));
// // janji2
// //   .finally(() => console.log(`Selesai Menunggu`))
// //   .then((respon) => console.log(`Halooo ${respon}`))
// //   .catch((respon) => console.log(`Woiiii ${respon}`));
// // console.log("finish");

// // promise all
// const film = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         judul: "Dilan 1990",
//         pemeran: "Iqbal dan Vanesha",
//         tahun: "2017",
//       },
//     ]);
//   }, 10000);
// });

// const cuaca = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         kota: "Bandung",
//         suhu: "20",
//         keterangan: "dingin",
//       },
//     ]);
//   }, 3000);
// });

// film.then((respon) => console.log(respon));
// cuaca.then((respon) => console.log(respon));

// latihan;
// http://www.omdbapi.com/?apikey=b08b5f6&
// "tt0988824"

$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=b08b5f6&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      // console.log(movies);
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      // ketika tombol detail di kik
      $(".modal-detail-button").on("click", function () {
        //   console.log($(this).data("imdbid"));
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=b08b5f6&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showMovieDetails(m);
            $(".modal-body").html(movieDetail);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCards(m) {
  return `<div class="col-md-3 my-5">
    <div class="card">
      <img src="${m.Poster}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
        data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Lihat Detail</a>
      </div>
    </div>
  </div>`;
}

function showMovieDetails(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" alt="" />
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director :</strong>${m.Director}</li>
                  <li class="list-group-item"><strong>Actors :</strong>${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer :</strong>${m.Writer}</li>
                  <li class="list-group-item"><strong>IMDB ID :</strong>${m.imdbID}</li>
                </ul>
              </div>
            </div>
          </div>`;
}

function pencet() {
  setTimeout(() => {
    document.getElementById("myID").classList.add("hidden");
  }, 500);
}
