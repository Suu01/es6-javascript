const infiniteArgs = (...kimch) => console.log(kimch);
infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4]);

const bestFriendMaker = (firstOne, ...rest) => {
  console.log(`My friend is ${firstOne}`);
  console.log(rest);
};
bestFriendMaker("nico", "lynn", "dall", "japan guy");
