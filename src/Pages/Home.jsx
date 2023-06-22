import React from 'react'

function Home({data}) {

  console.log("home: ",data);
  const tatalCount = data?.response?.body?.totalCount;

  return (
    <div className='home'>
      <h1>Home</h1>
        {data && <p>{tatalCount}</p>}
        <ul>
        {
          data ? data.response.body.items.map((item,i) => {
            return(
            <li key={i}>{item.districtName} / {item.issueGbn} / {item.issueDate} / {item.clearTime}</li>
            )
          }) : null
          
        }
        </ul>
    </div>
  )
}

export default Home