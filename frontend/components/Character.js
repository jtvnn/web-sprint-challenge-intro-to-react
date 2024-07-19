import React, {useState} from 'react'

function Character(props) { // ❗ Add the props
    const {name, home} = props;
    // ❗ Create a state to hold whether the homeworld is rendering or not

    const [isToggled, setToggle] = useState(false);

// ❗ Create a "toggle" click handler to show or remove the homeworld
    const handleClick = () => {
      setToggle(!isToggled);
    }
  
  return (
    <div className='character-card' onClick={handleClick}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{name} </h3> 
      {isToggled ?  <p className='character-planet'>Planet: {home}</p> : ''}
      
    </div>
  )
}

export default Character
