import { useState,useEffect} from "react";
import TrackExpence from "./TrackExpence";
function Expence(){
    const getLocalData = ()=>{
        let store = localStorage.getItem("setExpences");
        if(store){
            return JSON.parse(store);
        }
        else{
            return [];
        }
    }
    const [expence,setExpence] =useState(getLocalData);
    const [name,setname] = useState('');
    const [item,setItem]= useState('');
    function AddItems(){
        if(expence){
        setname("");
        setItem("");
        }
        setExpence([...expence,[name,item]]);  
    }
    function nameChange(e){
     setname(e.target.value);  
    }
    function itemsChange(e){
        setItem(e.target.value);
    }
    function Delete(index){
        const newArray = [...expence];
        newArray.splice(index, 1);
        setExpence(newArray);
      };
    function ClearAll(index){
        const newArray = [...expence];
        newArray.splice(index);
        setExpence(newArray);
      };

      useEffect(()=>{
        localStorage.setItem("setExpences",JSON.stringify(expence));
       },[expence]);

    return(
        <>
       <div className="Expence_traker">
       <h1>Expence Traker</h1>
       <div className="name">
        <label htmlFor="">item name</label>
        <input type="text"  
        value={name}
         onChange={nameChange}  
        placeholder="Enter item name "/>
       </div>
       <div className="Amount"> 
        <label htmlFor="">Item Amount</label>
        <input type="text" 
        value={item}
        onChange={itemsChange}
        placeholder="Enter  amount"/>
       </div>
       <div className="btn">
        <button className="btn1 " onClick={AddItems}>Add Item</button>
        <button className="btn2" onClick={()=>ClearAll()}>Clear All</button>
       </div>
       </div>
       {
         expence.map((data,index)=>{
            return(
            <>
            <TrackExpence key={index} data={data} name={name}
            index={index} 
            Delete={Delete} 
        />
            </>
         )})
       }
        </>
    )
}
export default Expence;