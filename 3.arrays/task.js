function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
      }
      
      return arr1.every((num, index) => num === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0 || (gender !== "мужской" && gender !== "женский")) {
      return 0;
    }

    const sortByGender = users.filter(user => user.gender === gender);
    const res = sortByGender.reduce((acc, user) => {
      acc += user.age;
      return acc;
    }, 0)
    
    return res / sortByGender.length;
}