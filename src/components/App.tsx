// import React, { useState } from 'react';

// const App: React.FC = () => {
//   const [data, setData] = useState<any>({});

//   const loadData = async () => {
//     try {
//       const response = await fetch('/load');
//       const jsonData = await response.json();
//       setData(jsonData);
//       console.log('Loaded data:', jsonData);
//     } catch (error) {
//       console.error('Failed to load data:', error);
//     }
//   };

//   const saveData = async () => {
//     const jsonData = {
//       // 保存するデータをここに入力
//       name: 'my_name'
//     };

//     try {
//       const response = await fetch('/save', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(jsonData)
//       });
//       const result = await response.json();
//       console.log('Save result:', result);
//     } catch (error) {
//       console.error('Failed to save data:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={loadData}>前回のデータを読み込む</button>
//       <button onClick={saveData}>データを保存する</button>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default App;
