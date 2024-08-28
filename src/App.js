import logo from './logo.svg';
import './App.css';
import TenthResult from './components/TenthResult';

function App() {
 let studentTenthResult=(telMarks,engMarks,hinMarks,mathMarks,sciMarks,socMarks)=>{
   console.log(telMarks,engMarks,hinMarks,mathMarks,sciMarks,socMarks);
 };
 studentTenthResult(7,8,9,6,5,4);
 


 let kavithaTenthResult=(telMarks,engMarks,hinMarks,mathMarks,sciMarks,socMarks)=>{
   let total=telMarks+engMarks+hinMarks+mathMarks+sciMarks+socMarks;
   return total;
 };
 let result=kavithaTenthResult(78,65,34,67,89,90);
  console.log(result);



 
let kumariTenthDetails=(telMarks,engMarks,hinMarks,mathMarks,sciMarks,socMarks)=>{
  let total = telMarks+engMarks+hinMarks+mathMarks+sciMarks+socMarks;
  let perc =(total/600)*100;
  let passMarks=35;
  let result;
    if(telMarks>=35 && engMarks>=35 && hinMarks>=35 && mathMarks>=35 && sciMarks>=35 && socMarks>=35){
      result="Pass";
    }
    else{
      result="Fail";
    }
  let kumariResult={
  total:total,
  perc:perc.toFixed(2),
  result:result,
 };
 return kumariResult;
};

let kumaari= kumariTenthDetails(79,82,67,88,98,90);
 console.log(kumaari);

  return (
    <div className="App">
      <h1>Function with Return type</h1>
   <TenthResult></TenthResult>
    </div>
  );
}

export default App;
