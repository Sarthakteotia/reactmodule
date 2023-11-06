import React ,{useState}from 'react'
import {CirclePicker } from 'react-color'

const Modal = ({ groupNamesParent, setGroupNamesParent}) => {
const[modal,setModal] = useState(false)
const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleColor = (e) => {
    const div = e.hex;
    console.log(div,"ivvv")
    setBgColor(div);
  };

  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    setModal(false)
  };

const toggalModal=()=>{
    setModal(!modal)
    }
const colors = ["#FF0000","#008000","#FFFF00","#000000"]
return (
<>
      <button
       onClick={toggalModal}
       className='btn-modal'>
        + Create Notes Group </button>
         
        {modal && <div className='modal'>
          <div onClick={toggalModal}
          className='overlay'></div>
          <div className='modal-content'>
            <h1>Create New Notes group</h1>
            <form>
                <lable>Group Name</lable>
                <input value={groupName}
          onChange={handleGroupName}/>
            </form>
            <div className='colors'>
                <p>
                Choose Color:
                {/* {colors.map((curColor,index)=>{
                    return <input type='radio' onClick={handleColor} key={index} style={{backgroundColor:curColor}} className='btn-style active'>
                      {}
                    </input>
                })} */}
                <CirclePicker colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3",]} onChange={handleColor}/>

                </p>
            </div>
            <button onClick={saveName} disabled={groupName.length === 0}>Create</button>
          </div>
        </div>
     }
</>
  )
}

export default Modal