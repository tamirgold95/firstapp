const Div = ({ tasks ,checkedTask,setCheckesTask,counter}) => {
    const handlerCheckedList = (event) => {
        let updatedList = [...checkedTask];
        if (event.target.checked) {
         updatedList = [...checkedTask, event.target.value];
        } else {
          updatedList.splice(checkedTask.indexOf(event.target.value), 1);
        }
        setCheckesTask(updatedList);
      }

    return <div>
    {
      tasks.map((item, index) => (
        <div key={index}>
          <input value={item} type="checkbox" onChange={handlerCheckedList}/>
          <span>{item}</span>
        </div>
      ))
        }
        <label>{counter} tasks left</label>
  </div>
}

export default Div;