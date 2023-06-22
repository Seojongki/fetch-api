import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Navbar from './components/Navbar';

function App() {
  
  const [data, setData] = useState('');
  const API_KEY='ZVeBh9mFpI0ls7RoE3axu4MbwVuZ23P%2FA%2FpfdFNCU1%2FDp%2FRoFqRfPHgOLwNVa7D0lV3wRQRYgxS6JhzI7uT0Eg%3D%3D';
  const API_URL=`http://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=${API_KEY}&returnType=json&numOfRows=10&pageNo=1&year=2023&itemCode=PM10`;
  //console.log(API_URL);

  const fetchData = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data)        
        setData(data);
      })    
  }

  useEffect(() => {
    fetchData();
  },[]);

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <button onClick={fetchData}>요청</button> */}
        <Routes>
          <Route path='/' element={<Home data={data}/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
