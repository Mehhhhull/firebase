import React from 'react'

const DASHBOARD = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{width:'20%',backgroundColor:'royalblue', height:'100vh'}} >
        <h1>side nav</h1>
      </div>
      <div style={{width:'70%',height:'100%'}}>
        <h1>Content</h1>
      </div>
    </div>
  )
}

export default DASHBOARD
