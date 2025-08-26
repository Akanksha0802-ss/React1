// Module-7 Start

// #Lecture-1 What I Learn:-


















// # Lecture-2 ,Handling Invalid Routes with a "Not Found" Page
// In this lecture, we learn how to handle routes that don't exist and how to display a 'Not Found' page in such cases.
// When I click Products so product component is load, click Articles, Admin, Contact US so on. 

// We have 404 status code jb hmhare application wo exist nhi krta that time we used.

//React Router dom dependency is so powerful

// #Lecture-5 Topic: Route Parameters: Load Data Dynamically

// Understand What is route param, How we achieve, what it means and What are the use cases

//First we go to the product component
//Shortcut for not write repeated code ul>li*3
//for this trick one click Ctrl+Shift+P Search Command Open Vs code settings like this >Settings

// In this lecture, we learned how to use Route Parameters in a React application to create dynamic routes. Route parameters allow us to pass data through the URL, such as /users/1 or /products/123, where 1 and 123 are dynamic values.

// We defined our routes using a colon syntax like :id, and accessed these values inside components using useParams() from react-router-dom. This is extremely useful when we want to fetch and display data based on the specific ID or value in the URL.

// Snippet to Enable Emmet in React Files

// Steps:

// Open VS Code
// Press Cmd + Shift + P (Mac) or Ctrl + Shift + P (Windows)
// Type: Preferences: Open Settings (JSON) and press Enter
// Inside the JSON file, paste the following snippet (or merge if emmet.includeLanguages already exists):
// "emmet.includeLanguages": {

//     "javascript": "javascriptreact",

//     "javascriptreact": "html"

//   }


//For example here one list is present when you click , load another component
//like Products peh click Products aa jaye aisa bhi toh ho skta h Product a, Product b h , product c h
//Jb Product a peh click kre toh uska corresponding component load ho jaye, Product b, Product c peh same for eskeh liye we have route parents
//yha peh hm link ka use krege kyuki user koh hmhe single page application wala experience dehna h user koh
//Product.jsx keh andr used short cut ul>(li>Link[to="/Products"])*3 enter kro 

// Go to the App.jsx file and add this line <Route path="/products/:id" element={<SingleProduct />} /> jise aapka single product load ho ajyega This is actually a syntax of Route Param, here aap Route keh andr param deh diye ho which is id but u can multiple also just like id give name also

// ab hm chahteh h Products->Product 1->Single Product ab hmhe chateh h eskeh andr 1 aye 2 aye like Single Product 1 what we do for this
// ye joh powerful dependency hmne use kiya h which is react-router-dom  yhi magic h, ye hmhe hook dehti h which is use param
//We go to the single param import usePrams

//When you want push your code it means Lecture-5 in your Github , when u changes in your code it shows M means Merge what are the steps or command:-

// This is your Path PS C:\Users\Akanksha singh\Desktop\React1\Module-6\routing-basic-template>

//1. git status
//2. git add .
//3. git commit -m "Updated Module-6 files (App.jsx, Products components) of Lecture-5"
//4. git push origin main

// Lecture-6 Topic:- Working with Query Strings Using useSearchParams Hook
