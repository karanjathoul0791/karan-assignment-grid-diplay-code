import './App.css'
import CityList from './Components/cityList'
// create a file named StateList.js
// import the state list from the local data file
function App() {
   return (
      <>
         <div className='container-1'>
            <div className='grid-item grid-item-1'>grid-item-1</div>
            <div className='grid-item grid-item-2'>grid-item-2</div>
            <div className='grid-item grid-item-3'>grid-item-3</div>
         </div>

         <div className='container-2'>
            <div className='grid-item grid-item-4'>grid-item-4</div>
            <div className='grid-item grid-item-5'>grid-item-5</div>
            <div className='grid-item grid-item-6'>grid-item-6</div>
         </div>

         <div className='container-3'>
            <div className='grid-item grid-item-7'>grid-item-7</div>
            <div className='grid-item grid-item-8'>grid-item-8</div>
            <div className='grid-item grid-item-9'>grid-item-9</div>
         </div>
      </>
   )
}

export default App
