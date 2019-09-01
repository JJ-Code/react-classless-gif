// import {
//     useState
// } from "react";

// export default initialTodos => {
//     const [gameData, setGameData] = useState(initialTodos);
//     return {
//         gameData,
//         reset: resetScore => {
//             setGameData(setGameData)
//         },
//         addUserScore: score => {
//             setGameData(initalState => {
//                 initalState += score
//             });
//         },
//         toggleTodo: todoId => {
//             const updatedTodos = todos.map(todo =>
//                 todo.id === todoId ? {
//                     ...todo,
//                     completed: !todo.completed
//                 } : todo
//             );
//             setTodos(updatedTodos);
//         },
//         editTodo: (todoId, newTask) => {
//             const updatedTodos = todos.map(todo =>
//                 todo.id === todoId ? {
//                     ...todo,
//                     task: newTask
//                 } : todo
//             );
//             setTodos(updatedTodos);
//         }
//     };
// };