import "./css/index.css"
import "./css/index2.scss"
import './css/index3.less'
import "./css/index4.styl"
import png from "./assets/1.png" 


console.log(png);

let div = document.getElementById("app")
div.innerHTML=`
<img src='${png}'>
`
let btn = document.createElement("button")
btn.innerText="懒加载"
btn.onclick=function(){
    const lazy = import("./lazy")
    lazy.then((module)=>{
        module.default()
    })
}
div.appendChild(btn)