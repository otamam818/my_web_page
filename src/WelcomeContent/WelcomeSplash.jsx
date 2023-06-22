import { useState, useEffect } from 'react';

const NUM_ROWS = 4;
const NUM_COLUMNS = 6;

function WelcomeSplash () {
  const [dots, setDots] = useState(null)

  useEffect( () => {
    let finlist = []
    for (let i = 0; i < NUM_ROWS; i++) {
      let innerList = [];
      for (let j = 0; j < NUM_COLUMNS; j++) {
        let delay = Math.ceil(Math.random() * 4);
        innerList.push(<div className='dot' style={
          {"--delay" : `${delay}s`}
        }>
          •</div>);
      }

      finlist.push(
        <div className='row'>
          {innerList}
        </div>
      )
    }

    setDots(finlist);
  }, [])

  return (
      <div className="welcome-content-splash">
        {dots}
      </div>
  )
}

export default WelcomeSplash;
