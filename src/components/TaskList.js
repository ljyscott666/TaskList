
import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";
import './Tasklist.css'




export default function TaskList({article} ) {


    const [tasks, setTasks] = useState([
        {id:221, name:'sssdsd',completed:false},
        {id:223, name:'ss3232sdsd',completed:false},
        {id:225, name:'sss3232dsd',completed:false}]);

    const [show ,setShow] = useState(true)
    
      function handleDelete(id) {
        
        setTasks(tasks.filter(task=> id !== task.id))
        //用filter来找到 未被选中的id 如果我点到的那一行的id就没有被选中
        //因为render全部的ul列表里面的内容 由于我选择了 那么我选择的那一行被过滤掉了 所以没有被渲染 所以效果上是被删除掉了
       }
   // <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
   //三元表达式  A ?   "B" :  "C" 用来判断条件 A条件满足返回B 不满足返回C




  return (
    <section className="tasklist">
    
 <h1 style={{color:'greenyellow',border:'10px solid #be2425'}}>Task List</h1>
   <ul>
    <button onClick={()=>setShow(!show)} className="trigger">toggle</button>
  {show && tasks.map(task=>(
      <TaskCard key={task.id} task={task} handleDelete={handleDelete}></TaskCard>
  ))}
       
    </ul>

     <BoxCard result='success'>
        <p className="title">ewweeqeqe1111</p>
        <p className="desciption">wwwwwwww1111</p>
     </BoxCard>
     
     <BoxCard result='warning'>
        <p className="title">ewweeqeqe222</p>
        <p className="desciption">wwwwwwww222</p>
     </BoxCard>
     <BoxCard result='alert'>
        <p className="title">ewweeqeqe333</p>
        <p className="desciption">wwwwwwww1333</p>
     </BoxCard>
</section>
  )
}
