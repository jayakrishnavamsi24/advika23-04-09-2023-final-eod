// import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import EventDetailPage from "./components/EventDetailPage";
import EventsPage from "./components/EventsPage";
// import Aboutadvika from "./components/Aboutadvika";
import Home from "./components/Home";

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const loadingTimeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(loadingTimeout);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about-advika" component={Aboutadvika} /> */}
        <Route exact path="/eventslist/:id" component={EventsPage} />
        <Route exact path="/eventdetails/:id" component={EventDetailPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
