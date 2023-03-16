import './App.css';
import styles from './App.module.css'
import { useState, useEffect } from 'react';

console.log(styles.backgroundPink);

// 사용자 정의 hook
function useCount(initValue) { // use로 시작 
  let [count, setCount] = useState(initValue);

  useEffect(() => {
    init();
  }, [])

  async function init() {
    const resp = await fetch('http://localhost:9999/counter')
    const result = await resp.json();
    setCount(result.value);
  }

  const up = async () => { 
    const resp = await fetch('http://localhost:9999/counter', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: count + 1 })
    })
    const result = await resp.json();
    setCount(result.value);
  }

  const down = async () => {
    const resp = await fetch('http://localhost:9999/counter', { 
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: count - 1 })
    })
    const result = await resp.json();
    setCount(result.value);
  }

  return [count, up, down]
}

function Counter({title, initValue}) {
  const [count, up, down] = useCount(initValue);

  let 양 = '';
  for(let i=0; i<count; i++) {
    양 += '🐑';
  }
  
   return (
    <div>
      <h1>{title}</h1>
      <button className= {'spaceRight ' + styles.backgroundPink} onClick={up}>🎀</button>
      <button className= {'spaceRight ' + styles.backgroundGreen} onClick={down}>👇</button> 👉👉 {양}
    </div>
  );
}

function Counter2({title, initValue}) {
  let [count, setCount] = useState(initValue);

  const init = async () => {
    const resp = await fetch('http://localhost:9999/counter')
    const result = await resp.json();
    setCount(result.value);
  }

  useEffect(() => {
    init();
  }, [])

  const up = async () => {
    const resp = await fetch('http://localhost:9999/counter', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: count + 1 }) 
    })
    const result = await resp.json();
    setCount(result.value);

    console.log('up');
    setCount(count + 1);
  }

  const down = () => {
    console.log('down');
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button> {count}
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter title="불면증카운터" initValue = {10}></Counter>
      <Counter2 title="카운터2" initValue = {20}></Counter2>
    </div>
  );
}

export default App;

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

- useState의 첫번째 원소는 초기값이 들어가 있는 value, 두번째 원소는 값을 바꿀때 사용하는 set 
- use가 붙어있는 요소를 hook 이라고 함

- 리액트에서 style은 -말고 대문자 margin-right(x) -> marginRight(o)
- 리액트에서는 class 라는 키워드를 쓰지 않기로 함 js에서 써서, className (0)

- json server : npx json-server --port 9999 --watch db.json / 응답하는 api는 restful api
- fetch api : console에서 fetch('http://localhost:9999/topics'); : promise 리턴
- fetch('http://localhost:9999/topics').then((resp)=>{
    const resultValue = resp.json();
    console.log('resultValue', resultValue);
    return resultValue;
  }); : promise 리턴
- fetch('http://localhost:9999/topics').then((resp)=>{
    return resp.json();
  }).then((result)=>{
      console.log('result', result);
  }); : 서버에서 보내주는 json 데이터 리턴
- return이 promise면 then() 사용
- db.json의 counter value 값을 ajax로 가져오기 
  fetch('http://localhost:9999/topics').then((resp)=>{
    return resp.json();
  }).then((result)=>{
      console.log('result', result.value);
  })
- counter의 value값을 애플리케이션으로 가져와서 넣어준다 

- side effect : 외부와 통신하는, 결과를 예측할 수 없는 코드
- side effect는 useEffect callback 함수 안에 넣어준다.
  - 컴포넌트가 리로딩 될때마다 같이 실행된다
  - 이걸 막고싶으면(딱 한번만 노출되게 하고싶으면) 두번째 파라미터로 빈 배열을 넣어준다. 

- 서버와 통신하려면 fetch 사용 -> return 값이 promise

- Async/Await 
- 비동기가 순차적으로 처리되어야 할 경우 waitAndReturnCallback 계속 => callback hell
- 비동기 작업을 코드를 쉽게하기 위해 promise 등장 waitAndReturnPromise
- Async/Await 등장, return 값이 promise인 경우 앞에 await 키워드를 붙이면 return 값이 then으로 받은 값과 같음
- useEffect의 첫번째 콜백 함수는 async/await 적용이 안된다. 

- 사용자 정의 hook : return 하는 값이 없는 컴포넌트 (?)
*/