function orderBy(order, characters) {
  if (order === "asc") {
    return characters.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (order === "desc") {
    return characters.sort((a, b) => b.name.localeCompare(a.name));
  }
  return sortByGender(characters, order);
}

function sortByGender(objectsArray, gender) {
  const sortedArray = objectsArray.filter((obj) => obj.gender === gender);
  const otherArray = objectsArray.filter(
    (obj) => obj.gender !== gender && obj.gender !== "n/a"
  );
  const otherAndNAArray = objectsArray.filter((obj) => obj.gender === "n/a");
  return [...sortedArray, ...otherArray, ...otherAndNAArray];
}

export default orderBy;
