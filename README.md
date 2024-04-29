# Workshop 3：Images

## URL:
https://noon0v0.github.io/Workshop_3/


## Tasks:

- Collect a series of images. Make a p5.js sketch that generates a new collage each time the sketch is run.
- Include manipulations of the images so that they change over time, using filters and/or other kinds of computational interventions.

## Note:

- List

  Lists can store various objects, including numbers or Image objects. The index of a list starts from 0, and for a list of length n, the index ranges from 0 to n-1. Objects at position index + 1 in the list can be directly accessed using list[index].

- Random number：

  ~~~javascript
  int(random(n))
  ~~~

  It will randomly generate an integer from 0 to n-1.

- Switch：

  ~~~JavaScript
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
  ~~~

  The switch statement matches different cases based on the value following the switch. Each branch requires a break statement; otherwise, the code will continue executing the next case.

- filter：

  Multiple calls to the filter() function will stack their effects, and the effects will be applied to all images simultaneously. However, you can apply different filters to individual images by calling the filter() function on a p5.Image object with different parameters for each image.

## Project:

For the third task of the workshop, we implemented the functionality to randomly select four images from a pool of ten prepared images(In the assets folder) each time the sketch is executed. These four images are then arranged together in a four-grid layout. Additionally, each image will have one of five filters randomly applied to it.
