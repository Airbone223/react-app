import React from "react";
import classes from "./SocialNetworkMain.module.css";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import MessagesContainer from "./Content/ContentMessages/MessageContainer";
import { Route } from "react-router-dom";
import ContentProfileContainer from "./Content/ContentProfile/ContentProfileContainer";
import ContentFriendsContainer from "./Content/ContentFriends/ContentFriendsContainer";
import ContentMessagesContainer from "./Content/ContentMessages/ContentMessagesContainer";
import ContentNewsContainer from "./Content/ContentNews/ContentNewsContainer";
import ContentPhoto from "./Content/ContentPhoto/Contentphoto";
import ContentVideo from "./Content/ContentVideo/ContentVideo";
import ContentMusic from "./Content/ContentMusic/ContentMusic";
import UsersContainer from './Users/UsersContainer'
import UsersProfileContainer from './Content/UsersProfileContainer/UsersProfileContainer' 

function SocialNetworkMain() {
  
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.navigation}>
        <Navigation />
      </div>
      <div className={classes.content}>
        <Route
          path="/messages/ylia"
          render={() => (
            <MessagesContainer
            />
          )}
        />
         <Route
         exact
          path="/"
          render={() => (
            <ContentProfileContainer
            />
          )}
        />

        <Route
          path="/friends"
          render={() => (
            <ContentFriendsContainer />
          )}
        />
        <Route
          exact
          path="/messages"
          render={() => (
            <ContentMessagesContainer/>
          )}
        />
        <Route
          path="/news"
          render={() => <ContentNewsContainer />}
        />
        <Route path = '/users' render = {()=> <UsersContainer/>}/>
        <Route
        exact
          path="/profile"
          render={() => (
            <ContentProfileContainer
            />
          )}
        />
<Route path = '/usersprofile/:userId' render = {()=> <UsersProfileContainer/>}/>
        <Route path="/photo" component={ContentPhoto} />
        <Route path="/music" component={ContentMusic} />
        <Route path="/video" component={ContentVideo} />
      </div>
    </div>
  );
}

export default SocialNetworkMain;
