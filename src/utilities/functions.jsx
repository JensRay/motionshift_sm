// Random sorting method for the images

export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Two functions sorting from images with the post frequent authors.

export function nameCounts(objects) {
  return objects.reduce((acc, obj) => {
    acc[obj.photographer] = (acc[obj.photographer] || 0) + 1;
    return acc;
  }, {});
}

export function sortedObjects(objects) {
  const counts = nameCounts(objects);
  return objects.sort(
    (a, b) => counts[b.photographer] - counts[a.photographer]
  );
}
