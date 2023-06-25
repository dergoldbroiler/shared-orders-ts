import React, { useState } from "react";
import { useSyncedStore } from "@syncedstore/react";
import * as Y from 'yjs'

export default function App() {
 
  const [appstate, setAppstate] = useState<any[]>([{ value: ""}]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const element = {
      value: value,
    }
    setAppstate([element]);
    yarray.insert(0, [appstate]);
  };


  const ydoc = new Y.Doc()
  // Define an instance of Y.Array named "my array"
  // Every peer that defines "my array" like this will sync content with this peer.
  const yarray = ydoc.getArray('fenotec_state_2023')
  
  // We can register change-observers like this
  yarray.observe(event => {
    // Log a delta every time the type changes
    // Learn more about the delta format here: https://quilljs.com/docs/delta/
    console.log('delta:', event.changes.delta)
  })



  return (
    <div>
      <h1>Status</h1>
      <i>{appstate.map(element => element.value)}</i><br />
      <input type="text" value={appstate[0].value} onChange={handleChange} />
    </div>
  );
}
