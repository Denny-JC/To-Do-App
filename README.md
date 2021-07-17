# To-Do-App
User Friendly Todo App.
Designed using React-Native.

Introduction:

This App is very straight forward. You can type in your important works in this App so that it will keep a note on ur tasks. Whenever you open the App you can check the tasks you missed or the tasks to be done.

![image](https://user-images.githubusercontent.com/84028364/126042144-9e421971-c3b2-4df8-b488-b929cd515d11.png)
![image](https://user-images.githubusercontent.com/84028364/126042770-1f31adf3-9164-41e5-bca9-de5db524d0dc.png)

Building the App:
The pre requiste for this App is knowledge in Javascript and setup of environment for Android emulator and React.
You can follow it in 
https://reactnative.dev/docs/environment-setup

Steps:

1. Type in the code below to initialize the 

```
npx react-native init "To-Do-App"
```

2. Install all the dependencies required for this App and link it.
```"npm install ant-design/icons": "^4.6.2
    npm install react-native-community/async-storage
    npm install react-native-community/checkbox
    npm install react-native-community/datetimepicker
    npm install react-native-community/masked-view
    npm install react-native-firebase/app
    npm install react-native-firebase/auth
    npm install react-navigation/bottom-tabs
    npm install react-navigation/native
    npm install react-navigation/stack
    npm install react
    npm install react-icons
    npm install react-native
    npm install react-native-elements
    npm install react-native-gesture-handler
    npm install react-native-modal-datetime-picker
    npm install react-native-reanimated
    npm install react-native-safe-area-context
    npm install react-native-screens
    npm install react-native-vector-icons
    npm install react-navigation
    npm install react-navigation-stack
    npm install react-redux
    npm install redux
    npm react-native link
```

We are using Stack and Tab Navigation to navigate around the screens.

For Tab Navigation, We are using 2 Tabs, Home and Settings.

For Stack Navigation, We are using complex structures which is shown one by one.

Entry Tab.

![a](https://user-images.githubusercontent.com/84028364/126043341-38121481-580f-45a3-8349-c994132fc38d.jpg)

This is the Entry Tab, Logo has been provided along with a background Icon. The button navigates to the second tab, The Task Form.

Task Form.

![b](https://user-images.githubusercontent.com/84028364/126043343-22ff99bf-8f12-426b-a3dd-6082c17d1e25.jpg)

This is the Task Form and the Logo is still there. An Alarm system is given whenever a task is entered without any text. The Submit Button stores the values in the upcoming Tab called TaskList. The Task Manager button navigates the app to the next Tab.

Task List

![d](https://user-images.githubusercontent.com/84028364/126043346-347a5d5d-e432-47bd-b866-2684b626b601.jpg)

This is the Tab where the input tasks are stored. A delete icon is associated with the option to remove the tasks.

Settings Tab.

![c](https://user-images.githubusercontent.com/84028364/126043345-4c7c8b7e-f9a5-4256-81ca-1abda61b41a5.jpg)

Here, the "Reach Me" button redirects the User to the developer's Profile and the About App Button shows the version of the App.



