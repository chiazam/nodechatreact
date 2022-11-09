import a from "../class/a.js";

import signlogsvg from '../file/signlog.svg';

export let Signlogtemp =(props)=>{

    let end = a.uniqid();

 return(<section class="flex">

    <section class="flex-1">
        
        <img alt="SignUp or Login" src={signlogsvg}/>
    
    </section>

    <section id={`${end}_signlog`}> fghjk </section>

 </section>);

};