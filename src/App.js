import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [work, setWork] = useState("");
  const [todos, settodos] = useState([]);
  const handleDelete = (id) =>{
// console.log(id)
settodos(prev => prev.filter(item => item.id !== id))
  }
  const handleAdd = () => {
    // console.log(1);
    // settodos(prev => [...prev,work])
    // toast.success('Fully')
    if (todos?.some((item) => item.id == work.replace(/\s/g, ""))) {
      toast.warn("Value existk");
    } else {
      settodos((prev) => [...prev, { id: work.replace(/\s/g, ""), job: work }]);
      setWork("");
    }
  };
  console.log(todos);

  return (
    <>
      <div className="flex flex-col gap-8 h-screen items-center border-blue-900 px-4 py-2 justify-center">
        <div className="flex gap-8 ">
          <input
            type="text"
            className="outline-none border border-blue-900 px-4 py-2 w-[400px]"
            value={work}
            // onChange={e => consol.console.log(e.target.value)}
            // Hàm set giá trị khi có sự thay đổi cho workk
            onChange={(e) => setWork(e.target.value)}
            // onChange={e => setWork(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Content:</h3>
          <div>
            <ul>
              {todos?.map((item) => {
                return <li key={item.id} className="flex gap-10 items-center">
                <span className="my-2">{item.job}</span>
                <span onClick={() => handleDelete(item.id)} className="my-2 cursor-pointer p-6">X</span>
                {/* <span onClick={handleDelete(item.id)} className="my-2 cursor-pointer p-6">X</span> */}
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      <ToastContainer
        // Cài đặt báo lỗi bằng toastify
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
