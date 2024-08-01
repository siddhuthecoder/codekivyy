import node from './assets/nodejs.svg'
import css from "./assets/css3-plain.svg"
import python from "./assets/python.svg"
import swift from "./assets/reactjs.png"
import database from "./assets/database-amazon-rds-sqlslave.svg"
import java from "./assets/java-original.svg"
import RectangleSVG from './RectangleSVG'

const Body=()=>{
    return<>
    {/* <RectangleSVG/> */}
    <div className="node"> 
<img src={python} alt="node" className="nodeimg" />
<div className="nodetag " >Python</div>
</div>
<div className="css"> 
    <img src={css} alt="" className="cssimg" />
    <div className="csstag" >CSS3</div>

</div>
<div>
 <div className="text">Learn to  <span className="code">code</span>  your </div>
 <div className="text">dreams and <span className="design">design</span>  </div>
 <div className="text">your future</div>
 <div className="subtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> natus dolore ipsam a modi nostrum repudiandae aperiam<br/> veritatis tenetur,temporibus, pariatur repellat!</div>

 </div>
 <div className="python"> 
<img src={node} alt="node" className="pythonimg" />
<div className="pythontag" >Node Js</div>
</div>
<div className="swift">
    <img src={swift} alt="" className="swiftimg" />
    <div className="swifttag" >Swift</div>
</div>
<div className="database">
    <img src={java} alt="" className="databaseimg" />
    <div className="databasetag" >Java</div>
</div>
<div className="button">
 <button className='button1' id='button'>Explore course</button>
 <button className='join' id='button'>Join Free Course</button>
</div>


    </>
}
export default Body;