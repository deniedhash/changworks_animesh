## Assignment project

### Demo

[Click Here](https://changworksdeniedhash.netlify.app) for Demo

### Instructions
To run the project locally, follow these steps:

1. Clone the [repo](https://github.com/deniedhash/changworks_animesh.git)
   ```
   git clone https://github.com/deniedhash/changworks_animesh.git
   ```

2. Change directory to the cloned directory
   ```
   cd changworks_animesh
   ```
   
3. Install required npm packages  
   ```
   npm i
   ```
   
 3. Deploy
    ```
    npm start
    ```

Now you are running the app locally! Let's go!


## An issue you might face while building the app

Since mini-css-extract-plugin was updated to 2.5.0, building the app might fail. To solve the issue:

1. Change directory to the cloned directory
   ```
   cd changworks_animesh
   ```
   
2. Roll back the mini-css-extract-plugin to 2.4.5
   ```
   npm i -D --save-exact mini-css-extract-plugin@2.4.5
   ```
   
 3. Build the app
    ```
    npm run build
    ```

It'll build fine now
