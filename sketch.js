let images = [];
let images_index = []
let numImages = 10;

function preload() {
  // Randomly select four images.
  while (images_index.length < 4) {
    let index = int(random(10));
    if (!images_index.includes(index)) {
      images_index.push(index);
    }
  }
  for (let i = 0; i < images_index.length; i++) {
    images.push(loadImage("assets/" + images_index[i] + ".jpg"));
  }
}

function setup() {
  createCanvas(800, 600);
  generate_collage();
}

function generate_collage() {
  background(255);
  let x = 0;
  let y = 0;
  let w = width / 2;
  let h = height / 2;
  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    change_filters(img);
    image(img, x, y, w, h);
    x += w;
    if (x >= width) {
      x = 0;
      y += h;
    }
  }
}

function change_filters(img) {
  let randomFilter = int(random(4));
  switch (randomFilter) {
    case 0:
      img.filter(GRAY);
      break;
    case 1:
      img.filter(BLUR, int(random(3)));
      break;
    case 2:
      img.filter(THRESHOLD, int(random(10)) / 10);
      break;
    case 3:
      img.filter(INVERT);
      break;
    case 4:
      img.filter(POSTERIZE, int(random(3)));
      break;
  }
}
