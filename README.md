# Installation & running the app

You'll first want to clone the repo and install the dependencies as below (i'm using yarn)

```yarn install```

Next, add a .env file to the root of the project with the below key

```REACT_APP_GEOLLECT_API_KEY=YOUR_KEY_HERE```

lastly run the below command

```yarn start```

# Using the app

1. In the top-left of the app, there is a key to show/hide different types of vessel.
2. On press of a ship, an information window opens in the top right.
3. In the aforementioned information window, there is an option to show vessel history.

# Improvements & upgrades

1. Making the app responsive to fit smaller screen sizes.
2. Display markers with more information for historic ship positions, every X amount of hours or perhaps one per day.
2. I chose to only load historic ship positions when requested, this cuts down on initial load time, but the user must then wait when historic data is requested. I would explore loading on app open just to compare speeds.
3. If I could change the backend, I would elect to return the ship information with the call to /vessels/positions, this would speed up the initial load time and cut down on API requests.

