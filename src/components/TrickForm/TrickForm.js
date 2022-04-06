import './TrickForm.css';

const TrickForm = ({addTrick}) => {
  return (
    <form >
      <label htmlFor='name'>Trick Name: </label>
      <input type='text' name='name' id='name' required />
      <label htmlFor='stance'>Trick Stance: </label>
      <select name='stance' id='stance'>
        <option>Regular</option>
        <option>Switch</option>
      </select>
      <label htmlFor='obstacle'>Trick Obstacle: </label>
      <select name='obstacle' id='obstacle'>
        <option>Flatground</option>
        <option>Ledge</option>
        <option>Rail</option>
        <option>Stairs</option>
        <option>Pool</option>
      </select>
      <label htmlFor='tutorial'>Trick Tutorial URL: </label>
      <input type='text' name='tutorial' id='tutorial' required />
      <input type='submit' value='Submit Trick' onClick={addTrick} />
    </form>
  )
}

export default TrickForm;
