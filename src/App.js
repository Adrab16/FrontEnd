// import './App.css';

// import React, {createContext, useReducer} from "react";
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import GestionPost from './components/Admin/GestionPost/GestionPost';


// import ComposantA from "./components/ComposantA";
// import ComposantC from "./components/ComposantC";
// import ComposantB from "./components/ComposantB";
// import Newsletter from "./components/Newsletter";
// import DataFetchingOne from "./components/DataFetchingOne";
// import ApiFilm from './components/ApiFilm';
// import DataFetchAll from './components/DataFetchAll';
// import DataFetchTodos from './components/DataFetchTodos';
// import DataFetchReducer from './components/DataFetchReducer';
import FetchAjouterManga from './components/FetchAjouterManga/FetchAjouterManga';
import AjouterUnManga from './components/AjouterUnManga/AjouterUnManga';
import UpdateManga from './components/UpdateManga/UpdateManga';
import Login from './components/Login/SeConnecter';
import Inscription from './components/Inscription/Inscription';
import ImageUpload from './components/ImageUpload/ImageUpload';
import FetchAllManga from './components/FetchAllManga/FetchAllManga';
import MangaTheque from './components/MangaTheque/MangaTheque';
import Catalogue from './components/Catalogue/Catalogue';
// import DataFetchProducts from './components/DataFetchProducts';

// import styles from './app.module.css'


// import AdminGreeting from './components/AdminTest';
// import Form from './components/Form';
// import Inline from './components/Inline';
//// import Counter from './components/Counter';
// import Message from './components/Message';
// import Greet from './components/Greet';
// import Hero from './components/Hero';
// import FunctionClick from './components/FunctionClick';
// / import Welcome from './components/Welcome';

export const CountContext = React.createContext();


function App() {
  // const initialState = 0
  // const reducer = (state, action)=> {
  //   switch (action) {
  //     case 'increment': return state + 1;

  //     case 'decrement': return state - 1;

  //     case 'reset': return initialState;

  //     default: return state;



      
    // }
  // }

  // const [count, dispatch ] = useReducer(reducer, initialState);









  return (
    <div className="App">
       {/* <Hero name="Bruce" alias="Batman" >
          This is children props
      </Hero>
       <Hero name="Clark" alias="Superman"   />
       <Hero name="Diana" age="Wonder Woman" /> */}
      {/* {<Welcome />} */}

      {/* <Welcome name= "Joseph" age="65 ans" >
      Ceci est un vieux
      </Welcome>
      <Welcome name= "Jean Eude" age="85 ans" />
      <Welcome name= "Marcel" age= "45 ans" /> */}

      {/* <Message /> */}

      {/* <Counter value={100} />

      <FunctionClick /> */}

      {/* <UserGreeting /> */}

      {/* <AdminGreeting /> */}

      {/* <NameList /> */}

      {/* <Person /> */}

      {/* <Inline /> */}

      {/* <Form /> */}

      {/* <Newsletter /> */}

      
      {/* <CountContext.Provider value= {{countState: count, countDispatch: dispatch}}>
      <ComposantA />
      <ComposantB />
      <ComposantC />

      </CountContext.Provider> */}

      {/* <DataFetchingOne /> */}

      {/* <ApiFilm /> */}

      {/* <DataFetchAll /> */}

      {/* <DataFetchTodos /> */}
      {/* <DataFetchReducer /> */}
      {/* <DataFetchProducts /> */}
      <Navbar />
      <Routes>
         <Route path='/' element={<MangaTheque />} />
         {/* <Route path='/services/' element={<Services /> } /> */}

         


        <Route path='/services/' element={<Services />}>
         <Route path='/services/developpement' element={<Developpement />} />
         <Route path='/services/marketing' element={<Marketing />} />
        </Route>

        <Route path='/admin/' element={<Admin />}>
         <Route path='/admin/dashboard' element={<Dashboard />} />
         <Route path='/admin/gestionpost' element={<GestionPost />} />
        </Route>


        <Route path='/AjouterManga' element={<FetchAjouterManga />} />

        <Route path='/AjouterUnManga' element={<AjouterUnManga />} />

        <Route path='/UpdateManga/:id' element={<UpdateManga />} />

        <Route path='/SeConnecter' element={<Login />} />

        <Route path='/Inscription' element={<Inscription />} />

        <Route path='/imageupload' element={<ImageUpload />} />
        <Route path='/catalogue' element={<Catalogue />} />

        
        <Route path='/mangatheque' element={<MangaTheque />} />











        








       








        

      


        



         
         <Route path='/profile/:id' element={<Profile />} />
         <Route path='/*' element={<NotFound />} />

         
      </Routes>




    
    
    </div>
  );
}

export default App;
