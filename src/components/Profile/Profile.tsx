// 리액트 기반 컴포넌트는 .tsx로 생성
// .ts 는 리액트 안됨 (jsx문법 사용 X)\

import { useState } from "react"

export default function Profile(props:{name:string, age:string}) : JSX.Element{
  
  // state는 일반적으로 타입을 명시 X (자동적용)
  let [myState, setMyState] = useState();

  return(
    <>
      <p>{props.name} 입니다.</p>
    </>
  )
}