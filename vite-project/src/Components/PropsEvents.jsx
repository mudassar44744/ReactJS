


function PropsEvent() {
    function handleOnClick() {
        alert("Hanlde Click")
    }
    function handleMEnter(props) {
        console.log(props)
        alert(`Mouse Enter ${props.name}`);
    }
    return (
        <>
        <h1>Welcome Component</h1>
        <WelcomeUser handleClick={handleOnClick} handleMouseEnter={handleMEnter}  />
        </>
    )
}

function WelcomeUser(props) {
    return (
        <>
    <button onClick={props.handleClick}>Click Me</button>
        
        </>
    )
}

export default PropsEvent;