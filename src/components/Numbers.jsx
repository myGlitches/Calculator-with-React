import { useState } from "react"

function Numbers() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const ops = ["/", "+", "-", "*"]

  // Update Calc function

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return
    }
    setCalc(calc + value)

    if (!ops.includes(value)) {
      setResult(eval(calc + value))
    }
  }

  // Create Digits Function

  const createDigits = () => {
    const digits = []

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i)} key={i}>
          {i}
        </button>
      )
    }

    return digits
  }

  // Calculate Function

  const calculate = () => {
    setCalc(eval(calc).toString())
    console.log(calculate)
  }

  // Delete Last Symbol function

  const deleteLast = () => {
    if (calc === "") {
      return
    }
    const value = calc.slice(0, -1)

    setCalc(value)
  }

  // Delete All button function

  const deleteAll = () => {
    setCalc("")
    setResult("")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-300">
      <div className="w-full max-w-xs bg-white rounded-3xl overflow-hidden">
        {/* Display Div */}
        <div className="display p-10 text-right text-white text-3xl">
          {/* {result ? (
            <span className="text-xl text-gray-300">({result})</span>
          ) : (
            ""
          )}
          &nbsp; */}
          {calc || "0"}
        </div>
        {/* Operators Div */}
        <div className="operators flex bg-red">
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("*")}>X</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        {/* Digits Div */}
        <div className="digits flex flex-wrap">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button className="bg-brown-300" onClick={deleteAll}>
            AC
          </button>
        </div>
        <div className="equalsTo flex flex-wrap">
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Numbers
