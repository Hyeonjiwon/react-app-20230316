import './App.css';
import { useState } from 'react';

/*
- 구체적인 앱은 app.js에서 
- React는 사용자 정의 함수를 만드는 기술이다.
- React는 사용자 정의 태그를 만드는 기술이다. 
- 재사용성, 유지보수의 편의성을 높일 수 있다.
- 리액트에서는 사용자정의 태그를 컴포넌트라고 부른다.
- 컴포넌트는 반드시 대문자로 정의한다. -> native 태그와 구분 할 수 있음
- 컴포넌트의 실체는 함수이고, 함수가 return 값이 ui가 된다.  
- img 태그는 src 속성에 따라 변경 
- 배포(vercel) > npm run build > npx serve -s build
- 구조분해할당
- props는 컴포넌트의 입력값이다.
- 이벤트 안에는 함수가 온다.
- 문자열이 아닌 데이터 타입은 {}로 묶는다.
*/

function Counter({title, initValue}) { // props
  // let countState = useState(initValue);
  // let count = countState[0]; 
  // let setCount = countState[1]; // 값을 수정할 때 사용

  // console.log(countState);

  const  [count, setCount] = useState(initValue); // 위의 코드와 동일한 의미

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={function(){
        console.log("up");
        setCount(count + 1);
      }}>🎀</button> 👉👉 {count}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter title = "불면증카운터" initValue = {10}></Counter> 
      <Counter title = "입장객카운터" initValue = {20}></Counter> 
      <img src="/img.jpg"></img>
    </div>
  );
}

export default App;
