import { useContext } from 'react'
import { SorterContext, SortKeys, SortKeysList } from './SorterContext';
import Pill from '../../Common/Pill';

function Sorter () {
  const chosenMode = useContext(SorterContext);

  function handleClick(value: SortKeys) {
    return () => {
      chosenMode?.set({ needsUpdate: true, key: value })
    }
  }

  const sorterChoices
  = SortKeysList.map((key) => {
    if (key === chosenMode?.get().key) {
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