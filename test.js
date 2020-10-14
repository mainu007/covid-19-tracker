const list = {
   101: 10,
   102: 20,
   103: 30,
   104: 40,
};

const create = (obj) => {
   const newArr = [];
   for (let name in obj) {
      let newObj = { x: name, y: obj[name] };
      newArr.push(newObj);
   }
   return newArr;
};

const result = create(list);

console.log(result);
