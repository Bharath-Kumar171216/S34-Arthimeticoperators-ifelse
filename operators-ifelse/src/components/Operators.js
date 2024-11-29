import React, { useRef } from 'react'


function Operators() {
   let firstInputName = useRef();
    let  lastInputName = useRef();
    let telInputMarks = useRef();
    let engInputMarks = useRef();
    let mathInputMarks = useRef();
    let socInputMarks = useRef();
    let sciInputMarks = useRef();
    let hinInputMarks = useRef();

    let totalLabelMarks =useRef();

    let telLabelMarks = useRef();
    let engLabelMarks = useRef();
    let mathLabelMarks = useRef();
    let socLabelMarks = useRef();
    let sciLabelMarks = useRef();
    let hinLabelMarks = useRef();
    
  return (
    <div>
        <form>
          <h1><ins>Score Card</ins></h1>
      <div>
        <label>First Name</label>
        <input type="text" ref={firstInputName} ></input>
        <label ></label>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" ref={lastInputName} ></input>
        <label></label>
      </div>
      <div>
        <label>Telugu</label>
        <input type="number"ref={telInputMarks}
        onChange={()=>{
          if(telInputMarks.current.value>=35){
            telLabelMarks.current.innerHTML = "Pass";  
          }else{
            telLabelMarks.current.innerHTML = "Fail"
          }
    }}
    onBlur={()=>{
          telInputMarks.current.style.backgroundColor="";  
    }}
    onFocus={()=>{
      telInputMarks.current.style.backgroundColor="lightblue";
    }}
        ></input>
        <label ref={telLabelMarks}></label>
      </div>
      <div>
        <label>English</label>
        <input type="number"ref={engInputMarks}
        onChange={()=>{
          if(engInputMarks.current.value>=35){
            engLabelMarks.current.innerHTML = "Pass";  
          }else{
            engLabelMarks.current.innerHTML = "Fail"
          }
    }}
    onBlur={()=>{
          engInputMarks.current.style.backgroundColor="";  
    }}
    onFocus={()=>{
      engInputMarks.current.style.backgroundColor="lightblue";
    }}
        ></input>
        <label ref={engLabelMarks}></label>
      </div>
      <div>
        <label>Maths</label>
        <input type="number"ref={mathInputMarks}
        onChange={()=>{
          if(mathInputMarks.current.value>=35){
            mathLabelMarks.current.innerHTML = "Pass"; 
          }else{
            mathLabelMarks.current.innerHTML = "Fail"
          }
    }}
    onBlur={()=>{
          mathInputMarks.current.style.backgroundColor="";  
    }}
    onFocus={()=>{
      mathInputMarks.current.style.backgroundColor="lightblue";
    }}
        ></input>
        <label ref={mathLabelMarks}></label>
      </div>
      <div>
        <label>Social</label>
        <input type="number"ref={socInputMarks}
        onChange={()=>{
          if(socInputMarks.current.value>=35){
            socLabelMarks.current.innerHTML = "Pass";  
          }else{
            socLabelMarks.current.innerHTML = "Fail"
          }
    }}
    onBlur={()=>{
          socInputMarks.current.style.backgroundColor="";  
    }}
    onFocus={()=>{
      socInputMarks.current.style.backgroundColor="lightblue";
    }}
        ></input>
        <label ref={socLabelMarks}  ></label>
      </div>
      <div>
        <label>Science</label>
        <input type="number"ref={sciInputMarks}
        onChange={()=>{
          if(sciInputMarks.current.value>=35){
            sciLabelMarks.current.innerHTML = "Pass";  
          }else{
            sciLabelMarks.current.innerHTML = "Fail"
          }
    }}
    onBlur={()=>{
          sciInputMarks.current.style.backgroundColor="";  
    }}
    onFocus={()=>{
      sciInputMarks.current.style.backgroundColor="lightblue";
    }}
        ></input>
        <label ref={sciLabelMarks}></label>
      </div>
      <div>
        <label>Hindi</label>
        <input type="number"ref={hinInputMarks}
        onChange={()=>{
          if(hinInputMarks.current.value>=35){
            hinLabelMarks.current.innerHTML = "Pass";  
          }else{
            hinLabelMarks.current.innerHTML = "Fail"
          }
    }}
    onBlur={()=>{
          hinInputMarks.current.style.backgroundColor="";  
    }}
    onFocus={()=>{
      hinInputMarks.current.style.backgroundColor="lightblue";
    }}
        ></input>
        <label ref={hinLabelMarks}></label>
      </div>
      <div><button type="button" onClick={()=>{
        let telMarks = Number(telInputMarks.current.value);
        let engMarks = Number(engInputMarks.current.value);
        let mathMarks = Number(mathInputMarks.current.value);
        let socMarks = Number(socInputMarks.current.value);
        let sciMarks = Number(sciInputMarks.current.value);
        let hinMarks = Number(hinInputMarks.current.value);
        // telLabelMarks.current.innerHTML =  telMarks>=35 ? "Pass" : "Fail";
        // engLabelMarks.current.innerHTML = engMarks>=35 ? "Pass" : "Fail";
        // mathLabelMarks.current.innerHTML = mathMarks>=35 ? "Pass" : "Fail";
        // socLabelMarks.current.innerHTML = socMarks>=35 ? "Pass" : "Fail";
        // sciLabelMarks.current.innerHTML = sciMarks>=35 ? "Pass" : "Fail";
        // hinLabelMarks.current.innerHTML = hinMarks>=35 ? "Pass" : "Fail";
        let total=  telMarks+ engMarks+ mathMarks+ socMarks+ sciMarks+ hinMarks;
        alert(` ${firstInputName.current.value}${lastInputName.current.value}Total marks are ${total}`);
        totalLabelMarks.current.innerHTML =`${firstInputName.current.value}${lastInputName.current.value} Total marks are ${total}`;
      }}>Button </button>
      </div>
      <div>
        <label ref={totalLabelMarks}>Total Marks are </label>
      </div>   
      </form>
      <hr></hr>
      <h1>Operators</h1>
      <div><button onClick={()=>{
        let a=3;
         a +=4;
         console.log(a)
         alert(a)
      }}
      >Addition</button>
        </div>
        <div><button
        onClick={()=>{
           let b=7;
           b -=7;
           console.log(b)
           alert(b)
        }}
        >Subtraction</button>
        </div>
        <div><button onClick={()=>{
          let c=10;
          c %= 5;
          console.log(c)
          alert(c)
        }
        }
        
        >Divide</button>
        </div>
        <div><button onClick={()=>{
          let d=20;
          d *= 10;
          console.log(d) 
          alert(d)
        }}
        
        >Multiplication</button>
        </div>

    </div>
  )
}   
export default Operators
