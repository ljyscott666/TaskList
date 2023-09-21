import './TaskCard.css'
import styles from './TaskCard.module.css'

export const TaskCard = (props) => {



//{`taskcard ${props.task.completed ? "completed" : "incomplete"}`}自动计算出结果拼接在taskcard后面
  return (
    <div className='taskcard'>
         <li key={props.task.id} className={props.task.completed ? "completed" : "incomplete"}>

     <span className={styles.title}>{props.task.id}---{props.task.name}---{console.log(props.task)}</span>
     <button onClick={()=>props.handleDelete(props.task.id)} className="delete">delete</button> 
     <button onClick={()=>props.handleDelete(props.task.id)} >delete</button> 

    </li>
    </div>
  )
}
