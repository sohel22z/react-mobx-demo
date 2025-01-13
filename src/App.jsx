import './App.css'
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import mobxStore from './stores/mobxStore'

function App() {

  const mobxCounter = mobxStore.counter;

  useEffect(()=> {}, [mobxStore])

  return (
    <>
      <h2>MobX Counter: {mobxCounter}</h2>
      <button onClick={() => mobxStore.increment()}>+</button>
      <button onClick={() => mobxStore.decrement()}>-</button>
    </>
  )
}

export default observer(App);