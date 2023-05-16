import React, { useEffect, useState } from 'react';
import './App.css';
// import MyButton from './components/MyButton';
// import Profile from './components/Profile';
// import AboutPage from './components/AboutPage';
// import ShoppingList from './components/ShoppingList';
// import MyButtonEvent from './components/MyButtonEvent';
import MyTable from './components/MyTable';
import axios from 'axios';


export type TableDataType = {
  name: string;
  username: string;
  address: string;
  email: string;
  company: string;
  id:number;
}[];

//-----------------promise사용
// function fetchData(): Promise<any> {
//   return new Promise((resolve, reject) => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         resolve(response.data); // 데이터 가져오기 성공 시 결과를 resolve로 반환
//       })
//       .catch(error => {
//         reject(error); // 데이터 가져오기 실패 시 에러를 reject로 반환
//       });
//   });
// }
// fetchData()
//   .then(data => {
//     // 데이터 가져오기 성공 시 처리 로직
//     console.log('Data:', data);
//   })
//   .catch(error => {
//     // 데이터 가져오기 실패 시 에러 처리 로직
//     console.error('Error:', error);
//   });

function App() {
  const [tableData, setTableData] = useState<TableDataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;
        // console.log(users);
        const data: TableDataType = users.map((item: any) => ({
          name: item.name,
          username: item.name,
          address: item.address.city,
          email: item.email,
          company: item.company.name,
          id: item.id,
        }));
        console.log(data);
        setTableData(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, []);

  //하위 컴포넌트 Prop 전달
  const [count, setCount] = useState<number>(0);
  function handleClick() {
    setCount(count + 1);
    // setCount((state) => state + 1);
  }
  return (
    <div>
      <h1>Welcome to my app</h1>
      {/* 컴포넌트간 데이터 공유 */}
      {/* props: 부모컴포넌트에서 자식컴포넌트에게 넘기는 데이터 */}
      {/* <MyButton2 count={count} onClick={handleClick} />
      <MyButton2 count={count} onClick={handleClick} /> */}

      {tableData &&<MyTable rows={tableData}/>}
    </div>
  );
}

export default App;

type MyButtonProps = {
  count: number;
  onClick: () => void;
};

function MyButton2({ count, onClick }: MyButtonProps) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
