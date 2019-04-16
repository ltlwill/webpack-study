import _ from 'lodash';               // ����lodashģ��
import printMe from './print.js';
import './styles.css';                 // ������ʽ

function component() {
  let element = document.createElement('div');

  // Lodash��Ŀǰͨ��һ�� script �ű����룩����ִ����һ���Ǳ����
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
