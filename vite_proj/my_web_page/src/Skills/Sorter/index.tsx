import { useContext } from 'react'
import { SorterContext, SortModes } from './SorterContext';
import Pill from '../../Common/Pill';

function Sorter () {
  const chosenMode = useContext(SorterContext);

  function handleClick(value: SortModes) {
    return () => {
      chosenMode?.set(value);
    }
  }

  const sorterChoices
  = (Object.keys(SortModes) as Array<SortModes>)
  .map((key) => {
    if (key === chosenMode?.get()) {
      return (
      <Pill
          key={key}
          clickResponse={handleClick(key)}
          innerText={key}
          styleVars={{
            '--color': 'lightblue',
            fontWeight: 'bold'
          }}
      />
      )
    }
    return (
    <span
      key={key}
      onClick={handleClick(key)}
      style={{color: '#999'}}
    > { key } </span>
    )
  })

  return (
    <div className='sorter spread'>
      <strong> Sort by: </strong>
      { sorterChoices }
    </div>
  )
}

export default Sorter;