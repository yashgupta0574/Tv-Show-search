const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);

  //.............IMPORTANT......................//
  let i = document.images.length - 1;
  while (document.images.length) {
    document.images[i].parentNode.removeChild(document.images[i]);
    i--;
  }
  //.............IMPORTANT......................//
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

// const removeImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("IMG");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };
