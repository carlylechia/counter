const Button = ({ whenClicked, num }) => {
  const handleClick = () => {
    whenClicked(num)
  }
  return(
    <button onClick={handleClick}>Add {num}</button>
  )
}

export default Button;