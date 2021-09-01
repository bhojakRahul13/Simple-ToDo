import React,{useState} from 'react'
import Plan from './Plan';
import "./Todo.css";
const ToDo = () => {
    const [items, setsItems] = useState([]);
    const [text, setsText] = useState("");
    
    const handleChange= (e) => {
        setsText(e.target.value);
    }
    const handleClick= (e) => {
        if(text !== "") {
            const item = [...items,text];
            setsItems(item);
            setsText("");
        }
    }

    const handleDelete= (id) => {
        console.log("Delete",id);
        const oldItem = [...items];
        const item = oldItem.filter((ele,i)=>{
            return i !== id;    
        })
        setsItems(item);
        
    }

    return (
        
        <div className="container-fluid my-5">
            
            <div className="row">
        
                <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
        
                  <h1 className="text-center">Today's Plan</h1> 
                  <div className="row">
                      <div className="col-9">
                          <input type="text" value={text} onChange={handleChange} className="form-control" placeholder="add your tasks   "/>
                      </div>
                      <div className="col-2">
                          <button  onClick={handleClick} className="btn btn-warning px-5 fw-bold">Add</button>
                      </div>
                      <div className="container-fluid">
                          {/* <ul className="list-unstyled row m-5">
                              {
                                  items.map((item, i) =>{
                                      return(
                                          <Plan  handleDelete={handleDelete} id={i} value={item} key={i} />
                                      )
                                  })
                              }
                          </ul> */}
                            <ul className="list-unstyled row m-5">
                                <Plan  handleDelete={handleDelete} item={items}/>
                          </ul>
                      </div>
                     </div>
                  </div>
            </div>
        </div>
    )
}

export default ToDo
