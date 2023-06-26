const sampleItems = [];

for (let i = 1; i <= 5; i++) {
  const id = i;
  const photos = [];

  for (let j = 0; j < 3; j++) {
    const randomPhotoId = Math.floor(Math.random() * 1000) + 1;
    const photoUrl = `https://picsum.photos/id/${randomPhotoId}/200/200`;
    photos.push(photoUrl);
  }

  const title = `Sample Item ${i}`;
  const description = `This is sample item number ${i}.`;
  const price = Math.floor(Math.random() * 100) + 1;
  const categoryId = Math.floor(Math.random() * 10) + 1; // Generate a random categoryId between 1 and 10

  const item = { id, photos, title, description, price, categoryId };
  sampleItems.push(item);
}

console.log(sampleItems);
