import {DamElementen} from './De_Dam_Elementen.js'
import {PopupElementen} from './De_Dam_Elementen.js'

console.log(document.body.offsetWidth);

if (document.body.offsetWidth == 375) {
    console.log("Please flip device");
}

switch (document.body.offsetWidth){
    case 375:
        console.log("Please flip device");
        PopupElementen();
        break;
    case 667:
        DamElementen();
        break;
    default:
        console.log("Please flip device");
        PopupElementen();
}