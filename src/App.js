import React, { Suspense } from 'react'
import "./App.css";
const Home = React.lazy(() => import("./Home/Home"));

export default function App() {

  return (
    <div>
       <Suspense
         fallback={
          <p className=" text-sm">Loading...</p>
          }>
        <Home/>
        </Suspense>
    </div>
  )
}

