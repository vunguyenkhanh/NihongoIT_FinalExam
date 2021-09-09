import './App.css';
import DeleteUser from './hook'

function App() {
  const [name, newArr, handleChange, handleDeleteName] = DeleteUser(); 
  return (
    <div className="App">
      <h4>学生一覧: [Huyen, Hoa, Hung, Long]</h4>
      <h4>削除する名前を入力してください。</h4>
      <input onChange={handleChange} value={name}></input>
      <br/>
      <button  onClick={() => handleDeleteName(name)} style={{marginLeft: 120, marginTop: 20}}>確定</button>
      <h4>削除する名前：{name}</h4>
      <h4>新しい一覧：[{newArr}]</h4>
    </div>
  );
}

export default App;