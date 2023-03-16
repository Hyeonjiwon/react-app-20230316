import './App.css';

/*
- 구체적인 앱은 app.js에서 
- React는 사용자 정의 함수를 만드는 기술이다.
- React는 사용자 정의 태그를 만드는 기술이다. 
- 재사용성, 유지보수의 편의성을 높일 수 있다.
- 리액트에서는 사용자정의 태그를 컴포넌트라고 부른다.
- 컴포넌트는 반드시 대문자로 정의한다. -> native 태그와 구분 할 수 있음
- 컴포넌트의 실체는 함수이고, 함수가 return 값이 ui가 된다.  
- img 태그는 src 속성에 따라 변경 
- 
*/

function Counter(props) {
  console.log('props', props);
  return (
    <div>
      <h1>{props.title}</h1>
      <button>🎀</button> 👉 {props.initValue}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter title = "불면증카운터" initValue = "10"></Counter>
      <Counter title = "입장객카운터" initValue = "20"></Counter>
      <img src="/img.jpg"></img>
    </div>
  );
}

export default App;
