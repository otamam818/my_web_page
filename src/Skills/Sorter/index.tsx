import { useContext } from 'react'
import { SorterContext, SortKeys, SortKeysList } from './SorterContext';
import Pill from '../../Common/Pill';

function Sorter () {
  const chosenMode = useContext(SorterContext);

  function handleClick(value: SortKeys) {
    return () => {
      chosenMode?.set(value);
    }
  }

  const sorterChoices
  = (SortKeysList)
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