import './Template.css'
function Template(props) {
    let name2 = " Hello Netflex";
    let summary = "This is netflex series";
    let age2 = 10;
    function getName() {
      return "Mudassar";
    }

    function handleNameClick(event) {
        alert("Name clicked",event)
        console.log(event)
    }

    const {id, name, age} = props.data;
    return (
      <>
      <h1 className='flex center text-3xl font-bold underline'>{id}--</h1> 
     <h1>{name}--</h1> 
     <h1>{age}--</h1> 
      <h1 onClick={(event) => handleNameClick(event)}>
       {name2}
      </h1>
      <h2>Summary :
        {summary}
        {9+1}
        {getName()}
      </h2>
      <p>{props.content}</p>
      <p>{props.children}</p>
      <img src='SampleJPGImage_2mbmb.jpg' width={100} height={100} alt='This is img' />
      <button>{age2 >= 18 ? "Watch" : "Not Available"}</button>
      </>
    )
};

export default Template;

export  function Header() {
    return "Header";
}
export function Footer() {
    return "Footer";
}