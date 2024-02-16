// import Manager from "../components/manager";

// // jsonに書き出したい
// const saveJson = async ( saveData: Manager[] ) => {
//     const jsonData = {
//         // 保存するデータをここに入力
//         Level_0: saveData[0].getLevel(),
//         LevelPlus_0: saveData[0].getLevelPlus(),
//         Dialogue_0: saveData[0].getDialogues(),

//         Level_1: saveData[1].getLevel(),
//         LevelPlus_1: saveData[1].getLevelPlus(),
//         Dialogue_1: saveData[1].getDialogues(),

//         Level_2: saveData[2].getLevel(),
//         LevelPlus_2: saveData[2].getLevelPlus(),
//         Dialogue_2: saveData[2].getDialogues(),
//     };

//     try {
//         const response = await fetch('/save', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(jsonData)
//         });
//         const result = await response.json();
//         console.log('Save result:', result);
//     } catch (error) {
//         console.error('Failed to save data:', error);
//     }
// };


// export default saveJson;