import _ from 'lodash';               // 导入lodash模块
import printMe from './print.js';
import './styles.css';                 // 导入样式

function component() {
  let element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  let btn = document.createElement('button');
  btn.innerHTML = 'Clieck and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

if(module.hot){
	module.hot.accept('./print.js',() => {
		console.log('Accepting the updated printMe module!');
		printMe();
	});
}
