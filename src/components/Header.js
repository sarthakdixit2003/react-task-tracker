import Button from "./Button";

const Header = ({title, onToggleAddTask, showAdd}) => {
  return (
      <header className = "header">
        <h1>{title}</h1>
          <Button 
            color = {showAdd ? 'red' : 'green'} 
            title = {showAdd ? 'Close' : 'Add'} 
            onToggleAddTask = {onToggleAddTask}
          />
      </header>
  )
}

// const headingStyle = {
//     color: 'black',
//     backgroundColor: 'red'
// }

export default Header