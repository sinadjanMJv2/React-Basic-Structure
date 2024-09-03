function Food() {
  const food = ["Banana", "Apple"];

  const [food1,food2] = food;
  
  return (
    <ul>
      <li>Orange</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
     
    </ul>
  );
}

export default Food;
