import React,{useRef} from 'react'

function TenthResult() {
    let firstInputref = useRef();
    let lastInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let telInputRef = useRef();
    let engInputRef = useRef();
    let hinInputRef = useRef();
    let mathInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let resultParaRef = useRef();
    let firstSpanRef = useRef();
    let lastSpanRef = useRef();
    let emailSpanRef = useRef();
    let passwordSpanRef = useRef();
    let telSpanRef = useRef();
    let engSpanRef = useRef();
    let hinSpanRef = useRef();
    let mathSpanRef = useRef();
    let sciSpanRef = useRef();
    let socSpanRef = useRef();
    let firstRegEx =/^[A-Z][A-Za-z\s\-]{1,29}$/;
    let lastRegEx =/^[A-Z][A-Za-z\s\-]{0,19}$/;
    let emailRegEx =/^[a-z0-9]+@gmail\.com$/;
    let passwordRegEx =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_ ]{8,15}$/;


    let validateFirstName=(InputRef,SpanRef)=>{
         let Result = firstRegEx.test(InputRef.current.value)
         if(Result==true){
            SpanRef.current.innerHTML="valid";
            SpanRef.current.style.backgroundColor="lightgreen";
         }
         else{
            SpanRef.current.innerHTML="Invalid";
            SpanRef.current.style.backgroundColor="red";
         }
    };

    let validateLastName=(InputRef,SpanRef)=>{
        let Result=lastRegEx.test(InputRef.current.value)
        if(Result==true){
            SpanRef.current.innerHTML="Valid";
            SpanRef.current.style.backgroundColor="lightgreen";
        }
        else{
            SpanRef.current.innerHTML="Invalid";
            SpanRef.current.style.backgroundColor="red";
        }
    };

    let validateEmail=(InputRef,SpanRef)=>{
     let Result=emailRegEx.test(InputRef.current.value)
     if(Result==true){
        SpanRef.current.innerHTML="Valid";
        SpanRef.current.style.backgroundColor="lightgreen";
     }
     else{
        SpanRef.current.innerHTML="Invalid";
        SpanRef.current.style.backgroundColor="red";
     }
    };

    let validatePassword=(InputRef,SpanRef)=>{
        let Result=passwordRegEx.test(InputRef.current.value)
        if(Result==true){
            SpanRef.current.innerHTML="Valid";
            SpanRef.current.style.backgroundColor="lightgreen";
        }
        else{
            SpanRef.current.innerHTML="Invalid";
            SpanRef.current.style.backgroundColor="red";
        }
    }

    let inputOnFocus=(InputRef)=>{
     InputRef.current.style.backgroundColor ="lightpink";
    };

    let inputOnChange=(InputRef,SpanRef)=>{
        if(InputRef.current.value>=0 && InputRef.current.value<=100){
            if(InputRef.current.value>=35){
                SpanRef.current.innerHTML="Pass";
                SpanRef.current.style.backgroundColor="lightgreen";
            }
            else{
                SpanRef.current.innerHTML="Fail";
                SpanRef.current.style.backgroundColor="red";
            }
        }
        else{
            SpanRef.current.innerHTML="Invalid";
            SpanRef.current.style.backgroundColor="yellow";
        }
    };

    let inputOnBlur=(InputRef)=>{
    InputRef.current.style.backgroundColor="lightblue";
    };

  return (
    <div>
          <form>
              <div>
                  <label>FirstName</label>
                  <input ref={firstInputref} onFocus={() => {
                      inputOnFocus(firstInputref);
                  } }
                      onChange={() => {
                        validateFirstName(firstInputref,firstSpanRef);
                      } }
                      onBlur={() => {
                          inputOnBlur(firstInputref);
                      } }></input>
                  <span ref={firstSpanRef}></span>
              </div>
              <div>
                  <label>LastName</label>
                  <input ref={lastInputRef} onFocus={() => {
                      inputOnFocus(lastInputRef);
                  } }
                  onChange={()=>{
                    validateLastName(lastInputRef,lastSpanRef);
                  }}
                  onBlur={() => {
                    inputOnBlur(lastInputRef);
                  } }></input>
                  <span ref={lastSpanRef}></span>
                  </div>
              <div>
              <label>Email</label>
              <input ref={emailInputRef}onFocus={()=>{
                inputOnFocus(emailInputRef);
              }}
              onChange={()=>{
                validateEmail(emailInputRef,emailSpanRef);
              }}
              onBlur={()=>{
                inputOnBlur(emailInputRef);
              }}></input>
              <span ref={emailSpanRef}></span>
              </div>
              <div>
              <label>Password</label>
              <input ref={passwordInputRef} onFocus={()=>{
                inputOnFocus(passwordInputRef);
              }}
              onChange={()=>{
                validatePassword(passwordInputRef,passwordSpanRef);
              }}
              onBlur={()=>{
                inputOnBlur(passwordInputRef);
              }}></input>
              <span ref={passwordSpanRef}></span>
              </div>
              <div>
              <label>TelMarks</label>
              <input ref={telInputRef}onFocus={()=>{
                inputOnFocus(telInputRef);
              }}
              onChange={()=>{
                inputOnChange(telInputRef,telSpanRef);
              }}
              onBlur={()=>{
                inputOnBlur(telInputRef);
              }}></input>
              <span ref={telSpanRef}></span>
              </div>
              <div>
              <label>English</label>
              <input ref={engInputRef}onFocus={()=>{
                inputOnFocus(engInputRef);
              }}
              onChange={()=>{
                inputOnChange(engInputRef,engSpanRef);
              }}
              onBlur={()=>{
                inputOnBlur(engInputRef);
              }}></input>
              <span ref={engSpanRef}></span>
              </div>
              <div>
              <label>Hindhi</label>
              <input ref={hinInputRef}onFocus={()=>{
                inputOnFocus(hinInputRef);
              }}
              onChange={()=>{
                 inputOnChange(hinInputRef,hinSpanRef);
              }}
              onBlur={()=>{
                inputOnBlur(hinInputRef);
              }}></input>
              <span ref={hinSpanRef}></span>
              </div>
              <div>
              <label>Maths</label>
              <input ref={mathInputRef}onFocus={()=>{
                inputOnFocus(mathInputRef);
              }}
              onChange={()=>{
                inputOnChange(mathInputRef,mathSpanRef);
              }}
              onBlur={()=>{
                inputOnBlur(mathInputRef);
              }}></input>
              <span ref={mathSpanRef}></span>
              </div>
              <div>
              <label>Science</label>
              <input ref={sciInputRef}onFocus={()=>{
                inputOnFocus(sciInputRef);
              }}
              onChange={()=>{
                 inputOnChange(sciInputRef,sciSpanRef);
              }}
              onBlur={()=>{
                inputOnBlur(sciInputRef);
              }}></input>
              <span ref={sciSpanRef}></span>
              </div>
              <div>
              <label>social</label>
              <input ref={socInputRef}onFocus={()=>{
                inputOnFocus(socInputRef);
              }}
              onChange={()=>{
                  inputOnChange(socInputRef,socSpanRef);
              }}
              onBlur={()=>{
                inputOnBlur(socInputRef);
              }}></input>
              <span ref={socSpanRef}></span>
              </div>
              <div>
              <button type="button" onClick={() => {
                  let firstName = firstInputref.current.value;
                  let lastName = lastInputRef.current.value;
                  let email = emailInputRef.current.value;
                  let password = passwordInputRef.current.value;
                  let telMarks = Number(telInputRef.current.value);
                  let engMarks = Number(engInputRef.current.value);
                  let hinMarks = Number(hinInputRef.current.value);
                  let mathMarks = Number(mathInputRef.current.value);
                  let sciMarks = Number(sciInputRef.current.value);
                  let socMarks = Number(socInputRef.current.value);

                  let total = telMarks + engMarks + hinMarks + mathMarks + sciMarks + socMarks;
                  let perc = (total / 600) * 100;
                  let passMarks = 35;
                  let result;
                  if (telMarks >= 35 && engMarks >= 35 && hinMarks >= 35 && mathMarks >= 35 && sciMarks >= 35 && socMarks) {
                      result = "Pass";
                  } else {
                      result = "Fail";
                  }
                  resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} got score ${total} with percentage ${perc.toFixed(2)}`;
              } }>Click here for result</button>
            </div>
            <div>
              <p ref={resultParaRef}>Result</p>
          </div>
      </form>
    </div>
  )
}

export default TenthResult
