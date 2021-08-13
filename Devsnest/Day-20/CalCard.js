import "./App.css";

export default function CalCard({ calory, food, id,setData, data }) {
  const deleteElements = (e) => {
    const deleting = data.filter((ele) => ele.id !== id);
    setData([...deleting]);
  };
  return (
    <div className="card">
      <div className="food">
        <h1>{food}</h1>
        <button onClick={deleteElements}>Delete</button>
      </div>
      <h2>You have consumed {calory} calories today!</h2>
    </div>
  );
}
