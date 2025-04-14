const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
  // let notCompleted = function (arr,filter) {
  
  //  for (let todos of arr){
  //   results.push(filter(todos));
  //  } My original thought was to create a for loop but realized thatI did not need to do that with the filter method. I figured I needed to creat a variable for "items not completed" and include the .filter method there. After many attempts I realized using .compeleted would allow me to access the true or false elements within the array. I also needed to use the NOT ! logic to output the not completed item. Now that I have the output I need to make the anonymous function. 
const notCompletedTask =  todos.filter(function(items) {
    return items.completed !== true;
});

//   let notCompleted = todos.filter(todos => todos.completed !== true);
  console.log(notCompletedTask);
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
 let sortArr = todos.sort(function(a,b) {
    // return ((a,b) => a.priority(b));
    return a.priority - b.priority;
  });
  console.log(sortArr);
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
  let updatedStauts = todos.map(function (Object) {
    return Object.completed = true;
  })

  console.log(updatedStauts);
  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
  let newArr = todos.filter(function(arr) {
    return arr.compeleted !== true;
  });

  console.log(newArr,sortArr);

  
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  // console.log("Incomplete Tasks:", ...);
  // console.log("Sorted by Priority:", ...);
  // console.log("All Tasks Completed:", ...);
  // console.log("Sorted Incomplete Tasks:", ...);
  