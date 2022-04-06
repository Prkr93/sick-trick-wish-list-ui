import './TrickList.css';


const TrickList = ({tricks}) => {

  const trickList = tricks.map(trick => {
    return (
      <article className='trick' key={trick.id}>
        <h2>{trick.name}</h2>
        <p>{trick.obstacle}</p>
        <p>{trick.stance}</p>
        <p>{trick.tutorial}</p>
      </article>
    )
  });

  return (
    <section className='tricks'>{trickList}</section>
  )
}

export default TrickList;
